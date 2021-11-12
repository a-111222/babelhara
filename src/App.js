import React,{useState,useEffect} from "react";
import './App.css';
import './Component/StyleComponent.css';
import Nav from './Component/Nav';
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading,setLoading] = useState(false);//default is false 
  useEffect(()=>{//this effect will make from him true
  setLoading(true)
    setTimeout(()=>{
      setLoading(false)
  },5000)//i make it false to stop this loading after 8000s 
  },[])

  return (

  <div className="App">
    {
      loading ?

      <GridLoader

        color={"#FC9D00"}
        loading={loading}
        size={30}
        margin={3} />
      :
<div className="contet-app">
<Nav/>
      <div className="animation">
  
  <ul>
     <li> <i className="fas fa-cheese"> </i> </li>
     <li> <i className="fas fa-hotdog"></i> </li>
     <li><i className="fas fa-drumstick-bite"></i></li>
     <li><i className="fas fa-pepper-hot"></i> </li>
     <li><i className="fas fa-stroopwafel"></i> </li>
     <li><i className="fas fa-bread-slice"></i> </li>
     <li> <i className="fas fa-pizza-slice"></i></li>
     <li><i className="fas fa-utensils"></i> </li>
  
  </ul>
  </div>
</div>
    }
  </div>
  );
}
export default App;

