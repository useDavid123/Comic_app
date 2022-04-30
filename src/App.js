import React, { useEffect, useContext , useState } from "react"
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Home from "./pages/home/Home"
import Category from "./pages/Category/Category"
import NewCategory from "./pages/newCategory/NewCategory"
import CategoryList from "./pages/categoryList/CategoryList"
import FullProducts from "./pages/fullProducts/fullProducts";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom"
import Login from "./component/Login/Login"
import Register from "./component/Login/Register"
import { AuthContext } from "./context/AuthContext/AuthContext";
// import {LogOut} from "./context/AuthContext/AuthContext"
import {useLocation} from  "react-router-dom";
import axios from "./axios";
import Cart from "./pages/Cart/Cart";
import Nav from "./pages/main/Nav"
import SidebarIndex from "./pages/main/SidebarIndex";
import Main from "./pages/main/Main";
import "./output.css"
import { Redirect } from "react-router-dom";








function App() {
  const history = useHistory()
  const { user, isFetching, LogOut , admin , setAdmin } = useContext(AuthContext)
  // const pathname = useLocation();


  



  // useEffect(() => {
  //   if (!user && !isFetching) {
   
  //     history.push("/login")
  //   }
  // }, [user, isFetching, history , LogOut])





  // if(!user){
  //   history.push("/")
  //   return <Login/>
  // }
  const Layout = ({ children }) => {
    return (
      <>
        <Topbar />
        {/* <Nav /> */}
        <div className="container">
          <Sidebar />
          {children}
        </div>
      </>
    )

    


  }

  

  const Index = ({ children }) => {
    return (
      <>
        <Nav  />
        {/* <Nav /> */}
        <div className="section-body">
         
          {children}
        </div>
      </>
    )
  }
  useEffect(()=>{

    const Verify  = async()=>{
        
      try{
         const res = await axios.get(`auth/admin` ,  {
            headers:{
             Authorization: `Bearer ${user.access_token}`
            },
         });
         
        //  history.push('/categories')
        setAdmin(true)

         }
         catch(error){
             console.log(error)
            //  history.push('/')
         //   dispatch({type:"CreateProductFailure"})
         }
      }
      Verify();
  },[history , user?.access_token , setAdmin])

  return (



    <>

      <Switch>
        {/* <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route> */}
        {/* <Route path="/users">
          <Layout>
            <UserList />
          </Layout>
        </Route>
        <Route path="/user/:userId">
          <Layout>
            <User />
          </Layout>
        </Route>
        <Route path="/newUser">
          <Layout>
            <NewUser />
          </Layout>
        </Route> */}

        
<Route exact path="/">
          <Index>
          <SidebarIndex  />
          </Index>
        </Route>

         <Route path="/cart">
          <Index>
            <Cart />
          </Index>
        </Route>

        <Route path="/login">
          <Index>
             <Login />
          </Index>
         
        </Route>
        <Route path="/register">
          <Index>
          <Register />
          </Index>
         
        </Route>





      {
        admin && (

           <>
          <Route path="/products">
          <Layout>
            <FullProducts />
          </Layout>
        </Route>
        <Route path="/C/:id/:name">
          <Layout>
            <ProductList />
          </Layout>
        </Route>
        <Route path="/product/:id1">
          <Layout>
            <Product />
          </Layout>
        </Route>
        <Route path="/newProduct">
          <Layout>
            <NewProduct />
          </Layout>
        </Route>
        <Route  path="/categories">
          <Layout>
             <CategoryList />
          </Layout>
        </Route>
        <Route path="/newCategory">
          <Layout>
            <NewCategory />
          </Layout>
        </Route>
        <Route path="/contacts">
          <Layout>
            <Contact />
          </Layout>
        </Route>

        <Route path="/category/:id1">
          <Layout>
            <Category />
          </Layout>
        </Route>
        </>


        )
      }
    
    <Route render={()=><Redirect to ={{pathname:'/'}} />}/>
       
      </Switch>

     
    </>

  );
}

export default App;
