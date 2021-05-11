import { Component } from "react";
import axios from 'axios';
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';


class Cart extends Component {
    // cakes = [];
    constructor(props) {
        super(props);
        this.state={
            cakes:[]
        }
      }
      componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.cakes = Response.data.data
            console.log(this.cakes[0].name);
            this.setState({
                cakes: Response.data.data
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

      };

    render() {
        console.log(this.state.cakes);
          return (
            
              <div>
                  <Link to="/address"><button type="button" class="btn btn-primary " style={{marginTop:"4em" ,width:"80%"}}>Place Order</button></Link>
                  <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{ top: "2em", right: "8em" }}>
        <table class="table">                        
         <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>  
      <th scope="col">Action</th>
    </tr>
  </thead> 
                      </table>
                      
            </div>            
                <div  className="row">
                {
                                this.state.cakes.map((each, index) => {
                                    console.log(each,index)
                                    return <CartCake key={index} cakedata={each} />
                                    
                                })
                            }
                </div>
                
                
            </div>
        )
    }   

}
export default Cart;