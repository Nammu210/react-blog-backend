import React, { useContext, useState, useEffect, createContext } from "react";
import "../../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import { AppData } from "../../Utility";
import axios from "axios";
import { AllData, localhostallData } from "../../constants/ApiList";


function Banner(props) {
  const [data, setData] = useState([]);

  const navi = useNavigate();

  useEffect(() => {
    
    const API =AllData
    axios
      .get(API, data)
      .then((res) => {setData(res.data[0])
      
  })
      .catch((err) => console.log(err));
  }, []);

  
  const Filter1 = data.filter((item) => item.sp === "home-ban");
  const Filter2 = data.filter(
    (item) => item.sp === "home-banner" && item.id === 2
  );

  const handleImage = (d) => {
    if (localStorage.getItem("token")) {
      navi(`/${d.cat}/${d.id}`, { state: d });
    } else {
      navi("/signup");
    }
  };

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <div className="imageContainer">
          {Filter2.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="firstImage hov"
              src={d.img}
            />
          ))}
          {Filter1.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="secondImage hov"
              src={d.img}
            />
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Banner;
