import React, { Component } from 'react'
import Ranking from '../components/Ranking/Ranking'
import { connect } from 'react-redux'
import { getRanking } from '../store/reducers'
import { fetchRanking, filterRanking, sortRanking } from '../store/actions'
import RankingDetailsContainer from './RankingDetailsContainer'
import FilterInputs from '../components/Ranking/FilterInputs'

class RankingContainer extends Component {
  state = {
    show: 7
  }
  componentDidMount() {
    this.props.fetchRanking()
    window.onscroll = () => {
      if (
        window.innerHeight + Math.ceil(document.documentElement.scrollTop) + 1 >=
        document.documentElement.offsetHeight
      ) {
        const { ranking } = this.props
        const { show } = this.state
        if (show < ranking.length) {
          this.setState({
            ...this.state,
            show: show + 7
          })
        }
      }
    }
  }
  handleFilter = (text, filter) => {
    this.props.filterRanking(text, filter)
  }
  handleSort = sortBy => {
    this.props.sortRanking(sortBy)
  }

  renderRanking = (player, index) => (
    <Ranking key={player.player} ranking={{ ...player, position: index + 1 }}>
      {playerName => <RankingDetailsContainer playerName={playerName} />}
    </Ranking>
  )

  render() {
    const ranking = this.props.ranking.slice(0, this.state.show)
    return this.props.isFetching ? (
      <></>
    ) : (
      <div>
        <FilterInputs onFilter={this.handleFilter} onSort={this.handleSort} />
        {ranking.map(this.renderRanking)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ranking: getRanking(state)
})

export default connect(
  mapStateToProps,
  { fetchRanking, filterRanking, sortRanking }
)(RankingContainer)
