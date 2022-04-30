import React from 'react'
import FeaturedInfo from '../../component/featuredInfor/FeaturedInfo';
import Chart from "../../component/chart/Chart"
import WidgetSm from "../../component/widgetsm/WidgetSm"
import  WidgetLg from "../../component/widgetlg/WidgetLg"
import "./home.css";
import {userData} from "../../dummyData";

export default function Home() {
    return (
        <div className="home">
           <FeaturedInfo/>
           <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
           <div className="homeWidget">
               <WidgetSm/>
               <WidgetLg/>
           </div>
        </div>
    )
}
