import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

const Input = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: theme.typography.pxToRem(12),
    height: 'auto',
    padding: '10px 26px 10px 12px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#d47559',
      boxShadow: '0 0 0 0.1rem #d47559',
      backgroundColor: theme.palette.background.paper
    }
  }
}))(InputBase)

const Label = withStyles(theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13),
    color: 'white',
    '&$focused': {
      color: '#d47559'
    }
  },
  focused: {
    color: 'green'
  }
}))(InputLabel)

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'start'
  },
  margin: {
    margin: theme.spacing(1),
    'min-width': '100px'
  }
}))

export default function FilterInputs({ onFilter, onSort }) {
  const classes = useStyles()
  const [inputs, setInputs] = React.useState({ text: '', sort: 'kills' })

  const handleChange = field => event => {
    if (field === 'sort') {
      onSort(event.target.value)
    }
    setInputs({ ...inputs, [field]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setInputs({ ...inputs, sort: 'kills' })
    onFilter(inputs.text)
  }

  const Select = ({ classes, text, options, onChange, value, name, id }) => (
    <FormControl className={classes}>
      <Label htmlFor={id} shrink>
        {text}
      </Label>
      <NativeSelect value={value} onChange={onChange} input={<Input name={name} id={id} />}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <FormControl className={classes.margin}>
        <Label shrink htmlFor="search-input">
          Pesquisar
        </Label>
        <Input
          autoFocus={true}
          value={inputs.text}
          id="search-input"
          onChange={handleChange('text')}
        />
      </FormControl>
      <div>
        <Select
          text="Ordenar por"
          id="sort-select"
          classes={classes.margin}
          options={[
            { value: 'kills', text: 'Abates' },
            { value: 'deaths', text: 'Mortes' },
            { value: 'classe', text: 'Classe' },
            { value: 'guild', text: 'Guild' }
          ]}
          onChange={handleChange('sort')}
          value={inputs.sort}
        />
      </div>
    </form>
  )
}
