import React , {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchEngine from "./SearchEngine";
import Images from "./Images";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    let [data, setData] = useState({loaded: false});
    let [imageData, setImageData] = useState({});

    function handlePicResponse(response){
        console.log(response.data);
        setImageData({
            pictures: response.data.photos
        })
    }

    function handleResponse(response){
        
        setData({
            loaded :true,
            result: response.data
            
            
        })
        

    }

    function handleSubmit(event){
        event.preventDefault();
        let apiKey = "4bc76te01aac743d12o764377f46072e";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        axios.get(imgApiUrl).then(handlePicResponse);


    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    if(data.loaded){
        return(
        <div className="Dictionary">
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a keyword.." autoFocus={true} onChange={handleKeywordChange} className="w-100 submit-form"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>

            </form>
            <SearchEngine data={data.result}/>
            </div>
            <div className="container pictures">
                <Images image={imageData.pictures} keyword={keyword}/>
            </div>
            
        </div>
    );
    } else {
        return(
        <div className="Dictionary">
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a keyword.." autoFocus={true} onChange={handleKeywordChange} className="w-100 submit-form"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>

            </form>
            
            </div>
            
        </div>
    );

    }

    
}