import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import firstPeriod from "../pictures/period1.png"
import SecondtPeriod from "../pictures/period2.jpg"
import ThirdPeriod from "../pictures/period3.jpg"
import jerusalem from "../pictures/jerusalem.jpg"
import shabbos from "../pictures/shabbos.jpg"
import { log } from "console";
import srv, { IdriverDriveAdvertisment } from "./sev";

export default function Subject() {

  const [activeDriverAdvertisment, setActiveDriverAdvertisment] = useState<IdriverDriveAdvertisment[]>([]);
  const [allDetails, setAllDetails] = useState<any>({});

  const location = useLocation();
  const navigate = useNavigate();
  const songs: any[] = [];
  const songs2: any[] = [];


  const { period } = location.state;
  var allSongs = require('./jsonFile.json');
  var perod1 = require('./perod1.json');

  useEffect(() => {
    // if (allSongs) {
    //   console.log(allSongs[period][0]['שבת']);
     
    srv.GetById().then(res => {setAllDetails(res.data) })
    
// if(allDetails)
Object.keys(allDetails).forEach((prop)=> console.log({prop}));

    // }
  }, []);


  const chosenPeriod = async (e: any) => {
    //     var subject=e.currentTarget.id;
    //     // var result = Object.entries(allSongs);
    //     if(allSongs[period][0]['שבת']){
    //     const arr=allSongs[period][0]['שבת']

    //     debugger
    //     alert(arr[0])
    // arr.map((e: any) => {
    //   console.log({e});

    //   songs.push(e)
    // })
    // console.log({songs})
    // // songs.map((e: any) => {
    // //   songs2.push(e)
    // // })
    // // console.log({songs2})
    // setAllCities(songs)
    // }
  await perod1['שבת'].map((e: any) => {
      songs.push(e['song'])
    }
    
    )  
      console.log({songs});
      navigate(".../per1ShabbosSongs", { state: { songs: songs } });

  }

  return (
    <div >

      <h1> {period}</h1>
      <span>
        <h1>בחרי תקופה</h1>
        <Button id="shabbos" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
          <img src={shabbos} width="100" />
          <label>שבת</label>
        </Button>
        <Button id="SecondtPeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
          <img src={SecondtPeriod} width="100" />
          <label> 'אמונה ודבקות בד</label>
        </Button>        <Button id="ThirdPeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
          <img src={jerusalem} width="100" />
          <label> געגועים לארץ ישראל ולמקדש</label>
        </Button>        <Button id="FoursePeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
          <img src={ThirdPeriod} width="100" />
          <label> חידות ומשלים</label>
        </Button>
        <Button id="FoursePeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
          <img src={firstPeriod} width="100" />
          <label> עצות לחיים</label>
        </Button></span>
        {allDetails&&<img src={allDetails['Img']}></img>}
      
      {/* 👇️ iterate object KEYS */}
      {Object.keys(allDetails).map((key, index) => {
        return (
          <div key={index}>
            <h2>
              {key}: {allDetails[key]}
            </h2>

            <hr />
          </div>
        );
      })}

      <br />
      <br />
      <br />

      {/* 👇️ iterate object VALUES */}
      {Object.values(allDetails).map((value, index) => {
        return (
          <div key={index}>

            <hr />
          </div>
        );
      })}
    </div>

  


  )
}