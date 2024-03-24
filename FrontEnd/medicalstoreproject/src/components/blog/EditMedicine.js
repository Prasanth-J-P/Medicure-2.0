import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import React from "react";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
import image from "./images/addmedicine.jpg";
import { Link } from "react-router-dom";
function EditMedicine() {
    const {postId} = useParams();
    const [name, setName] = useState('');
    const [company, setDescription] = useState('');
    const [date, setDate] = useState();
    let navigate = useNavigate();
    useEffect(()=>{
       if(user){
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId,{headers:{'Authorization':"Bearer "+ user.token}}).then(response=>{
            setName(response.data.name);
            setDescription(response.data.company);
            setDate(response.data.expiry_date);
        }).catch(error=>{
            alert(error.message)
        })
    }
        else navigate('/login');
    },[postId,navigate]);

    function updatePost(){
        if(name.trim()==="" || company.trim()===""|| date.trim()===""  ) {alert("Input fields cannot be empty");}
        else{
        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+postId,{
            name: name,
            company: company,
            expiry_date: date
        },{headers:{'Authorization':"Bearer "+ user.token}}).then(response=>{
            navigate('/listmed/'+postId+'/viewmed');
           alert("Update Successful......");
           
        }).catch(error=>{
            alert(error)
        })
    }
    

    }
    var user = useSelector(store=>store.auth.user);
    return <div>
        <Navbar/>
        <h1 style={{textAlign:"center", marginTop:"20px"}}><b>Edit Medicine</b></h1>
        <div className="container" style={{ padding: "0", width: "60%", height: "130%", marginTop: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "0", overflow: "hidden" }}>
            <div className="row" style={{ padding: "0" }}>
                <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover",display:"block", height:"auto",backgroundPositionX: "center",backgroundPositionY: "center"}}>
                    <Link to={"/list"} className="btn btn-info" style={{ borderRadius: "50%", marginLeft: "5px", marginTop: "5px" }}><span className="fa fa-home" ></span></Link>
                </div>
                <div className="col-12 col-md-6" style={{textAlign:"center"}}>
                <div style={{textAlign:"center" , lineHeight:"30px", marginTop:"40px", marginBottom:"40px"}}>
                    <div className="form-group">
                        <input type="text" style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}} value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <textarea style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}}  value={company} onChange={(event)=>{setDescription(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <input style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}} type="date"  value={date} onChange={(event)=>{setDate(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" style={{width:"75%"}} onClick={updatePost}>Submit</button>
                    </div> 
                    </div>                   
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(EditMedicine);