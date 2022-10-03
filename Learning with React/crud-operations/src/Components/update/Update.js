import axios from 'axios';
import React, {useState, useEffect } from 'react'
import Read from '../read/Read';
import { useNavigate } from 'react-router-dom';


export default function Update() {
    const navigate = useNavigate();
    const [flag,setFlag] = useState(false)
    const [username,setUsername] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [id,setID] = useState(null);

    // console.log(username,firstname,lastname);
    
    useEffect(()=>{
      if(!flag)
      {
        setID(localStorage.getItem('ID'));
        setUsername(localStorage.getItem('username'));
        setFirstname(localStorage.getItem('firstname'));
        setLastname(localStorage.getItem('lastname'));
      }
        
    },[flag])

    const sendData = () =>{

        axios.put(`https://63388824937ea77bfdc173a7.mockapi.io/crud/${id}`,{
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
        <h2>Update Your Details</h2>
        <div className="input-field">
            <label>User Name</label>
            <input name='username' 
                    placeholder='User Name'
                    value={username}
                    onChange = {handlesetUsername}
                    />
        </div>
        <div className="input-field">
            <label>First Name</label>
            <input name='firstname' 
                    placeholder='First Name'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    />
            </div>
            <div className="input-field">
            <label>Last Name</label>
            <input name='lastname' 
                    placeholder='Last Name'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    />
            </div>
            <button type='submit' onClick={sendData}>Save</button>
            <button type='submit' onClick={()=>navigate(-1)}>Cancel</button>
    </div>
  </div>
  
    </div>
   
  )
}
