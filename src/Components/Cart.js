import {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

class Cart extends Component{
    constructor(){
        super()
        this.state={
                
         }
    }
    componentDidMount() {
        // console.log(this.props);
        console.log(this.props.cakedetail);
  }
   

    render(){
        return(
            <div >        
<div class="card mb-3" style={{maxWidth:"540px" ,marginTop:"5em"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={this.props.image} alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <h5 class="card-title">g</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        )
    }

}
export default Cart;