import React from 'react';
import Info from "./components/info.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";

const API_KEY = "b40483964f3ad8536433d07036e1b7eb";

class App extends React.Component{
state={
temp: undefined,
city:undefined,
country: undefined,
sunrise:undefined,
sunset:undefined,
error:undefined
}
    gettingWeather =async (e) => {
        e.preventDefault();
        var city =e.target.elements.city.value;
       

      if(city){ 
          const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        this.setState({
            temp: data.main.temp,
            city: data.name ,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            error:undefined
        });
    }
    }
    render(){
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info"><Info/></div>
                        
                        <div className="col-sm-7">  <Form weatherMethod={this.gettingWeather}/>
                <Weather temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.erorr}/></div>
                    </div>
                </div>
               
              </div>
            </div>
        );
    }
}

export default App;