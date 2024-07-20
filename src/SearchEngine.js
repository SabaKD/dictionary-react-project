import React from "react";
import "./SearchEngine.css"
import Meaning from "./Meaning";

export default function SearchEngine(props){


    if(props.data){
    return(
        <div className="SearchEngine">
            <div className="word">
                {props.data.word}
            </div>
            <div className="phonethic">
                /{props.data.phonetic}/
            </div>
            <div className="meaning">
                {props.data.meanings.map(function (meaning, index){
                    
                    return (
                        <div key={index}>
                           
                        <Meaning meaning={meaning} index={index}/>
                        </div>

                    );
                })}
                
                
            </div>
            
        </div>
        
    );} else {return null}
}