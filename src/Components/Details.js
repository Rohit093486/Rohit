import { Component } from "react";
import {cakeDetail} from './CakeDetails'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import queryString from "query-string";
import Cart from "./Cart";


class Details extends Component {

    
    constructor(props) {
        super(props)
        this.state = {}
    }

   

    registers = () => {
     
        //   const history = new useHistory();
        var cartCake = {
            cakeid: this.props.cakedata.cakeid,
            name: this.props.cakedata.name,
            image: this.props.cakedata.image,
            weight: this.props.cakedata.weight,
            price: this.props.cakedata.price,
        };
        console.log(cartCake);    
        
        axios.post("https://apifromashu.herokuapp.com/api/addcaketocart",cartCake,{
            headers: { "authtoken":localStorage.getItem("token")}
        }).then((res) => {
            console.log("helloresss", res);
            
           if( res.data !== "Session Expired"){
               toast("Added to cart");
              
            }
           else {
               toast("Please Login Your ID");
            }
            
            
        }, ((err) => {
            console.log("hello",err);
          }))
  
    }

    
    

    render() {
        console.log("state,", this.props)
        return (
            <div>
            <div class="card mb-3" style={{ maxWidth: "80vw" ,marginLeft:"13em" ,border:"none" ,}}>
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div  class="card detail-card border-0" style={{marginTop:"5em"}}>
              <div class="row no-gutters">
                <div class="col-md-4" >
                <img src={this.props.cakedata.image} style={{height:"100%" ,width:'23vw'}}class="card-img-top cakeImg " alt="..."></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body" style={{color:"burlywood" ,fontSize:"1em" ,marginRight:"15em"}}>
                      <h3 class="card-title">{this.props.cakedata.name}</h3>                
                            <p class="card-text">Ratings : {this.props.cakedata.ratings}</p>  
                            <p class="card-text">Price : {this.props.cakedata.price}</p>  
                            <p class="card-text">Description : {this.props.cakedata.description}</p>
                            <p class="card-text">Weight : {this.props.cakedata.weight} kg</p>  
                            <p class="card-text">Flavour : {this.props.cakedata.flavour}</p>  
                            <p class="card-text">Type : {this.props.cakedata.type}</p>                  
                            <p class="card-text">Like : {this.props.cakedata.likes}😍</p>   
                            <button  onClick={(e) => {
                  e.preventDefault()
                //    console.log("hiiiiii")
                  this.registers();
                 
                }} type="button" class="btn btn-success">Add To Cart  🛒<i class="fas fa-cart-plus"></i></button>
                 
                  </div>
            
                </div>
                    </div>
                    </div>
                </Link>                
                </div>                
                </div>
        )
    }
}
export default Details;