let mnenja = [
    {
        ime: "Suzana",
        text: "Draga Damjana! Ti si neverjetna umetnica, kako lepi izdelki! Veš, ustvarjanje so bile vedno moje sanje, sedaj pa mi zmanjkuje tako volje kot časa. Pa tudi ne vem kako se lotiti! Spomnim se kako sem kot otrok rada risala! Hvala za povabilo in včerajšnji večer. Zelo sem uživala, malo sem se naplesala in veliko nasmejala! Bilo je super, nekaj novega in super, ker si ti super! Hvala ti iz srca, da si me vzpodbudila za gibanje in ustvarjanje. Hvala za tvojo milo, nežno, toplo in ženstveno energijo. Objemček in vse dobro želim. "
    },
    {
        ime: "Renata",
        text: "Gibalno - likovne ustvarjalnice sem se udeležila, ker mi je bila tema o izdelavi kozarčka za srečo zanimiva. S takim načinom izobraževanja, da se poveže gib in likovnost, sem se srečala prvič. Delavnica se je izvajala na daljavo, pa vendarle je bil postopek ustvarjanja izdelka zelo razumljiv in zelo nazoren. Najbolj všeč so mi bili gibalni odmori in sprostitvene vaje ter komunikacija med udeleženkami. Izdelki, ki sem jih ustvarila na delavnici so mi služili za novoletna darila. Želim si obiskati še kakšno tvojo delavnico, morda z drugo temo. Delavnico sem priporočila svojim sodelavkam in prijateljicam in si mislim, da se bomo kmalu videle. Do takrat pa bodi fajn in ostani zdrava!\n "
    },
    {
        ime: "Majda",
        text: "Gibalno - likovne ustvarjalnice sem se udeležila, ker mi je bila tema o izdelavi kozarčka za srečo zanimiva. S takim načinom izobraževanja, da se poveže gib in likovnost, sem se srečala prvič. Delavnica se je izvajala na daljavo, pa vendarle je bil postopek ustvarjanja izdelka zelo razumljiv in zelo nazoren. Najbolj všeč so mi bili gibalni odmori in sprostitvene vaje ter komunikacija med udeleženkami. Izdelki, ki sem jih ustvarila na delavnici so mi služili za novoletna darila. Želim si obiskati še kakšno tvojo delavnico, morda z drugo temo. Delavnico sem priporočila svojim sodelavkam in prijateljicam in si mislim, da se bomo kmalu videle. Do takrat pa bodi fajn in ostani zdrava!\n "
    },
    {
        ime: "Zarja in Martina",
        text: "Draga Damjana, tvoje delavnice sva se udeležili iz radovednosti, saj sva vedeli da bo nekaj drugačnega in nekaj ustvarjalnega. Prijetno sva bili presenečeni nad združitvijo plesa in končnega izdelka. Najlepše nama je bilo, ko smo plesale z baloni, nato pa smo ta iste balone porabile za izdelovanje velikonočnih jajc. Čudovito! Tvojih delavnic bi se radi še udeležili. Radi bi spoznali različne tehnike slikanja in izdelovanja božično-novoletnih aranžmajev in venčkov. Delavnice so me vzpodbudile, da sem tudi sama začela več plesati in peti; naredila pa sem še tri podobne izdelke. Delavnice bi priporočili vsem, ki si v dobri družbi želijo ustvarjati kaj posebnega za svoj dom, sobo, vrt ... Komaj čakava na naslednjo delavnico in pošiljava ti objem.\n"
    },

]

const nav = document.querySelector(".nav");
const bars = document.querySelector(".bars");
const main = document.querySelector("main");
const odziv = document.querySelector(".odziv");

bars.addEventListener("click", function () {
    nav.classList.toggle("show");
    main.style.height = 0;
    main.style.overflow = "hidden";
})
let stevec = 1;
window.setInterval(function () {
    let ime = mnenja[stevec].ime;
    let text = mnenja[stevec].text;
    odziv.innerHTML = `<h2 style="text-align: center">Odzivi</h2>
                        <h3>${ime}:</h3>
                       <p>"${text}"</p>`
    stevec = stevec + 1;
    if (stevec === 4){
        stevec = 0;
    }
    console.log(odziv)
}, 5000)