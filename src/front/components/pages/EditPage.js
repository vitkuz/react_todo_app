import React, { Component } from 'react';

const EditPage = (props) => {
  console.log(props);
  
  const itemToUpdate = props.items.find((item) => {
    return item.id === props.match.params.id;
  });
  
  console.log(itemToUpdate);
  
  return (
      <div>
        <h1>Edit page</h1>
        <form onSubmit={props.updateItem}>
          <input type="text"
                 name="todoTitle" 
                 value={itemToUpdate.title}
                 onChange={props.onInputChange}/>
          <button>Update</button>
        </form>
      </div>
  )
};


EditPage.defaultProps = {
  title: 'Todo app !!!!!!!!!!!',
  subtitle: 'Subtitle of the app'
};

export default EditPage;