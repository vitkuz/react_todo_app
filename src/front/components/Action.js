import React, { Component } from 'react';

const Action = (props) => (
    <div>
      <button onClick={props.selectRandom}>Select Random</button>
      <button onClick={props.removeAll}>Remove All</button>
    </div>
)

export default Action;