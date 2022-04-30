import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
           <h1 className="newUserTitle">New User</h1>
           <form className="newUserForm" >
             <div className="newUserItem">
               <label>UserName</label>
               <input type="text" placeholder="john"/>
             </div>
             <div className="newUserItem">
               <label> Full Name</label>
               <input type="text" placeholder="john Smith"/>
             </div>
             <div className="newUserItem">
               <label>Email</label>
               <input type="email" placeholder="john77@gmail.com"/>
             </div>
             <div className="newUserItem">
               <label>Password</label>
               <input type="password" placeholder="password"/>
             </div>
             <div className="newUserItem">
               <label>Phone</label>
               <input type="text" placeholder="081434537"/>
             </div>
             <div className="newUserItem">
               <label>Address</label>
               <input type="text" placeholder="V/I | Nigeria"/>
             </div>
             <div className="newUserItem">
               <label className="gender">Gender</label>
               <div className="newUserGender">
               <label for="male">Male</label>
                <input type="radio" name="male" value="male" id="male"/>
               <label for="female">Female</label>
                <input type="radio" name="female" value="female" id="female"/>
                </div>
             </div>
             <button className="newUserButton">Create</button>
           </form>
        </div>
    )
}
