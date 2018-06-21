import React, { Component } from 'react';

const Header = (props) => {
  console.log(props);
  return (
      <div>
        <h1>{ props.title }</h1>
        <p>{ props.subtitle }</p>
      </div>
  )
}

Header.defaultProps = {
  title: 'Todo app !!!!!!!!!!!',
  subtitle: 'Subtitle of the app'
};

export default Header;