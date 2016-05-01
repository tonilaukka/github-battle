import React, { Component, PropTypes } from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = { username: '' }

  handleUpdateUser = (evt) => 
    this.setState({ username: evt.target.value })

  handleSubmitUser = (evt) => {
    evt.preventDefault()
    let username = this.state.username
    this.setState({
      username: ''
    })

    let playerOne = this.props.routeParams.playerOne
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: playerOne,
          playerTwo: username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + username)
    }
  }

  render() {
    return (
      <Prompt
        header={this.props.route.header}
        username={this.state.username}
        onSubmit={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser} />
    )
  }
}

export default PromptContainer

