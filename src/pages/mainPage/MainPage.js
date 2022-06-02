import {News} from "../../components/news/News";
import React,{useState} from "react";
import classes from "./mainPage.module.css";

function MainPage (){


    const [value, setValue] = useState("")


    function changeValue(e){
        setValue(<News/>)
    }

    return(
        <div>
            {value}
            <button className={classes.first} onClick={changeValue}>
                News
            </button>
        </div>
    )



}

export default MainPage;