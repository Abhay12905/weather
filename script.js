function Cityname(){
        let city = document.querySelector("#input").value;

    if(city==""){
            alert("Enter place you want to search")
        }
    else{   
         let response = fetch(`https://api.weatherapi.com/v1/current.json?key=6d0976c6d4114cd59cb123503252108&q=${city}&aqi=yes`).then((res)=>res.json()).then((data)=>{
            document.querySelector(".area").innerHTML= `${data.location.name}ˏ${data.location.region}ˏ${data.location.country}`
            let date = data.current.last_updated;
            date.trim(0,9)
            document.querySelector(".date").innerHTML= `${date}`;
            document.querySelector(".condition").innerHTML= `${data.current.condition.text}`;
            document.querySelector(".temp").innerHTML= `${data.current.temp_c}°C`
            document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
            document.querySelector(".wind-speed").innerHTML = `${data.current.wind_kph}`;
            document.querySelector(".weather-icon").src = `${data.current.condition.icon}`;
            
            console.log(data);
        })
        }
        
    }