class Hava {
    constructor() {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=";
        const url2 = "&appid=bd89b2e584a2909a7660cd8de240851e&lang=tr";
    }
    havaDurumu(cityValue) {
        return new Promise((resolve, reject) => {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=bd89b2e584a2909a7660cd8de240851e&lang=tr&units=metric")
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(err => console.log(err));
        })

    }
}