import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Cart from "./Cart"

class Cake extends Component {
    constructor() {
        super()
        this.state = {
          cakes:[]
        }
    }
    Cakeitem=[]
    cart=(event)=>{  
        // console.log(event.target);
        // console.log(this.props);
        
        if(event.target){
          axios({
              method:'get',
              url:`https://apifromashu.herokuapp.com/api/cake/${this.props.cakedata.cakeid}`
          }).then((res)=>{
            //   console.log(res.data);
              if (res.data) {
                  this.Cakeitem.push(res.data.data)
                  this.setState({
                      cakes: this.Cakeitem   
                  })
                  this.props.history.push('/cart');
              }
              
              console.log(this.state.cakes);        

              
          },(err)=>{
              console.log(err);
          })
        }
    }
     
    render() {
        return (
            <div>   
        <div class="card" style={{width: "15rem",height:"27em", margin:"1rem"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>                
          <a href="#" class="btn btn-primary" onClick={this.cart}>ADD TO CART</a>
        </div>
                </div>
                <div>
                    {this.state.cakes.map((ele) => {
                         return <Cart cakedetail={ele} />;
                    })
                    }
                </div>
            </div>
            
        )
    }
}

export default withRouter(Cake);