import { Component } from "react";
import { Link } from "react-router-dom";



class Navbar extends Component{    
    constructor() {
        super()
        this.state = {
          searchtext:undefined
        }
  }
  searchtext
  getsearchText = (event) => {
    this.searchtext = event.target.value
    this.setState({
      searchtext:this.searchtext
  })
  }
  
    render() {
      return (
      <div >
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"#F7F2F2" ,zIndex:50}}>
  <Link to="/"><a class="navbar-brand" href="#">Cake</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" onChange={this.getsearchText} type="search" placeholder="Search" aria-label="Search"></input>
      <Link to={`/search?q=${this.searchtext}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
      <Link to="/dash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi-person-lines-fill" viewBox="0 0 16 16" style={{marginLeft:"1em" ,color:"brown"}}>
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg></Link>
      </form>
                  
      </li>
    </ul>
      <Link to="/login"><button type="button" class="btn btn-outline-info">Login</button></Link>
   
       
    
  </div>
</nav> 
      </div>
              
        )
    }
}

export default Navbar;