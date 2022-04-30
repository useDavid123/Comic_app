import React , {useContext, useEffect} from 'react'
import "../../output.css"
import { Link , useHistory} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext/AuthContext"
import { useGlobalContext } from '../Cart/context'
import axios from "../../axios"
const Nav = () => {

    const { user , LogOut , admin } = useContext(AuthContext);
    const {cart } = useGlobalContext();
  const history = useHistory();

  // console.log(user.access_token)
    

      // console.log(admin)
const Verify = () => {
if(admin){
  
  history.push("/categories")
}
}


  return (
      
   

      


               


    <nav class="navbar">
            <div class="nav-right">
            <li><Link to="/">Home</Link></li>
                <li><span onClick={Verify}>Admin</span></li>
                {
                    user ? (
                        <>
                    <li><span onClick={LogOut}>Logout</span></li>
                    <li><Link to="/">{user.user.name}</Link></li>
                    </>
                    )
                    :
                    ( <li><Link to="/login">Login</Link></li>)
                }
               
                
            </div>

            <div className='far-left'>
              <Link to="/cart"  style={{cursor:"pointer"}}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{cart?.length}</p>
            </div>
            </Link>
            </div>
        </nav>
			
             
  )
}

export default Nav