import React, { useState } from "react";



function App() {
    var [isLoading, setLoading] = useState(false);

    var spiner = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },3500);
    }
    return (
        <div className="App">
            <header className="App-header"><br />
                {isLoading ? "" :
                    (<button className="button" onClick={spiner}>Login</button>)}
                {isLoading ? <div><h4>Please Wait!!!!!!</h4>
                    <img src="loader.gif" /></div> : ''
                }

            </header>
        </div>
    );
}
export default App;