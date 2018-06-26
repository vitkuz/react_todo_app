import React, { Component } from 'react';

const AddPage = (props) => {
  return (
      <div className="content">
        <h1>Add page</h1>
        <div>
          Add page
        </div>
      </div>
  )
};

AddPage.defaultProps = {
  title: 'Add page',
  subtitle: 'Subtitle of the app'
};

export default AddPage;