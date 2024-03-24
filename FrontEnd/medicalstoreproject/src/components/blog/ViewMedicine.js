import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../Navbar";
import { Link } from "react-router-dom"; 
import React from "react";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
function ViewMedicine() {
   
    let navigate = useNavigate();
    var {postId} = useParams()
    var [post,setPost] = useState({name:'',company:'',date:''})
    useEffect(()=>{
        if(user){
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId,{headers:{'Authorization':"Bearer "+ user.token}}).then(response=>{
            setPost(response.data);
        })}
        else navigate('/login');
    },);
    function deletePost() {
        
        if(!user){
            navigate("/login");
        }
        else{
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/' + post.id,{
            headers:{'Authorization':"Bearer "+ user.token}}).then(response => {
            alert("delete Successful");
            navigate("/list");
        }) 
       
    } 
}
var user = useSelector(store=>store.auth.user);
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header"><h3>{post.name}</h3></div>
                        <div className="card-body">
                            <p>Company:{post.company}</p>
                            <p>Expiry_Date:{post.expiry_date}</p>
                            </div>
                        <div className="card-footer">
                        <Link to={"/listmed/"+post.id+"/editmed"} className="btn btn-warning" style={{borderRadius:"50%", marginLeft:"10px", marginRight:"10px" , float:"right"}}><span className="fa fa-edit"></span></Link>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal" style={{borderRadius:"50%", float:"right"}}><span className="fa fa-trash-o" ></span></button>
                        <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Confirm Delete</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                Do You really want to delete {post.name}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={deletePost} style={{borderRadius:"50%", float:"right"}}><span className="fa fa-trash-o" ></span></button>
                            </div>

                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(ViewMedicine);