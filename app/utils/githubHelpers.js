import axios from 'axios'

const id = "YOUR_CLIENT_ID"
const secret = "YOUR_SECRET_ID"
const params = `?client_id=${id}&client_secret=${secret}`

function getUserInfo( username ) { 
  // return axios.get('https://api.github.com/users/' + username + params)
  return axios.get(`https://api.github.com/users/${username}`)
}

function getRepos( username ) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

function getTotalStars( repos ) {
  return repos.data.reduce( (prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData( player ) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then( totalStars => {
      return { followers: player.followers, totalStars: totalStars }
    })
}

function calculateScores( players ) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars,
  ]
}

let helpers = {
  getPlayersInfo(players) {
    // fetch user data from Github
    return axios.all(players.map( username => {
      return getUserInfo(username)
    })).then( info => {
      return info.map( user => {
        return user.data
      })
    }).catch( error => {
      console.warn('Error in getPlayersInfo:', error)
    })
  },
  battle(players) {
    let playerOneData = getPlayersData(players[0])
    let playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch( error => console.warn('Error in getPlayersData:', error) )
  }
}

export default helpers

