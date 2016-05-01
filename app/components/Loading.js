import React, { Component, PropTypes } from 'react'

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
}

class Loading extends Component {

  static propTypes = {
    speed: PropTypes.number,
    text: PropTypes.string
  }

  static defaultProps = {
    speed: 300,
    text: 'Loading'
  }

  state = {
    speed: this.props.speed,
    text: this.props.text
  }

  componentDidMount() {
    let stopper = `${this.props.text}...`

    this.interval = setInterval( () => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        })
      } else {
        this.setState({
          text: `${this.state.text}.` 
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

export default Loading

