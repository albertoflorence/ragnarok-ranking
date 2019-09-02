import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    ' background-color': '#0d202b',
    'text-align': 'center',
    flexGrow: 1,
    'min-height': '100vh',
    'align-content': 'flex-start'
  },
  header: {
    height: '55px'
  },
  loading: {
    'margin-bottom': '150px',
    height: '20px'
  },
  main: {
    padding: '5px',
    'max-width': '700px'
  },
  leftside: {},
  rightSide: {}
}))

export default function Layout({ main, header, loading }) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.root}
      direction={'row'}
      justify={'center'}
      alignItems={'flex-start'}
    >
      <Grid item xs={12} className={classes.header}>
        {header}
      </Grid>
      <Grid item xs={12} className={classes.loading}>
        {loading}
      </Grid>
      <Grid item className={classes.main} xs={12}>
        {main}
      </Grid>
    </Grid>
  )
}
