import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'
import styles from '../styles'

const ConfirmBattle = (props) => 
  props.isLoading === true
    ? <Loading speed={800} text='Waiting'/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header='Player One'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player Two'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div class="col-sm-12" style={styles.space}>
            <button
              type="button"
              className="btn btn-lg btn-success"
              onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div class="col-sm-12" style={styles.space}>
            <Link to='playerOne'>
              <button className="btn btn-lg btn-danger" type="button">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>


ConfirmBattle.propTypes = {
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle
