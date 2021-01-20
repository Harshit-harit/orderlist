import React from "react"
import './navBar.css'
import OrderList from './OrderList'
import CreateOrder from './CreateOrder'
import ViewOrder from './ViewOrder'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 

class SideBar extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    render(){
        return (
            <div className="sidebar">
            <Router>
                <ul>
                    <li><Link to="/">OrderList</Link> </li>
                    <li><Link to="/CreateOrder">CreateOrder</Link> </li>
                    {/* <li><Link to="/ViewOrder/:id">ViewOrder</Link></li> */}
                </ul>
                <div className="items">
                <Switch> 
                    <Route exact path='/' component={OrderList}></Route> 
                    <Route exact path='/CreateOrder' component={CreateOrder}></Route> 
                    <Route exact path='/ViewOrder/:id' component={ViewOrder}></Route> 
                </Switch> 
                </div>
            </Router>
             
            </div>
        )
    }
}

export default SideBar  