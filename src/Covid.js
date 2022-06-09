import React, {useState} from 'react';
import axios from 'axios';
import "./Covid.css";

function Covid() {

    const [coun, setCoun] = useState("");

    const[result, setResult] = useState([]);

    const getData = () => {
        axios({
            method: 'GET',
            url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
            params: {country: `${coun}`},
            headers: {
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
                'X-RapidAPI-Key': '54ed2facfbmsh4d9339bd45a1c8bp11fac9jsn5e04827025d7'
            }    
        })

        .then((response) => {
            //console.log(response.data.data);
            setResult(response.data.data);
        })
        
        .catch((error) => {
            console.error(error);
        });
    };
    
  return (
    <>
        <div className='header'>
            <h1>Covid-19 Live Tracker</h1>
        </div>
        <div className='search_coun'>
            <input onChange={(e) => setCoun(e.target.value)} value={coun} type='text' placeholder='Enter the Country Name' />
            <button type="submit" onClick={()=> {getData();}}>Submit</button>
        </div>
        <div className='covid_data'>
            <ul>
                <div className="card">
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h2>COUNTRY</h2>
                            <p>{result.location}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h2>TOTAL CASES</h2>
                            <p>{result.confirmed}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h2>TOTAL DEATHS</h2>
                            <p>{result.deaths}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h2>LAST UPDATED</h2>
                            <p>{result.lastChecked}</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </>
  );
};

export default Covid;