const apiKey = "cd4f75692916e00e94c5910b5b037e69"; 

function getWeatherByCity() {
    const city = document.getElementById("city-input").value.trim();

    if (city === ""){
        alert("Por favor, insira o nome de uma cidade.");
        return
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response =>{
            if (!response.ok) {
                throw new Error("Cidade não encontrada")
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = data.main.temp;
            document.getElementById("weather").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = data.main.humidity;
            document.getElementById("wind-speed").innerText = (data.wind.speed * 3.6).toFixed(2); // Convertendo m/s para km/h
            document.getElementById("weather-info").classList.remove("d-none");
        })
        .catch(error => {
            alert(error.message);
        });

    }
