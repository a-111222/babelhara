import React, { useState, useEffect } from "react";
import "./StyleComponent.css";
import axios from "axios";
import background from "../img/b.jpg";
import Scrolltotop from './Scrolltotop';
import './Scrolltotop.css';
const Salat = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/data/data.json").then((res) => {
      setImages(res.data.ssalat);
    });
  }, []);
  const ssalat = images.map((imageItem) => {
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
        <h1>  السلطات و الاضافات  </h1>
      </div>

      <table className="manaeshTable">
          <tr>
            <th>الصنف</th>
            <th> السعر </th>
          </tr>
          
      </table>
      {ssalat}
      <a href="tel:16483">
      <div className="Order">  <i className="fas fa-phone-alt"></i> </div>
      </a>      <Scrolltotop/>
    </div>
  );
};

export default Salat;
