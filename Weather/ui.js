class UI {
    constructor() {
        this.datasDiv = document.querySelector(".datas");
    }

    toUI(datas) {
        this.datasDiv.innerHTML = `<table id="table">
        <tr>
          <td class="right">Şehir : </td>
          <td> ${datas.name}</td>
        </tr>
        <tr>
          <td class="right">Sıcaklık : </td>
          <td> ${datas.sicaklik} °C</td>
        </tr>
        <tr>
          <td class="right">Hissedilen : </td>
          <td> ${datas.hissedilen} °C</td>
        </tr>
        <tr>
          <td class="right">Nem : </td>
          <td> ${datas.nem}</td>
        </tr>
        <tr>
          <td class="right">Rüzgar : </td>
          <td> ${datas.ruzgarHizi}</td>
        </tr>
        <tr>
          <td class="right">Yağış : </td>
          <td> ${datas.yagis}</td>
        </tr>
      </table>`;
    }
}