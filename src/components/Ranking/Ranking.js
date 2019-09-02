import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ExpansionPanel, ExpansionPanelSummary, Grid } from '@material-ui/core'
import Score from './Score'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    'margin-bottom': '0.5em'
  },
  panelExpanded: {
    border: '1.5px solid #d47559',
    'border-left': '6px solid #d47559'
  },
  panel: {
    border: '1.5px solid white',
    'border-left': '6px solid white'
  },
  heading: {
    fontSize: theme.typography.pxToRem(10)
  },
  position: {
    'font-weight': 'bold',
    color: '#d47559',
    fontSize: theme.typography.pxToRem(17),
    'text-align': 'start',
    'margin-right': '4px'
  },
  positionBox: {
    position: 'absolute',
    'align-self': 'flex-start',
    'margin-top': '-12px',
    width: '100%'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary
  },
  scoreText: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.primary,
    'margin-bottom': '0'
  },
  scoreNumber: {
    fontSize: theme.typography.pxToRem(7),
    color: theme.palette.text.secondary,
    'margin-top': '2px'
  }
}))

export default function Ranking({ ranking, children }) {
  const classes = useStyles()

  const { player, guild, morreu, matou, classe, position } = ranking

  const [expanded, setExpanded] = React.useState(false)
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const classesIcon = {
    Bruxo: 'images/bruxo-icon.gif',
    Monge: 'images/monge-icon.gif',
    Caçador: 'images/caçador-icon.gif',
    Mercenário: 'images/mercenário-icon.gif',
    Sábio: 'images/sábio-icon.gif',
    Sacerdote: 'images/sacerdote-icon.gif',
    Cavaleiro: 'images/cavaleiro-icon.gif',
    Templário: 'images/templário-icon.gif',
    Odalisca: 'images/odalisca-icon.gif',
    Bardo: 'images/bardo-icon.gif'
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        className={expanded ? classes.panelExpanded : classes.panel}
        expanded={!!expanded}
        square={!!expanded}
        onChange={handleChange(`panel${player}`)}
      >
        <ExpansionPanelSummary style={{ padding: '0' }}>
          <Grid container alignItems="center" direction="row" justify="space-between">
            <Grid item xs={2}>
              <img style={{ width: '60px', height: 'auto' }} src={classesIcon[classe]} alt="" />
            </Grid>
            <Grid item xs={4} sm={3}>
              <Typography className={classes.heading}>{player}</Typography>
              <Typography className={classes.secondaryHeading}>{classe}</Typography>
            </Grid>
            <Grid item sm={4} xs={1}>
              <Grid container direction="row" justify="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Score
                    color="green"
                    icon="images/killer-icon.gif"
                    text="Matou"
                    number={matou.length}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Score
                    color="red"
                    icon="images/dead-icon.gif"
                    text="Morreu"
                    number={morreu.length}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={2}>
              <Grid container direction="column">
                <Grid item>
                  <img src="images/guild-emblem.bmp" alt="Emblema da Guild" />
                </Grid>
                <Grid item>
                  <Typography className={classes.secondaryHeading}>{guild}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.positionBox}>
              <Typography className={classes.position}>{position}</Typography>
            </div>
          </Grid>
        </ExpansionPanelSummary>
        {expanded === `panel${player}` ? children(player) : <></>}
      </ExpansionPanel>
    </div>
  )
}
