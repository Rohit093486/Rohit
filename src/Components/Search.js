import { useState, useEffect } from "react";
import Cake from "./Cake";
import { toast } from "react-toastify";
import queryString from "query-string";
import axios from "axios";

function Search(props) {  
  var [cakeresult, setCakes] = useState([]);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+ query.q;
    axios({
      method:"get",
      url: apiurl,
    }).then(
      (response) => {
        // toast("Your Cakes");            
        console.log(response.data);
        setCakes(response.data.data);
      },
      (error) => {
        console.log(error);
      }
      
    );
  }, [query.q]);

  return (
    <div>    
    <div className="row"  style={{marginTop:"4em"}}>
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
        {cakeresult.length<=0 && <div>
                <div class="card" style={{marginLeft:"16em",marginTop:"10em"}}>
                    <div class="card-header">
                        <b>Oop!</b> 
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                <p>Sorry, no results found!</p>               
              </blockquote>
              <h4>Please check the spelling or try searching for something else</h4>
            </div>            
                    </div>
                </div>}
      
      </div>
    </div>
  );
}

export default Search;