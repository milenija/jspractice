var testObjekat = {
  naziv: "Startit kurs pravljenja sajtova",
  trajanjeNedelja: 33,
  predavac: {
    ime: "Petar",
    prezime: "Popovic"
  },
  ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
  organizacija: "Startit",
  kursJosTraje: true
};

//PRVI ZADATAK
function ocene(testObjekat) {
  var noviNiz = [];
  for (var i = 0; i <= testObjekat.ocenePolaznika.length - 1; i++) {
    noviNiz.push(testObjekat.ocenePolaznika[i] + "/10");
  }
  console.log(noviNiz);
}

ocene(testObjekat);


// DRUGI ZADATAK
function kolikoPuta(testObjekat) 
{
  var noviKolikoPuta = [];
  var count;
  for(var i = 1; i <= 10; i++)
  {
    count = 0;
    for (var j = 0; j < testObjekat.ocenePolaznika.length; j++) {
      
      if (i == testObjekat.ocenePolaznika[j]) {
        count++;
      }
    }
    noviKolikoPuta.push({['rate_'+i]: count});
  }
  console.log(noviKolikoPuta);
}
kolikoPuta(testObjekat);

//TRECI
function prosek(testObjekat){
  var prosecna = 0;
  for(var i = 0; i < testObjekat.ocenePolaznika.length; i++){
    prosecna += testObjekat.ocenePolaznika[i];
  }
  return prosecna / testObjekat.ocenePolaznika.length;
}

prosek(testObjekat);

//CETVRTI
var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function godineIskustva(data){
    var godine = 0;
    for(var i = 0; i < data.length; i++){
        godine += data[i].yearsExperience;
    }
    return godine;
}

godineIskustva(people);

//PETI
function iskustvoDepartman(data){
  var godineIskustva = {
      IT: 0,
      Engineering: 0,
      Management: 0
    };
  for(var i = 0; i < data.length; i++){
    if(data[i].department == 'IT'){
      godineIskustva.IT += data[i].yearsExperience;
    }
    else if(data[i].department == 'Engineering'){
      godineIskustva.Engineering += data[i].yearsExperience;
    }
    else{
      godineIskustva.Management += data[i].yearsExperience;
    }
  }
  console.log(godineIskustva);
}
iskustvoDepartman(people);