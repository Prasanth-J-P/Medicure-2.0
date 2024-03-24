import axios from "axios";
import { useEffect, useState } from "react";
import PostListItems from "./PostListItems";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ListMedicine() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector(store => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
      if (!user) {
          navigate('/login');
      }
  }, [user]);

  const fetchPosts = () => {
      if (user && user.token) { 
          axios.get('https://medicalstore.mashupstack.com/api/medicine', {
              headers: { 'Authorization': "Bearer " + user.token }
          }).then(response => {
              setFilteredPosts(response.data);
          }).catch(error => {
              console.log("Error fetching posts:", error);
          });
      }
  }

  const handleSearchInputChange = (event) => {
      setSearchTerm(event.target.value);
  };

  useEffect(() => {
      if (!user) navigate('/login'); 
      if (searchTerm.trim() === "") {
          fetchPosts();
      } else {
          axios.get('https://medicalstore.mashupstack.com/api/medicine/search?keyword=' + searchTerm, {
              headers: { 'Authorization': "Bearer " + user.token }
          }).then(response => {
              setFilteredPosts(response.data);
          }).catch(error => {
              console.log("Error fetching search results:", error);
          });
      }
  }, [searchTerm]);

    return (<div>
        <Navbar/>
        <div style={{textAlign:"center", marginTop:"40px"}}>
              <form action="" method="get">
                  <input type="search" id="search" name="search"  value={searchTerm} onChange={handleSearchInputChange} placeholder="Search......" style={{paddingLeft:"10px" , borderTopRightRadius:"15px", borderBottomRightRadius:"15px"}}></input>
              </form>
        </div>  
        <div className="container-flex" style={{marginLeft:"10px",marginRight:"10px", marginTop:"30px"}}>
                    <div className="row">
                        
                        {filteredPosts.length !== 0 ? (
                           filteredPosts.map((post) => (
                            <PostListItems key={post.id} post={post} refresh={fetchPosts} />
                          ))
                          ) : (
              <div/>
            )}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" >
            <Link to={"/addmed"}><div style={{ marginTop: "35px" , border:"5px solid", borderColor:"black",borderRadius:"20px", opacity:"50%", paddingBottom:"40px", paddingTop:"40px",paddingLeft:"80px"}}>
                <div style={{ overflowX: "hidden", whiteSpace: "nowrap", marginBottom: "10px" }} className="Container my-auto mx-auto">
                                <span className="fa fa-plus my-auto mx-auto" style={{fontSize:"50px", color:"black", opacity:"75%" }}></span>
                        </div>
                    </div>
            </Link></div>
                    </div>
                </div>
            </div>);
}

export default checkAuth(ListMedicine);