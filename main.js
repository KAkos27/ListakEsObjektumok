let lista = ["első", "második"];

console.log(lista[0]);

lista[0] = "kutya";

console.log(lista);

lista[10] = "utolsó";

console.log(lista);

lista.push("következő");

console.log(lista);

lista.pop();
console.log(lista);

//a konstans egyszerű adatszerkezet esetén, const-tal való deklarációnál a konstans értékét nem lehet megváltoztatni
//egyszerű adatszerkezetek: szöveg, szám, logikai érték
//összetett adatszerkezet esetén const használatával az összetett adatszerkezet memória címe lesz állandó, az nem változtatható meg
//de az egyes értékek megváltoztathatók. Összetett adatszerkezetek: lista, objektum

const lista2 = [12, 13, 14, 15];

console.log(lista2);

lista2[0] = 24;
lista2.push(22);

console.log(lista2);

//Objektumok

const brassoi = {
  nev: "Brassói aprópecsenye",
  ar: 2990,
};

const pizza = {
  nev: "BBQ Pizza",
  ar: 4900,
  meret: 45,
  mennyiseg: 2,
};

const kutyalista = [
  {
    nev: "Bálint",
    fajta: "pitbull",
    szin: "fekete",
    marmagassag: 34,
    szuld_datmum: 2020,
    szul_hely: "Budapest",
  },
  {
    nev: "Ló",
    fajta: "keverék",
    szin: "kék",
    marmagassag: 31,
    szuld_datmum: 2021,
    szul_hely: "Budapest",
  },
];

console.log(kutyalista[0].szin);
