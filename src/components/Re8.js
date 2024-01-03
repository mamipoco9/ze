import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Re8() {
    const apiKey = "e0ddc538b3415427caeb7901218a30dd";
    const [text, setText] = useState("");
    const [data, setData] = useState(null);
    const [Error,setError]=useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
    const getData = () => {
        axios.get(url)
        .then(function (res) {
            setData(res.data);
            setError(null)
            console.log(res);

        })
        .catch((Error)=>{
            if (Error.response.status == "404") {
                setError('this not name city')
                setData(null)
            }
        });

    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Nhập tên thành phố"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter" && text) {
                        getData();
                    }
                }}
            />
            {Error&& <h1>{Error}</h1>}
            {data && 
            (<div>
                <p>country : { data.sys.country} </p>
            <p>temp : { data.main.temp}°C</p>
            <h1>{ data.weather[0].description}</h1>
            <img src={`http://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} />

            </div>)}
        </div>
    );
}
