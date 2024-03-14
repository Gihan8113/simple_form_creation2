//import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
  

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  console.log("Name:", name);
  console.log("Address:", address);
  console.log("Email:", email);
  console.log("Phone:", phone);
  
  }


  return(
    
    <form className="centered-form" onSubmit={handleSubmit}>
      <h1> Customer Details</h1>
      <div className="form-group">
      <label htmlFor="name"> Name: </label>
        <input type="text" id="name" name="name"/>
      </div>
      
      <div className="form-group">
      <label htmlFor="address"> Address:</label>
        <input type="text" id="address" name="address"/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone No:</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div className='button-group'> 
        <button className='button' type='submit'> Save </button>
        <button className='button' type='button'> Cancel </button>
      </div>
    </form>
    
  );
    
  
}

export default App;
