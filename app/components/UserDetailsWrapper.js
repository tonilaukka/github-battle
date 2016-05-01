import React, { PropTypes } from 'react'

const UserDetailsWrapper = (props) =>
  <div className="col-sm-6">
    <div className="lead">{props.header}</div>
    {props.children}
  </div>

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
}

export default UserDetailsWrapper

