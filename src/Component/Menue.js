import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menuestyle.css";
import Scrolltotop from "./Scrolltotop";
import "./Scrolltotop.css";
import './Menue.css';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';

const Menue = () => { 
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('./data/data.json').then((res) => {
      setImages(res.data.mmenue);
    });
  },[]);

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
    <div className="test">
      {menueImages}
      <Scrolltotop/>
      <Footer/>
    </div>
  );
};
export default Menue;
