import React from "react";


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
        </div>
    );}
}