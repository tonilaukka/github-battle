var USER_DATA = {
  name: 'Toni Laukka',
  username: 'tonilaukka',
  image: 'https://avatars1.githubusercontent.com/u/1569180?v=3&s=460'
}

import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'

const handleClick = (props) =>
  window.location.replace(props)

const Link = (props) => {
  return (
    <span
      style={{ color: 'blue', cursor: 'pointer' }}
      onClick={() => handleClick(props.href)}>
      {props.children}
    </span>
  )
}

const ProfilePic = ({ image }) =>
  <img src={image} style={{height: 100, width: 100}} /> 

const ProfileLink = ({ username }) => 
  <Link href={'https://www.github.com/' + username}>
    {username}
  </Link>

const ProfileName = ({ name }) =>
  <div>{name}</div>

const Avatar = ({ user }) =>
  <div>
    <ProfilePic image={user.image} />
    <ProfileName name={user.name} />
    <ProfileLink username={user.username} />
  </div>

render(
  routes,
  document.getElementById('app')
)
