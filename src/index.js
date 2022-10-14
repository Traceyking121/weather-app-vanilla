let apiKey =
    "115cc82b8a9ac9c633f8e4fdc3718a7f";
  let city = "paris"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

console.log(apiUrl);
