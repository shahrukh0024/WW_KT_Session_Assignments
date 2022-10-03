import axios from 'axios';
import React, { useId, useState } from 'react'
import Read from '../read/Read';
import { useNavigate } from 'react-router-dom';
import './Create.css'

export default function Create() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");

    // console.log(username,firstname,lastname);
    

    const sendData = () =>{
        const users = [username,firstname,lastname]
        axios.post(`https://63388824937ea77bfdc173a7.mockapi.io/crud`,{
            username,
            firstname,
            lastname
        }).then(()=>{
          navigate("/read");
        })
       
    }

    const handlesetUsername = (e) =>{
        setUsername(e.target.value)
    }
  return (
    <div>
    
  <div className='container'>
    <div className='form-box'>
        <h2>Create Your Account</h2>
        <div className="input-field">
            <label>User Name</label>
            <input name='username' 
                    placeholder='User Name'
                    onChange = {handlesetUsername}
                    />
        </div>
        <div className="input-field">
            <label>First Name</label>
            <input name='firstname' 
                    placeholder='First Name'
                    onChange={(e) => setFirstname(e.target.value)}
                    />
            </div>
            <div className="input-field">
            <label>Last Name</label>
            <input name='lastname' 
                    placeholder='Last Name'
                    onChange={(e) => setLastname(e.target.value)}
                    />
            </div>
            <button type='submit' onClick={sendData}>Submit</button>
    </div>
  </div>
  
    </div>
   
  )
}
