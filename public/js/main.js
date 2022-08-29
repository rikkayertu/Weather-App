const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const dataHide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = "Plz enter some location to begin search";
        dataHide.classList.add("data-hide");
    } else {
        try {
            // https://api.openweathermap.org/data/2.5/weather?q=una&units=metric&appid=1393cb5da57d43cee9ab400b2f0ae104
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1393cb5da57d43cee9ab400b2f0ae104`
            const resposne = await fetch(url);
            const data = await resposne.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            console.log(arrData);
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood =arrData[0].weather[0].main;

            // code for image selection in weather 
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }

            dataHide.classList.remove("data-hide");


        } catch {
            console.log("something went wrong");
            city_name.innerText = "plz enter city name properly";
            dataHide.classList.add("data-hide");
        }

    }

}

submitBtn.addEventListener('click', getInfo);
