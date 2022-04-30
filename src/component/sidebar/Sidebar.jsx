
import "./sidebar.css";
import {LineStyle, Timeline,
     TrendingUp, 
    PersonOutlineOutlined, 
    WorkOutline, 
    Report,
     MailOutline,
     DynamicFeed,
     ChatBubbleOutline,
     AttachMoney,
     AssessmentOutlined,
     StorefrontOutlined,
     ArrowBackIosOutlined

    } 
from "@material-ui/icons";
import { CategoryRounded } from "@material-ui/icons";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {AuthContext} from "../../context/AuthContext/AuthContext"

export default function Sidebar(){
  const {LogOut} = useContext(AuthContext)

    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashborad</h3>
                    <ul className="sidebarLists">
                    {/* <Link to="/" className="link">
                        <li className="sidebarListItem active">
                          <LineStyle  className="sidebarIcons"/>
                          Home
                        </li>
                        </Link> */}
                        {/* <li className="sidebarListItem" onClick={LogOut}>
                          <ArrowBackIosOutlined className="sidebarIcons" />
                         LOGOUT
                        </li> */}
                        {/* <li className="sidebarListItem">
                          <TrendingUp className="sidebarIcons" />
                          Sales
                        </li> */}

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarLists">
                    {/* <Link to="/users" className="link">
                        <li className="sidebarListItem ">
                          <PersonOutlineOutlined className="sidebarIcons"/>
                          User
                        </li>
                        </Link> */}
                          <Link to="/" className="link">
                        <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcons"/>
                          Home
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                          <StorefrontOutlined className="sidebarIcons"/>
                          Product
                        </li>
                        </Link>
                        <Link to="/categories" className="link">
                        <li className="sidebarListItem">
                          <CategoryRounded className="sidebarIcons"/>
                          Category
                        </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                          <AttachMoney className="sidebarIcons" />
                          Transactions
                        </li>
                        <li className="sidebarListItem">
                          <AssessmentOutlined className="sidebarIcons" />
                          Report
                        </li> */}

                    </ul>
                </div>
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem ">
                          <MailOutline  className="sidebarIcons"/>
                          Mail
                        </li>
                        <li className="sidebarListItem">
                          <DynamicFeed className="sidebarIcons"/>
                          FeedBack
                        </li>
                        <li className="sidebarListItem">
                          <ChatBubbleOutline className="sidebarIcons" />
                          Message
                        </li>

                    </ul>
                </div> */}
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem ">
                          <WorkOutline  className="sidebarIcons"/>
                          Manage
                        </li>
                        <li className="sidebarListItem">
                          <Timeline className="sidebarIcons"/>
                          Analytics
                        </li>
                        <li className="sidebarListItem">
                          <Report className="sidebarIcons" />
                          Report
                        </li>

                    </ul>
                </div> */}
            </div>
        </div>
    )
}