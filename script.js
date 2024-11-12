// EKSEMPEL PÅ KODE VI GÅR IGJENNOM
/*
IKKE COPY/PASTE, SKRIV SELV ;)

//VARIABLER

const = noe som er konstant, ikke skal endres
let = noe som kan endres

//DATATYPER

number = tall
string = tekst
boolean = sant eller usant

array = liste 
object = lagrer forskjellig data, hver bit har et navn med en verdi, f.eks farge: "rød"

array og object er noe vi kommer tilbake til, trengs ikke å læres nå ;)

undefined = ingenting er her
null = jeg har bestemt at denne skal være tom

undefined og null er som regel tegn på en error i koden, noe er feil


//FUNKSJON//

function yourFunctionName(bokser for verdier, det kalles arguments){
    
    skriv koden her

    return eller console.log()
}

yourFunctionName(verdier, det kalles parametres)


//KOBLE TIL HTML

document.querySelection('#navnPåId')


//EVENTLISTENER

variabelNavn.addEventlistener("click", function{
    hva skal skje når man trykker
})

//IF ELSE STATEMENTS

if(){

} = sjekker om noe er sant eller usant

else{} = hvis ikke så skjer dette

=== betyr at noe er helt likt

!= skrives for å sjekke: "hvis ikke dette er likt"


//CLASSLIST

classList.add = legger til en class
classlist.remove = tar bort en class
classlist.toggle = skifter mellom å legge til og ta bort klassenavn

//OPPGAVER

 Oppgave1: 
 1.lag 3 variabler for en fruktbutikk,
 en variabel for butikkens navn, en variabel for antall epler i butikken, 
 og en variabel for om butikken er åpen eller ikke

 2. console.log variablene

 3. Hvilket variabel skal ha const?

 BONUS!

 4. lag en array eller et object som viser forskjellig typer frukt i butikken


 Oppgave2: 

 1.skriv en funksjon som console.log "Min første funksjon"
 2. skriv en funksjon som trekker fra 2 tall, f.eks 7-3,
  consol.log sum 

BONUS!

 3. skriv en funksjon hvor du bruker parametre og argumenter(se over om usikker),
    funksjonen skal sette sammen et fornavn og et etternavn, 
    skriv 2 variabler utenfor funksjonen som lagrer funksjonen med ulike verdier, 
    console.log variabel navnet


 Oppgave3:
 1.Lag en ny knapp i HTML og gi den en id
 2. Lag en variabel hvor du kobler til den nye knappen
 3. Lag en eventListener som console.log "knapp er trykket" når du trykker på den

 BONUS!

 4. Lag en animasjon i CSS som du skrur av og på med addEventlistener
 

*/

//oppgave1
const butikknavn= "Brukt Frukt";
console.log(`velkommen til ${butikknavn}`);

let nEpler = 2000;
console.log(`Vi har ${nEpler} epler`);

let open = false;
console.log(`Butikken er nå ${open ? "åpen" : "stengt"}`);

let fruktutvalg = ["eple", "banan", "papaya", "vedum", "Jonas Gahr S"];
console.log(`vi kan skryte av å ha frukter som: ${fruktutvalg}`);

function readOpen() {
  if(open) return "åpen";
   else return "stengt";
   //return open ? "åpen" : "stengt";
}

let a = 30;
let b = 20;
console.log(`${a} pluss ${b} blir ${addNumbers(a,b)}`);


//oppgave2
function addNumbers(n1, n2) {
  return n1 + n2;
}

//oppgave3
//Datatyper

//Number, String, Boloeon

//Arrays, objects

let passengers = ['Ania Kubow', 'Kevin Powell', 'Simo Edwin', 'Thomas Cargill'];

let flightInfo = {
  isDelayed: true,
  departure: {
    time: '09.15',
    airport: 'Flesland ',
    city: 'Bergen',
  },

  arrival: {
    time: '06.30',
    airport: 'JFK',
    city: 'New York',
  },
};

//Hvordan skrive en funksjon

// Argumenter vs parametre

// Hvordan hente inn ting vi skal gjøre noe med
const button = document.querySelector('#showBtn');
const text = document.querySelector('#text');
const toggle = document.querySelector('#toggleCont');
const toggleCircle = document.querySelector('#toggleCircle');

toggle.addEventListener('click', function () {
  if(toggleCircle.classList.contains('move')) {
    toggleCircle.classList.remove('move');
    toggleCircle.classList.add('moveBack');
  } else {
    toggleCircle.classList.remove('moveBack');
    toggleCircle.classList.add('move');
  }
});

button.addEventListener('click', function () {
  text.classList.toggle('showtextBox'); //toggle er en ny funksjon
  text.classList.toggle('hiddenBox');
});