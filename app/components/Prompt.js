import React, { PropTypes } from 'react'
import styles from '../styles'

const Prompt = ({ header, username, onSubmit, onUpdateUser }) =>
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
    <h1>{header}</h1>
    <div className="col-sm-12">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Github Username"
            onChange={onUpdateUser}
            value={username}
            type="text" />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button
            className="btn btn-block btn-success"
            type="submit">
              Continue
          </button>
        </div>
      </form>
    </div>
  </div>

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
}

export default Prompt

