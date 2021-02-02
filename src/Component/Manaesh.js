import React, { useState, useEffect } from "react";
import "./StyleComponent.css";
import background from "../img/n.jpg";
import axios from "axios";
import Scrolltotop from './Scrolltotop';
import './Scrolltotop.css';

const Manaesh = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("data/data.json").then((res) => {
      setImages(res.data.mmanaesh);
    });
  }, []);
  const manaeash = images.map((imageItem) => {
    return (
      <div  key={imageItem.id}>
        <p className="table-title">{imageItem.title}</p>
        <table className="scoundtable">
          <thead key="thead">
            <tr>
              <th className="thtable">{imageItem.desc}</th>
              <th className="thtable">{imageItem.price}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  });

  return (
    <div className="main">
      <div
        className="main-section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay-section"></div>
        <h1> ركن المناقيش </h1>
      </div>

      <table className="manaeshTable">
        <thead key="thead">
          <tr>
            <th>الصنف</th>
            <th>السعر </th>
          </tr>
        </thead>
      </table>
      {manaeash}
      <a href="tel:16483">
      <div className="Order">  <i className="fas fa-phone-alt"></i> </div>
      </a>      <Scrolltotop    
       transition={"3s"}
     />
    </div>
  );
};

export default Manaesh;
