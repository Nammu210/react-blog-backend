import React, {useState, useEffect } from 'react'
import { Header, DateExt } from '../../Components'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AllData } from '../../constants/ApiList';

function ArticleList(props) {
  const [data,setData]=useState([])



useEffect(()=>{

  const API = AllData
axios.get(API,data)
.then(res=>setData(res.data[0]))
.catch(err=>console.log(err))
})


    const navi = useNavigate(); 
 
    const handleImage=(d)=>{
      if( localStorage.getItem("token")){
        navi(`/Bollywood/${d.id}`, {state: d})
      } else{
        navi("/signup")
      }
    }



  return (
    <div className='ArticleList'>
      <div className='ArticleListHead'>
     <Header headerText={"Bollywood"} />
     </div>

    
<div className='ArticleListSpace'>
{
        data.filter((item)=>item.cat==="Bollywood" && item.for==="ArticleList"
        ).map((d, index)=>(
          <div key={d.id}>
     <div className="LatestArtBlock" >
          <div >
            <img
             onClick={( )=> handleImage(d)}
              src={d.img}
              alt="No Network"
              className="latestArtImg2 hov"
            />
          </div>
          <div>
            <h2   onClick={( )=> handleImage(d)}>{d.title}</h2>
            <p className="LatestArtDetail">
            {d.Overview}
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">{d.cat}</span>
              <DateExt dateExt={`  / ${d.date} `} />
            </p>
          </div>
        </div>
        {index !== 6 && (
         <div className="spacer">
         <hr className="commonHr" />
       </div>
        )}
       </div>
  ))
}
       


        </div>
    </div>
  )
}

export default ArticleList
