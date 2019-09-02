import React from 'react'
import Layout from './components/UI/Layout'
import RankingContainer from './containers/RankingContainer'
import { LinearProgress } from '@material-ui/core'
import { connect } from 'react-redux'
import { getIsFetching } from './store/reducers'
import { withStyles } from '@material-ui/core/styles'

const mapStateToProps = state => ({
  isFetching: getIsFetching(state)
})

function App({ isFetching }) {
  return (
    <div className="App">
      <Layout
        loading={isFetching ? <LinearProgress /> : <></>}
        main={<RankingContainer isFetching={isFetching} />}
      ></Layout>
    </div>
  )
}

const styles = theme => ({
  '@global': {
    html: {
      fontSize: 16,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 20
      }
    }
  }
})

export default connect(mapStateToProps)(withStyles(styles)(App))
