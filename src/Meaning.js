import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css"


export default function Meaning(props){
    function exampleChecker(){
        if(props.meaning.example){
            return (
                <div className="example">
                "{props.meaning.example}"
            </div>
            );
        } else return null
    }
    function synonymChecker(){
        
        if(props.meaning.synonyms){
            return (
                <div className="syns">
                    {props.meaning.synonyms.map(function (synonym, index){
                    
                    return (
                        <span key={index}>
                        
                        <Synonym synonym={synonym} index={index}/>
                        </span>

                    );
                })}
                </div>
            );
        } else return null
    }
    if(props.index < 5){
    return(
        <div>
            <div className="part-of-speech">
                {props.meaning.partOfSpeech}
            </div>
            <div className="definition">
                {props.meaning.definition}.
            </div>
            {exampleChecker()}
            {synonymChecker()}
        </div>
    );}
}