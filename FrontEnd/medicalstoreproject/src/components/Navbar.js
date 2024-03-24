import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import { useSelector , useDispatch} from "react-redux";
import { removeUser } from "../store/authSlice";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout(){  //Logout function
      if(user){
          axios.post('https://medicalstore.mashupstack.com/api/logout',{},{
             headers:{'Authorization':"Bearer "+ user.token}
          });
          dispatch(removeUser());
          navigate('/login');
          alert("You are Successfully logged out....!!!");          
      }
  }
  var user = useSelector(store=>store.auth.user);

  return <nav className="navbar navbar-expand navbar-dark bg-dark customnav">
    <a className="navbar-brand" href="/list"><span className="fa fa-heartbeat"></span>MEDICURE</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          {user?<NavLink to={"/list"} className="nav-link">
            List
          </NavLink>:null}
        </li>
        {user?<li className="nav-item">
          <NavLink to={"/addmed"} className="nav-link">
            Add
          </NavLink>
        </li>:null}

        <li className="nav-item">
          <NavLink to={"/aboutus"} className="nav-link">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/contactus"} className="nav-link">
            Contact Us
          </NavLink>
        </li>      
        </ul>
        <div className="dropdown" style={{ float: "right" , borderColor:"white", color:"white" , border:"2px"}} >
          <button type="button" className="btn btn-light"  data-bs-toggle="dropdown" style={{ marginRight: "10px", float: "right", borderRadius:"50%", paddingTop:"7px" ,paddingBottom:"7px",paddingLeft:"9px",paddingRight:"9px"}}><span className="fa fa-user-circle-o" style={{ fontSize: "28px" }}></span></button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" style={{textAlign:"center", color:"white",marginTop:"10px",opacity:"75%" , lineHeight:"2"}}>
              {user?(<li><NavLink to={"/"} className={"nav-link" + (status => status.isActive ? 'active' : '') } style={{textDecoration:"none", color:"white"}} ><b>Profile</b></NavLink></li>):null}
              {!user?(<li><NavLink to={"/login"} className={"nav-link" + (status => status.isActive ? 'active' : '')} style={{textDecoration:"none", color:"white"}} ><b>Login</b></NavLink></li>):null}
              {!user?(<li><NavLink to={"/signup"} className={"nav-link" + (status => status.isActive ? 'active' : '')} style={{textDecoration:"none", color:"white"}} ><b>Signup</b></NavLink></li>):null}
              {user?(<li><NavLink onClick={logout} className={"nav-link"+ (status => status.isActive ? 'active' : '')} style={{textDecoration:"none", color:"white"}} ><b>Logout</b></NavLink></li>):null}
            </ul>
        </div>
    </div>
  </nav>
}
export default Navbar;