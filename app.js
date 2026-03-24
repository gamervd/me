// Fetch weather data from Open-Meteo API

const fetchWeatherData = async (latitude, longitude) => {
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Example usage: Fetch weather data for a specific location
const latitude = 35.6895; // Tokyo
const longitude = 139.6917;

fetchWeatherData(latitude, longitude).then(data => console.log(data));