const sehir = document.getElementById("city");
const buton = document.getElementById("buton");
const hava = new Hava();
const ui = new UI();

buton.addEventListener("click", veriAl);


function veriAl(e) {

    let sehirAdi = sehir.value;

    hava.havaDurumu(sehirAdi)
        .then(response => {
            let datas = {
                "name": response.name,
                "yagis": response.weather.description,
                "sicaklik": response.main.temp,
                "hissedilen": response.main.feels_like,
                "nem": response.humidity,
                "ruzgarHizi": response.wind.speed,
            }
            return datasToUI(datas)
        })
        .catch(err => console.log(err));

    e.preventDefault();
}

function datasToUI(datas) {
    ui.toUI(datas);
}
