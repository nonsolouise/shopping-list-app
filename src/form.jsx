import React from 'react';

const Form = (props) => {

   const [ listTitle, handleListTitle ] = React.useState('');

   const onListTitleChange = (event) => {
      handleListTitle(event.target.value);
   }

   const add = () => {
      if(listTitle !== '') {
         props.handleAddList(listTitle);
         handleListTitle('');
         console.log('clicked')
      }
   }

   console.log(listTitle)

   return <div>
      <div className='row mb-3 mt-3 ml-1'>
         <div className='col-md-10 col-9'>
            <input type='text' className='form-control' value={ listTitle } onChange={ onListTitleChange } placeholder='add a new shopping list...' />
         </div>
         <div className='col-md-2 col-3'>
            <button className='btn btn-primary ' onClick={ add }> + Add  </button>
         </div>
      </div>
   </div>
}

export default Form;