import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import firstPeriod from "../pictures/period1.png"
import SecondtPeriod from "../pictures/period2.jpg"
import ThirdPeriod from "../pictures/period3.jpg"
import FoursePeriod from "../pictures/period4.jpg"
import { useNavigate } from "react-router-dom";

export default function per1ShabbosSongs(props: any) {
    const navigate = useNavigate();

    const [nameofPeriod, setNameofPeriod] = React.useState("");
    const chosenPeriod = async (e: any) => {
        //  await  setNameofPeriod(e.currentTarget.id)
        //  alert(nameofPeriod)

        navigate("../Subject", { state: { period: e.currentTarget.id } });
    }

    useEffect(() => {
alert("aaaaa")
        }, []);

    return (
        <div>
<h1>םןח</h1>
        </div >

    )
}








