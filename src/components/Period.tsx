import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import firstPeriod from "../pictures/period1.png"
import SecondtPeriod from "../pictures/period2.jpg"
import ThirdPeriod from "../pictures/period3.jpg"
import FoursePeriod from "../pictures/period4.jpg"
import { useNavigate } from "react-router-dom";

export default function Period(props: any) {
    const navigate = useNavigate();

    const [nameofPeriod, setNameofPeriod] = React.useState("");
    const chosenPeriod = async (e: any) => {
        //  await  setNameofPeriod(e.currentTarget.id)
        //  alert(nameofPeriod)

        navigate("../Subject", { state: { period: e.currentTarget.id } });
    }

    // useEffect(() => {
    //     console.log({ nameofPeriod });

    //     }, [nameofPeriod]);

    return (
        <div><span>
            <h1>בחרי תקופה</h1>
            <Button id="firstPeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
                <img src={firstPeriod} width="100" />
                <label>תקופה א</label>
            </Button>
            <Button id="SecondtPeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
                <img src={SecondtPeriod} width="100" />
                <label> תקופה ב</label>
            </Button>        <Button id="ThirdPeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
                <img src={ThirdPeriod} width="100" />
                <label> תקופה ג</label>
            </Button>        <Button id="FoursePeriod" onClick={(e: any) => chosenPeriod(e)} variant="text" size="small" style={{ display: "flex", flexDirection: "column" }}>
                <img src={FoursePeriod} width="100" />
                <label> תקופה ד</label>
            </Button></span>

        </div >

    )
}








