import React , {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchEngine from "./SearchEngine";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [data, setData] = useState({});

    function handleResponse(response){
        // console.log(response.data);
        setData({
            word: response.data.word,
            phonetic: response.data.phonetic
        })

    }

    function handleSubmit(event){
        event.preventDefault();
        let apiKey = "4bc76te01aac743d12o764377f46072e";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);


    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    return(
        <div className="Dictionary">
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." autoFocus={true} onChange={handleKeywordChange} className="w-100 submit-form"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>

            </form>
            <SearchEngine data={data}/>
            </div>
            
        </div>
    );
}