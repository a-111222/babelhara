import React, { useState, useEffect } from "react";
import "./StyleComponent.css";
import axios from "axios";
import background from "../img/d.jpg";
import Scrolltotop from './Scrolltotop';
import './Scrolltotop.css';

const Checken = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/data/data.json").then((res) => {
      setImages(res.data.ccheken);
    });
  }, []);
  const ccheken = images.map((imageItem) => {
    return (
        <div  key={imageItem.id}>
        <p className="table-title">{imageItem.title}</p>
        <table className="scoundtable">
            <tr>
              <td className="thtable">{imageItem.desc}
              <p className="prag"> {imageItem.span}</p>
              </td>
              <td className="thtable">{imageItem.price}</td>

            </tr>
        </table>
        <h3 className="qoute"> {imageItem.qoute} </h3>

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
        <h1> ركن دجاج الشواية </h1>
      </div>

      <table className="manaeshTable">
          <tr>
            <th>الصنف</th>
            <th>السعر </th>
          </tr>
          
      </table>
      {ccheken}
      <a href="tel:16483">
      <div className="Order">  <i className="fas fa-phone-alt"></i> </div>
      </a>      <Scrolltotop/>
    </div>
  );
};

export default Checken;
