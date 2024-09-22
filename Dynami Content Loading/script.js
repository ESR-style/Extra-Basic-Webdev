document.getElementById('fetch-weather').addEventListener('click', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'London'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-data').innerHTML = weatherData;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});