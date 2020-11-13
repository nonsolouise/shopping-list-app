import React from 'react';
import { Link } from "react-router-dom";

const ListDisplay = ({ title, handleDelete, id }) => {

   const titleStyle = {
      textTransform: 'capitalize',
   }

   return <div className='container-fluid m-2 text-light border border-danger p-2 rounded bg-dark'>
      <div className='row'>
         <div className='col-md-12'>
            <div className='row'>
               <div className='col-md-8' style={ titleStyle }>
                  { title }
               </div>
               <div className='col-md-2 col-3 mr-auto'>
                  <Link to={ `/items/${id}` }>
                  <button className='btn btn-warning'>
                     view
                  </button>
                  </Link>
               </div>
               <div className='col-md-2 col-1 m-auto'>
                  {/* <Button text='delete' delete={ handleDelete } /> */}
                  <button className='btn btn-danger' onClick={ () => handleDelete(id) }>
                     delete
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default ListDisplay;