
import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Admin Portal</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                      <NotificationsNone/>
                      <span className="topIconBadges">2</span>
                    </div>
                    <div className="topbarIconContainer">
                      <Language/>
                      <span className="topIconBadges">2</span>
                    </div>
                    <div className="topbarIconContainer">
                      <Settings/>
                    </div>
                    <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                     alt="" className="topAvatar" />
                </div>

            </div>
        </div>
    )
}
