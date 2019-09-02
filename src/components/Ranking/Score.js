import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  scoreText: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.primary,
    'margin-bottom': '0'
  },
  scoreNumber: {
    fontSize: theme.typography.pxToRem(10),
    'margin-top': '2px'
  }
}))

export default function Score({ icon, color, number, text }) {
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Hidden xsDown>
        <Grid item>
          <img src={icon} alt="" />
        </Grid>
      </Hidden>
      <Grid item>
        <p className={classes.scoreText}>{text}</p>
        <p className={classes.scoreNumber} style={{ color: color }}>
          {number}
        </p>
      </Grid>
    </Grid>
  )
}
