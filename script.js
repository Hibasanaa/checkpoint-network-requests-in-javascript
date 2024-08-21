document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById('location').textContent = '';
        document.getElementById('temperature').textContent = '';
        document.getElementById('description').textContent = '';
        alert(error.message);
    }
});
