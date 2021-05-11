import { Component } from "react";
import {cakeDetail} from './CakeDetails'
import { useHistory } from "react-router-dom";
import {axios} from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";


class Cake extends Component {    
    constructor(props) {
        super(props)
        this.state = {}       
    }

    render() {
        console.log("state,",this.props)

        return (
            <div style={{border:"#DCE5EC 2px solid",backgroundColor:"ThreeDShadow"}}>   
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div class="card" style={{width: "15rem" , margin:"1rem"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top rounded-lg" alt="..."></img>
        <div class="card-body" style={{color:"chocolate"}}>
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>  
                <p class="card-text">{this.props.cakedata.description}</p>                
                <p class="card-text">{this.props.cakedata.likes}</p>
        </div>
    </div>  
            </Link>
      
            </div>
        )
    }
}

export default Cake;