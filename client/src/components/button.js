import React, {useState} from "react";
import classes from './Mybutton.module.css';
import { render } from "react-dom";

const Mybutton = ()=>{
    const [backgraund, setBackground] = useState()
    
    return(
    <div>
        <button onClick={()=>set}>проверка</button>
    </div>
    )
}



const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={"shine-button"}>
            {children}
        </button>
        
    );
};

export default MyButton;


function App() {
    const [color,setColor]=useState('red');
    const [textColor,setTextColor]=useState('white');
    return (
      <div className="App">
        <button style={{background:color,color:textColor}}
         className='btn btn-primary'
          onClick={()=>{
              setColor("black");setTextColor('red')
              }
              }>Click here</button>
      </div>
    );
  }
  
  export default App;

  function App() {
    const [color, setColor] = useState("");
    const styles = {
      "text-align": "center",
      padding: "30px",
      color: color
    };
  
    return (
      <div className="middle">
        <div
          id="cspace"
          style={styles}
          onMouseEnter={() => setColor("green")}
          onMouseLeave={() => setColor("")}
        >
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  