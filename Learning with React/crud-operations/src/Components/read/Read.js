import './Read.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import pic from'../Assests/user.png';
import Modal from '../Modal/Modal';


export default function Read() {
    const [userAPIData, setuserAPIData] = useState([]);
    const [flag,setFlag] = useState(false)
    const [dialog, setDialog] = useState({
        msg:"",
        status:false,
        name: "",
        userid: null
    });
    useEffect(
        () =>{
            if(!flag)
            {
                axios.get(`https://63388824937ea77bfdc173a7.mockapi.io/crud` )
                .then((response) =>{
                    setuserAPIData(response.data);
                    setFlag(true);
                    console.log(response.data);
                    console.log(flag);
                    setFlag()

                },[flag])}
            }
        
        
        );
    const setData = (id,username,firstname,lastname) => {
        console.log(id,username,firstname,lastname);
        localStorage.setItem('ID',id);
        localStorage.setItem('username',username);
        localStorage.setItem('firstname',firstname);
        localStorage.setItem('lastname',lastname);
    }

    const getData = () =>{
        
        axios.get(`https://63388824937ea77bfdc173a7.mockapi.io/crud` )
        .then((response) => {
            setuserAPIData(response.data);
            console.log(response.data);
        })
    }


    const handleDialog = (msg,status,name,userid) =>{
        console.log(msg,status,name,userid);
        setDialog({msg,status,name,userid});
    }

    const confirmDelUser = (flag) =>{
        if(flag)
        {
            console.log(dialog.userid);
            const index = userAPIData.findIndex(user => user.id === dialog.userid )
            const deletedUser = userAPIData[index];
            
            axios.delete(`https://63388824937ea77bfdc173a7.mockapi.io/crud/${dialog.userid}`,deletedUser)
            .then(() => {
                getData();
            })
            handleDialog("",false);
        }
        else{
            handleDialog("",false);
        }
    }
    const delUser = (id) => {
        console.log(id);
        const index = userAPIData.findIndex(user => user.id === id )
        const deletedUser = userAPIData[index];
        handleDialog("Are you sure you want to delete?",true,`${userAPIData[index].firstname} ${userAPIData[index].lastname}`,userAPIData[index].id)
       
        
        // axios.delete(`https://63388824937ea77bfdc173a7.mockapi.io/crud/${id}`,deletedUser)
        // .then(() => {
        //    getData();
        // })
    }
  return (
    <div>
        <div>
            <div id='user-container'>
                {userAPIData.map(user =>{
                    return(
                            <div className='user-info'>
                                {/* <div>{user.id}</div> */}
                                <div className="user-img-container"><img className="user-img" src={pic} alt="user Logo"/></div>
                                <div className='name'>{user.username}</div>
                                <div><label className="user-label">Firstname:</label>{user.firstname}</div>
                                <div><label className="user-label">Lastname:</label>{user.lastname}</div>
                                <div className='button'>
                                    <Link to='/update'>
                                        <button className='edit-button' onClick={()=> setData(user.id,user.username,user.firstname,user.lastname)}>Update</button>
                                    </Link>
                                    <button className='dlt-button' onClick={() => delUser(user.id)}>Delete</button>
                                </div>
                                {dialog.status && (<Modal name = {dialog.name}
                                                          del = {confirmDelUser}
                                                          msg = {dialog.msg}
                                />)}
                            </div>
                        )
                })}
            </div>
        </div>
    </div>
  )
}
