
const capitalsARR = ['Tirana', 'Vienna', 'Minsk', 'Brussels', 'Sarajevo', 'Sofia', 'Zagreb', 'Prague', 'Copenhagen', 'Tallinn', 'Helsinki', 'Paris', 'Berlin', 'Athens', 'Budapest', 'Reykjavik', 'Dublin', 'Rome', 'Riga', 'Vilnius', 'Skopje', 'Valletta', 'Amsterdam', 'Oslo', 'Warsaw', 'Lisbon', 'Bucharest', 'Belgrade', 'Moscow', 'Bratislava', 'Stockholm', 'Bern', 'Kiev', 'London']
class WeatherData {

    constructor() {

        this.current = {
            // model of all the city objects 
            temperature: null,
            city: 'unknown',
            country: 'unknown'
        };
        this.capitals = [];
        this.update();
    }
    // lunches all the functions and finds geolocation
    update() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let cords = [position.coords.longitude, position.coords.latitude];

                this.updateForecast(cords);
                this.updateCapitals();
            });
        } else {
            alert('Location access is limited !!');
        }
    }
    // starts off update functions
    async updateForecast(position) {
        let data = null;

        try {
            data = await this.fetchData(position);
        } catch (e) {
            console.log(e);
        }
        this.populateCurrent(data);
        //push current temp to an array as well
        this.capitals.push(this.current);
    }
    // detches data for every capital and pushes it to an array
    async updateCapitals() {
        let data = null;

        try {
            for (let i = 0;  i < capitalsARR.length; i++){
                data = await this.fetchData(capitalsARR[i]);
                this.populateCapitals(data);
            };
            
            this.sortObjects(this.capitals);
        } catch(e) {
            console.log(e);
        }
    }
    // fatches data form the API
    async fetchData(place) {
        
        try {
            let APIkey = `1b14cf364521340ececa5ed3a758bd5a`;
            
            if(place.constructor === Array) {
                place = `lat=${place[1]}&lon=${place[0]}`;
                
            } else  {
                place = `q=${place}`;
            }
            
            const api = `https://api.openweathermap.org/data/2.5/weather?${place}&APPID=${APIkey}`;
            
            let response = await fetch(api);
            
            return await response.json();
            

        } catch(error) {
            console.log(error);
        }

        
    }
    populateCurrent(data) {
        this.current.temperature = Math.round((data.main.temp - 273.15)*10) / 10 ;
        this.current.city = data.name;
        this.current.country = data.sys.country;
    }
    populateCapitals(data) {
        let city = {
            temperature: Math.round((data.main.temp - 273.15)*10) / 10,
            city: data.name,
            country: data.sys.country
        };

        this.capitals.push(city);
        
    }

    //sorts an array of capitals by temperature up
    sortObjects(array) {
        const desARR = array.sort((a, b) => {
        
            if (a.temperature > b.temperature) {
                return 1;
            } else {
                return -1;
            }
    
        });
        array = desARR.slice(0);
        
    };
    
};

export default WeatherData;

