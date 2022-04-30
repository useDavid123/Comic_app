import "./user.css";
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from "@material-ui/icons";
import {Link} from "react-router-dom";
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
               <h2 className="userTitle"> Edit User</h2>
               <Link to="/newUser">
               <button className="userAddButton">Create User</button>
               </Link>
            </div>
            <div className="userContainer">
             <div className="userShow">
               <div className="userShowTop">
               <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" className="userShowImg" alt=""/>
               <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Augest</span>
                 <span className="userShowUserTitle">Software Engineer</span>
               </div>
               </div>
               <div className="userShowButton">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                 <PermIdentity className="userShowIcon"/>
                 <span className="userShowInfoTitle">anna777</span>
                 </div>
                 <div className="userShowInfo">
                 <CalendarToday className="userShowIcon"/>
                 <span className="userShowInfoTitle">10.12.1999</span>
                 </div>
                 <span className="userShowTitle">Contact Details</span>
                 <div className="userShowInfo">
                 <PhoneAndroid className="userShowIcon"/>
                 <span className="userShowInfoTitle">08153454137</span>
                 </div>
                 <div className="userShowInfo">
                 <MailOutline className="userShowIcon"/>
                 <span className="userShowInfoTitle">anna777@gmail.com</span>
                 </div>
                 <div className="userShowInfo">
                 <LocationSearching className="userShowIcon"/>
                 <span className="userShowInfoTitle">Victoria | Nigeria</span>
                 </div>
                
               </div>
             </div>
             <div className="userUpdate"> 
             <span className="userUpdateTitle">Edit</span>
             <form className="userUpdateForm">
               <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                   <lable>Username</lable>
                   <input type="text" placeholder="anna777" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                   <lable>Fullname</lable>
                   <input type="text" placeholder="Anna Augest" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                   <lable>Email</lable>
                   <input type="text" placeholder="anna777@gmail.com" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                   <lable>Phone</lable>
                   <input type="text" placeholder="08153454137" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                   <lable>Address</lable>
                   <input type="text" placeholder="Victoria | Nigeri" className="userUpdateInput"/>
                  </div>
               </div>
               <div className="userUpateRight">
                 <div className="userUpdateUpload">
                 <img className="userUploadImg" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" alt="" />
                 <label for="file">
                      <Publish/>
                     </label>
                     <input type="file" id="file" style={{display: "none"}}/>
                 </div>
                 <button className="userUpdateButton">Update</button>
               </div>
             </form>
             </div>
            
            </div>
        </div>
    )
}
