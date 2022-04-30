import "./widgetlg.css"

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetlg">
            <h3 className="widgetLgTitle">Last Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                       <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                        alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chukwudi Okor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1233</td>
                    <td className="widgetLgStatus"><Button type="Approval"/></td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                       <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                        alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chukwudi Okor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1233</td>
                    <td className="widgetLgStatus"><Button type="Decline"/></td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                       <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                        alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chukwudi Okor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1233</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                       <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                        alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Chukwudi Okor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1233</td>
                    <td className="widgetLgStatus"><Button type="Approval"/></td>

                </tr>
            </table>
        </div>
    )
}
