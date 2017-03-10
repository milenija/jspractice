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
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];

// Napraviti novi objekat koji će da sadrži broj zaposlenih u svakom departmentu
function brojLjudi(argument) {
  var brojLjudiDepartman = {
      IT: 0,
      Engineering: 0,
      Management: 0
    };
    for(var i = 0; i < argument.length; i++) {
      if(argument[i].department == "IT") {
        brojLjudiDepartman.IT += 1;
      }
      else if(argument[i].department == "Management"){
        brojLjudiDepartman.Management += 1;
      }
      else {
        brojLjudiDepartman.Engineering += 1;
      }
      
    }
  console.log(brojLjudiDepartman);
}
brojLjudi(people);

//Napraviti novi objekat koji će da sadrži zaposlene razvrstane po iskustvu
function iskustvo(argument) {
  var iskustvaLjudi = {
    amateur: [],
    newbie: [],
    expert: [],
    pro: []
  };

  for(var i = 0; i < argument.length; i++) {
    if(argument[i].yearsExperience <= 2) {
      iskustvaLjudi.newbie.push(argument[i].name);
    }
    else if(argument[i].yearsExperience <=5) {
      iskustvaLjudi.amateur.push(argument[i].name);
    }
    else if(argument[i].yearsExperience <= 10) {
      iskustvaLjudi.expert.push(argument[i].name);
    }
    else if(argument[i].yearsExperience >= 10) {
      iskustvaLjudi.pro.push(argument[i].name);
    }
  }
  console.log(iskustvaLjudi);
 }

 iskustvo(people);

//izlistava koliko ima zaposlenih po iskustvu
 function iskustvo(argument) {
  var iskustvaLjudi = {
    amateur: 0,
    newbie: 0,
    expert: 0,
    pro: 0
  };

  for(var i = 0; i < argument.length; i++) {
    if(argument[i].yearsExperience <= 2) {
      iskustvaLjudi.newbie += 1;
    }
    else if(argument[i].yearsExperience <=5) {
      iskustvaLjudi.amateur += 1;
    }
    else if(argument[i].yearsExperience <= 10) {
      iskustvaLjudi.expert += 1;
    }
    else if(argument[i].yearsExperience >= 10) {
      iskustvaLjudi.pro += 1;
    }
  }
  console.log(iskustvaLjudi);
 }

 iskustvo(people);

//Napraviti novi niz koji će da sadrži imena zaposlenih TRECI ZADATAK
function zaposleni(argument) {
  var ljudi = [];

  for(i = 0; i < argument.length; i++) {
    ljudi.push(argument[i].name);
  }
console.log(ljudi);
}
zaposleni(people);

//CETVRTI mnozi parne brojeve sa 3, a neparne sa 4

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function multiplyEvenAndOdds(array) {
  var noviNiz = [];
  for(i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      noviNiz.push(array[i] * 3);
    }
    else {
      noviNiz.push(array[i] * 4);
    }
  }
  return noviNiz;
}

console.log(multiplyEvenAndOdds(test_niz1));
console.log(multiplyEvenAndOdds(test_niz2));
console.log(multiplyEvenAndOdds(test_niz3));

// Koliko elemenata ulaznog niza je veće od zadatog broja?
// Funkcija vraća broj.
function getNumberOfElementsGreaterThan(array, limit) {
  var veceOd = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i] > limit) {
      veceOd += 1;
    }
  }
  return veceOd;
}

console.log(getNumberOfElementsGreaterThan(test_niz1, 5));
console.log(getNumberOfElementsGreaterThan(test_niz2, 47));
console.log(getNumberOfElementsGreaterThan(test_niz3, 3));


// 6. ZADATAK
// Ako je treći argument true treba napraviti novi niz
// od elemenata ulaznog koji su VEĆI ili JEDNAKI od
// zadatog broja. Ako je treći argument false treba 
// napraviti novi niz od elemenata ulaznog koji su
// MANJI od zadatog broja. Funkcija vraća niz
function filterOutElements(array, limit, direction) {
  var noviNizoje = [];
  for(var i = 0; i < array.length; i++) {
    if(direction === true) {
      if(array[i] >= limit) {
        noviNizoje.push(array[i]);
      }
    }
    else if(direction === false) {
      if (array[i] < limit) {
        noviNizoje.push(array[i]);
      }
    }
  }
  return noviNizoje;
}
console.log(filterOutElements(test_niz1, 5, true));
console.log(filterOutElements(test_niz1, 7, false));

console.log(filterOutElements(test_niz2, 47, false));
console.log(filterOutElements(test_niz2, 47, true));

console.log(filterOutElements(test_niz3, 1, true));
console.log(filterOutElements(test_niz3, 5, false));