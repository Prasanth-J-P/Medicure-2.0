import axios from "axios";
import { Link } from "react-router-dom";
import images from "./images/medicine.jpeg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function PostListItems(props) {
    const [showModal, setShowModal] = useState(false);
    const navigate=useNavigate();
    var user = useSelector(store=>store.auth.user);
    function DeletePost() {
        if(!user){
            navigate("/login");
            return;
        }
        else{
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/' + props.post.id,{
            headers:{'Authorization':"Bearer "+ user.token}}).then(response => {
            props.refresh();
            navigate("/list");
            setShowModal(false)
        }).catch( error=>{
            alert(error)
        }

        )
       
    } 
}

    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ marginBottom: "30px" }}>
            <div style={{ overflowX: "hidden", whiteSpace: "nowrap", marginBottom: "10px" }}><b >{props.post.name}</b><br /></div>
            <img src={images} alt="Medicine" style={{ width: "100%", objectFit: "contain", borderRadius: "20px", borderBlockColor: "black" }} className="img-thumbnail"></img>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <Link to={"/listmed/" + props.post.id + "/viewmed"} className="btn btn-info" style={{ borderRadius: "50%" }}><span className="fa fa-eye"></span></Link>
                <Link to={"/listmed/" + props.post.id + "/editmed"} className="btn btn-warning" style={{ borderRadius: "50%", marginLeft: "10px", marginRight: "10px" }}><span className="fa fa-edit"></span></Link>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#myModal${props.post.id}`} onClick={() => setShowModal(true)} style={{borderRadius:"50%"}}><span className="fa fa-trash-o" ></span></button>
                </div>
                        
                    
                {showModal && (
                <div className="modal" id={`myModal${props.post.id}`} tabIndex="-1" role="dialog" style={{ display: "block" ,color:"white", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    <div className="modal-dialog" role="document" style={{marginTop:"35vh"}}>
                        <div className="modal-content" style={{background:"black"}}>
                            <div className="modal-header" style={{borderBottom:"0"}}>
                                <h4 className="modal-title" >Confirm Delete</h4>
                                <button type="button" className="btn-info" style={{ borderRadius:"50%"}}  data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}><span className="fa fa-close" style={{color:"black"}}></span></button>
                            </div>
                            <div className="modal-body" style={{borderBottom:"0"}}>
                                Do you really want to delete {props.post.name}?
                            </div>
                            <div className="modal-footer" style={{borderTop:"0"}}>
                                <button type="button" className="btn btn-danger" onClick={DeletePost} style={{ borderRadius: "50%", float: "right" }}>
                                    <span className="fa fa-trash-o"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        )
}
export default PostListItems;