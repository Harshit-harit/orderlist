import React from 'react'
import axios from "axios"

class ViewOrder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            price: ''
        }
    }
orderId = this.props.location.state.orderId
componentDidMount() {
    axios.get(`http://localhost:3000/orders/${this.orderId}`).then(response => {
        this.setState({
            price: response.data.Price
        })
    })
}
    render() {
        return (
            <>

            <h1>View Order</h1>
            <p style={{color:"black"}}>{this.state.price}</p>
            
                </>
            
        )
    }
}

export default ViewOrder 