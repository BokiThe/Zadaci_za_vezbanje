console.log(`ZADACI ZA VEZBANJE FUNKCIJE`);

//1 ZADATAK
/*
Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.

*/
console.log(`/////////////////// 1 ZADATAK ///////////////////`);

let suma = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i ** 3;
    }
    return suma;
};

console.log(`Suma kubova brojeva od n do m je ` + suma(1, 3));

//2 ZADATAK
/*
Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
*/
console.log(`/////////////////// 2 ZADATAK ///////////////////`);

let godine = (godRodjenja) => {
    let datum = new Date();
    let godina = datum.getFullYear();
    let godine = godina - godRodjenja;
    return godine;
};

console.log(`Korisnik ima ${godine(1989)}god`);

//3 ZADATAK
/*
Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

*/
console.log(`/////////////////// 3 ZADATAK ///////////////////`);

let deljiv = (n, m, k) => {
    let brojac = 0;
    for (let i = n; i <= m; i++) {
        i % k == 0 ? brojac++ : false;
    }
    return brojac;
};

console.log(
    `broj brojeva u intervalu n do m koji je deljiv sa k je ${deljiv(1, 100, 7)}`
);

//4 ZADATAK
/*
Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.
*/
console.log(`/////////////////// 4 ZADATAK ///////////////////`);

let trjanjeLeta = (pLetaS, pLetM, kLetS, kLetM) => {
    let ukupnoSati = kLetS - pLetaS;
    let ukupnoMin = kLetM - pLetM;

    if (ukupnoMin < 0) {
        ukupnoSati -= 1;
        ukupnoMin += 60;
    } else if (ukupnoMin > 60) {
        ukupnoSati += 1;
        ukupnoMin -= 60;
    }
    console.log(`Vas let je trajao ${ukupnoSati}h i ${ukupnoMin}min`);
};

trjanjeLeta(8, 30, 10, 10);

//5 ZADATAK
/*
Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.
*/
console.log(`/////////////////// 5 ZADATAK ///////////////////`);

let jaban = (jabuke, banane) => {
    let porcija = 0;
    let ukupnoJabuka = Math.round(jabuke - jabuke * 0.2);
    let jabukePoPorciji = ukupnoJabuka / 2;
    let bananePoPorciji = banane / 3;
    if (jabukePoPorciji > bananePoPorciji) {
        porcija =
            (jabukePoPorciji +
                bananePoPorciji -
                (jabukePoPorciji - bananePoPorciji)) /
            2;
    } else if (bananePoPorciji > jabukePoPorciji) {
        porcija =
            (jabukePoPorciji +
                bananePoPorciji -
                (bananePoPorciji - jabukePoPorciji)) /
            2;
    } else {
        porcija = (jabukePoPorciji + bananePoPorciji) / 2;
    }
    return Math.round(porcija);
};
console.log(jaban(55, 50));

// 6 ZADATAK

/*
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami.
 Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/
console.log(`/////////////////// 6 ZADATAK ///////////////////`);

let praksa = (n, a, d) => {
    let ukupno = a + (n - 1) * (a + d);
    return ukupno;
};

console.log(
    `Novac koji cete zaraditi za vreme prakse ako budete vredno radili je ${praksa(
    5,
    1000,
    150
  )}`
);

// 7 ZADATAK

/*
Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža od druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

*/

console.log(`/////////////////// 7 ZADATAK ///////////////////`);
// prvo naci njvecu a onda na osnovu
let fabrika = (nogara1, nogara2, nogara3) => {
    //prvo pronadjemo najvecu
    if (nogara1 < nogara2) {
        let najveca = nogara1;
        nogara1 = nogara2;
        nogara2 = najveca;
    }
    if (nogara1 < nogara3) {
        let najveca = nogara1;
        nogara1 = nogara3;
        nogara3 = najveca;
    }
    // ovim smo odredili da je nogara1 najveca
    if (nogara2 < nogara3) {
        let najveca = nogara2;
        nogara2 = nogara3;
        nogara3 = najveca;
    }
    // saada imamo 3 varijante moguce za pronalazenje 3 nepoznate

    if (nogara1 - nogara2 == nogara2 - nogara3) {
        return nogara3 - (nogara2 - nogara3);
    } else if (nogara1 - nogara2 == 2 * (nogara2 - nogara3)) {
        return nogara1 - (nogara2 - nogara3);
    } else if (nogara1 - nogara2 == (nogara2 - nogara3) / 2) {
        return nogara2 - (nogara1 - nogara2);
    } else {
        return 0;
    }
};
console.log(fabrika(2, 4, 1));
console.log(fabrika(40, 10, 20));

// 8 ZADATAK

/*
Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.
*/

console.log(`/////////////////// 8 ZADATAK ///////////////////`);

let prethodniDan = (dan, mesec, godina) => {
    let datum = 0;
    let prestupnaGod =
        (godina % 100 != 0 && godina % 4 == 0) || godina % 400 == 0 ? true : false;
    let validanDan = (prviDan, zadnjiDan) =>
        dan >= prviDan && dan <= zadnjiDan ? true : false;

    switch (prestupnaGod) {
        case true:
            switch (mesec) {
                case 1:
                    switch (validanDan(1, 31)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                if (mesec <= 0) {
                                    godina--;
                                    mesec += 12;
                                    return (datum = dan + "." + mesec + "." + godina + ".");
                                } else return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                    }
                case 2:
                    switch (validanDan(1, 29)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos za februar! dan mora biti od 1 - 29";
                            break;
                    }
                    break;
                case 3:
                    switch (validanDan(1, 30)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 29;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos";
                            break;
                    }
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    switch (validanDan(1, 31)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 29;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos!";
                            break;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    switch (validanDan(1, 30)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos!";
                            break;
                    }
                    break;

                default:
                    "pogresan unos!";
                    break;
            }

            break;

        default:
            switch (mesec) {
                case 1:
                    switch (validanDan(1, 31)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                if (mesec <= 0) {
                                    godina--;
                                    mesec += 12;
                                    return (datum = dan + "." + mesec + "." + godina + ".");
                                } else datum = dan + "." + mesec + "." + godina + ".";
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                    }
                case 2:
                    switch (validanDan(1, 28)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos za februar! dan mora biti od 1 - 28";
                            break;
                    }
                    break;
                case 3:
                    switch (validanDan(1, 28)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 28;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos";
                            break;
                    }
                    break;

                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    switch (validanDan(1, 31)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 30;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos!";
                            break;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    switch (validanDan(1, 30)) {
                        case true:
                            dan--;
                            if (dan == 0) {
                                mesec--;
                                dan += 31;
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            } else {
                                return (datum = dan + "." + mesec + "." + godina + ".");
                            }
                            break;
                        default:
                            return "pogresan unos!";
                            break;
                    }
                    break;

                default:
                    return "pogresan unos!";
                    break;
            }
            break;
    }
    return datum;
};

console.log(prethodniDan(1, 3, 2024));
let datum = ["dan", "mesec", "godinu"];
let formaNiza = (niz) => {
    let forma = `<form>`;
    niz.forEach((el) => {
        forma += `<label>Izaberite ${el}:</label>   <input type="number" plaseholder="upisite dan"><br/></br>`;
    });
    forma += `<input type="submit" value="jucerasnji dan">`;
    forma += `</form>`;
    document.body.innerHTML += forma;
};

formaNiza(datum);