import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menuestyle.css";
import Scrolltotop from "./Scrolltotop";
import "./Scrolltotop.css";
import './Menue.css';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';
import GridLoader from "react-spinners/GridLoader";

const Menue = () => { 
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('./data/data.json').then((res) => {
      setImages(res.data.mmenue);
    });
  },[]);

  const [loading,setLoading] = useState(false);//default is false 
  useEffect(()=>{//this effect will make from him true
  setLoading(true)
    setTimeout(()=>{
      setLoading(false)
  },2000)//i make it false to stop this loading after 8000s 
  },[])

  const menueImages = images.map((imageItem) => {
    return (
   
      <div className="parent">
      
        <div className="ImageWrapper" key={imageItem.id}>
       <HashLink to={imageItem.link} >
            <div className="Overlay"> </div>
            <img className="Image" src={imageItem.img} alt=""/>

            <h2 className="H2" >{imageItem.title}</h2>
        </HashLink>

        </div>
  
      </div>
    );
  });
  return (
    <div className="loading">
    {
      loading ?

      <GridLoader

        color={"#FC9D00"}
        loading={loading}
        size={30}
        margin={3} />
      :
    <div className="test">

      {menueImages}
      <Scrolltotop/>
      <Footer/>
          
    </div>
        }
    </div>
  );
};
export default Menue;
