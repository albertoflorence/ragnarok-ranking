import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetails } from '../store/reducers'
import RankingDetails from '../components/Ranking/RankingDetails'

export class RankingDetailsContainer extends Component {
  render() {
    const { details } = this.props
    return <RankingDetails details={details} />
  }
}

const mapStateToProps = (state, { playerName }) => ({
  details: getDetails(state, playerName)
})

export default connect(mapStateToProps)(RankingDetailsContainer)
