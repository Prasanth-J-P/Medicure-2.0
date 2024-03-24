import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import image from "./images/addmedicine.jpg";
import  {useSelector}  from "react-redux";
import { Link } from "react-router-dom";

function AddMedicine() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();

    var navigate = useNavigate();


    function addMedicine() {
        var data = {
            name: name,
            company: description,
            expiry_date: date
        };   
        if(name.trim()==="" || description.trim()===""|| date==null  ) {alert("Input fields cannot be empty");}
        else{
            axios.post('https://medicalstore.mashupstack.com/api/medicine', data,{
                headers:{'Authorization':'Bearer '+ user.token}})
                .then(response => {
                    navigate('/list');
                    alert('Medicine added')
                }).catch(error => {
                    alert("Invalid entry")
                    navigate('/addmed')
                });}
                
    }
    var user = useSelector(store=>store.auth.user); 
    return (
        <div>
            <Navbar />
            <h1 style={{textAlign:"center", marginTop:"20px"}}><b>Add Medicine</b></h1>
        <div className="container" style={{ padding: "0", width: "60%", height: "130%", marginTop: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px", borderRadius: "0", overflow: "hidden" }}>
            <div className="row" style={{ padding: "0" }}>
                <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover",display:"block", height:"auto",backgroundPositionX: "center",backgroundPositionY: "center"}}>
                    <Link to={"/"} className="btn btn-info" style={{ borderRadius: "50%", marginLeft: "5px", marginTop: "5px" }}><span className="fa fa-home" ></span></Link>
                </div>
                <div className="col-12 col-md-6" style={{textAlign:"center"}}>
                <div style={{textAlign:"center" , lineHeight:"30px", marginTop:"40px", marginBottom:"40px"}}>
                        <div className="form-group">
                            <input type="text" style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}}  placeholder="Name" value={name} onChange={(event) => { setName(event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <textarea style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}} placeholder="Company" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <input type="Date"  style={{width:"75%", borderRadius:"20px", paddingLeft:"10px", marginBottom:"10px"}} placeholder="expiry_date" value={date} onChange={(event) => { setDate(event.target.value) }} />
                        </div>
                        <div className="form-group" style={{textAlign:"center"}}>
                            <button className="btn btn-primary" style={{width:"75%"}} onClick={addMedicine}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default checkAuth(AddMedicine);
