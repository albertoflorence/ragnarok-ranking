import React from 'react'
import { ExpansionPanelDetails, Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    'box-shadow': 'inset 0px 0px 3px 1px rgba(0, 0, 0, 0.2)',
    padding: '8px 12px 8px 0px'
  },
  detail: {
    fontSize: theme.typography.pxToRem(10),
    border: '1px solid rgba(0, 0, 0, 0.2)',
    margin: '1px 3px 0 3px',
    padding: '1px 2px 1px 2px',
    'text-align-last': 'justify',
    color: 'rgba(0, 0, 0, 0.8)',
    width: '100%'
  },
  span: {
    'font-size': theme.typography.pxToRem(10)
  }
}))

export default function RankingDetails({ details }) {
  const classes = useStyles()

  const Detail = (array, text) => (
    <Grid item md={3} xs={6}>
      <span className={classes.span}>{text}</span>
      {array.map(({ name, qtd }) => (
        <div key={name} className={classes.detail}>
          <span>{name}: </span>
          <span>{qtd}</span>
        </div>
      ))}
    </Grid>
  )
  return (
    <ExpansionPanelDetails>
      <Grid
        className={classes.root}
        container
        direction={'row'}
        justify="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        {Detail(details.matou.classes, 'Matou as classes')}
        {Detail(details.morreu.classes, 'Morreu para as classes')}
        {Detail(details.matou.guilds, 'Matou as guilds')}
        {Detail(details.morreu.guilds, 'Morreu para as guilds')}
      </Grid>
    </ExpansionPanelDetails>
  )
}
