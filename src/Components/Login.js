import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class Login extends Component {
    constructor(props) {
        super(props)
        this.getemail = this.getemail.bind(this);
        this.getpassword = this.getpassword.bind(this);
        this.Click = this.Click.bind(this);
        this.state = {
            userDetail:{},
            nameErr:"",
            passErr:""
        }
    }
    vaild=()=>{
        if(!this.state.userDetail.email.includes("@") && this.state.userDetail.password.length<4){
            this.setState({
                nameErr:"Invaild Email",
                passErr:"password length must be 4 Character"
            })
        }
        else if (!this.state.userDetail.email.includes("@")) {
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        else if ( this.state.userDetail.password.length<4) {
            this.setState({
                passErr:"password length must be 4 Character"
            })
        }
        else {
            return true;
        }
    }

    userDetail = {}
    getemail = (event) => {
        console.log(event.target.value);
        this.userDetail.email = event.target.value;
        this.setState({
            userDetail:this.userDetail
        })
    }
    getpassword = (event) => {
        console.log(event.target.value);
        this.userDetail.password = event.target.value;
        this.setState({
            userDetail:this.userDetail
        })
    }    
    Click = (event) => {
        this.setState({
            nameErr:"",
            passErr:""
        })
        event.preventDefault()
        console.log("hello", this.userDetail);
        
        if (this.vaild()) {
            console.log(this.state.userDetail);
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/login",
                data:this.state.userDetail        
            }).then((res)=>{
                if(res.data){
                    toast("Welcome to our Cake Shop");
                    this.props.history.push('/')
                    console.log("response",res);
                }
            },(err)=>{
                console.log("error",err);
                toast("Oh! Sorry You enter Wrong details");
            })         
        }
        else{
            toast("please Check Your details");
        }
    }    
      componentDidMount(){
          this.userDetail = JSON.parse(localStorage.getItem('user'));
          if (localStorage.getItem('user')) {
              this.setState({
                  nameErr: this.userDetail.name,
                  passErr: this.userDetail.email                 
               })
          } else {
              this.setState({
                  nameErr: '',
                  passErr:''
              })
            }
      }
    componentWillUpdate(nextprops,nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }     
    render() {
        return (
            <div>
                <form style={{ padding: "6.5em 20em", backgroundColor: "#E3D9DB " ,marginTop:"4em"}}>
                    <h3 style={{ color: "red" }}>Login</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1">EMAIL ADDRESS</label>
                        <input type="email" name="email" class="form-control" value={this.state.nameErr} id="exampleInputEmail1" onChange={this.getemail} aria-describedby="emailHelp" required></input>
                        <p>{this.state.nameErr}</p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">PASSWORD</label> <Link to="./forget"><p style={{ marginLeft: "17em", marginTop: "-1em" }}>Forgotten Password?</p> </Link>                        
                        <input type="password" name="pswd" class="form-control" value={this.state.passErr} style={{ marginTop: "-1em" }} onChange={this.getpassword} id="exampleInputPassword1" required></input>
                        <p>{this.state.passErr}</p>
                    </div>                    
                    <Link to='/'><button type="submit" class="btn btn-primary" onClick={this.Click}>Login</button></Link>
                    <Link to="/registration"><button type="submit" class="btn btn-primary" style={{ marginLeft: "2em" }}>Registration</button></Link>                    
                </form>        
            </div>            
        )
    }
}
export default Login;