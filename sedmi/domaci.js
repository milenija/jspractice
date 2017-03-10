/*
  U nastavku su test podaci kao i potpisi funkcija. U komentarima je objašnjenje šta koja funkcija treba da uradi i šta treba da vrati kao rezultat izvršenja.
*/
var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];


var test_objekat1 = {
    ime: "Petar",
    prezime: "Petrovic",
    ocene: [1, 6, 2, 5, 7, 2, 8, 3]
};
    
var test_objekat2 = {
    ime: "Marko",
    prezime: "Markovic",
    ocene: [45, 62, 123, 63, 74, 85, 21, 77]
};

var test_objekat3 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    ocene: [-6, 23, 10, 0, -22, 52, 86, 2]
};


// Najmanja ocena osobe, funkcija vraća broj 
function getMinGrade(person) {
    var count = person.ocene[0];
    for(i = 0; i < person.ocene.length; i++) {
    
            if(person.ocene[i] < count) {
               count = person.ocene[i];
            }
     
    }
    return count;
}

console.log("Get Min Grade: -----------------");
console.log(getMinGrade(test_objekat1));
console.log(getMinGrade(test_objekat2));
console.log(getMinGrade(test_objekat3));

// Najveća ocena osobe, funkcija vraća broj

function getMaxGrade(grades) {
  var count = grades[0];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] > count) {
      count = grades[i];
    }
  }
  return count;
}


console.log("Get Max Grade: -----------------");
console.log(getMaxGrade(test_objekat1.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat2.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat3.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument 

// Novi niz koji se sastoji od parnih ocena osobe, funkcija vraća niz
function getArrayOfEvenGrades(person) {
  var noviNiz = [];
  for(i = 0; i < person.ocene.length; i++) {
    if(person.ocene[i] % 2 === 0) {
      if(person.ocene[i] === 0) {
        continue;
      }
        noviNiz.push(person.ocene[i]);
    }
  }
  return noviNiz;
}

console.log("Array of Even Grades: -----------------");
console.log(getArrayOfEvenGrades(test_objekat1));
console.log(getArrayOfEvenGrades(test_objekat2));
console.log(getArrayOfEvenGrades(test_objekat3));

// Novi niz koji se sastoji od neparnih ocena osobe, funkcija vraća niz
function getArrayOfOddGrades(grades) {
var noviNiz = [];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] % 2 == 1) {
        noviNiz.push(grades[i]);
    }
  }
  return noviNiz;
}

console.log("Array of Odd Grades: -----------------");
console.log(getArrayOfOddGrades(test_objekat1.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat2.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat3.ocene)); // Oprez

// Suma svih ocena, funkcija vraća broj
function getSumOfGrades(grades) {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
      sum += grades[i];
  }
  return sum;
}

console.log("Sum of elements: -----------------");
console.log(getSumOfGrades(test_objekat1.ocene));
console.log(getSumOfGrades(test_objekat2.ocene));
console.log(getSumOfGrades(test_objekat3.ocene));

// Novi niz koji se dobija množenjem parnih ocena sa 3, a neparnih sa 4, funkcija vraća niz
function getMappedGrades(person) {
  var noviNiz = [];
  for(i = 0; i < person.ocene.length; i++) {
    if(person.ocene[i] % 2 === 0) {
      noviNiz.push(person.ocene[i] * 3);
    }
    else {
      noviNiz.push(person.ocene[i] * 4);
    }
  }
  return noviNiz;
}

console.log("Mapped grades: -----------------");
console.log(getMappedGrades(test_objekat1));
console.log(getMappedGrades(test_objekat2));
console.log(getMappedGrades(test_objekat3));

// Novi niz koji se dobija stavljanjem parnih ocena na početak niza, a neparnih na kraj. 
//Mogu se praviti pomoćni nizovi za parne i neparne pa da se na kraju spoje. Funkcija vraća niz

function reorderGrades(grades) {
  var parni = [];
  var neparni = [];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] % 2 === 0) {
        parni.push(grades[i]);
    }
    else if(grades[i] % 2 == 1 ){
        neparni.push(grades[i]);
    }
    }
    return parni.concat(neparni);
}

console.log("Reordered array: -----------------");
console.log(reorderGrades(test_objekat1.ocene));
console.log(reorderGrades(test_objekat2.ocene));
console.log(reorderGrades(test_objekat3.ocene));

// Koliko je ocena veće od zadatog broja? Funkcija vraća broj.
function getNumberOfGradesGreaterThan(person, limit) {
  var count = 0;
  for(i = 0; i < person.ocene.length; i++) {
    if(person.ocene[i] > limit) {
        count += 1;
    }
  }
  return count;
}

console.log("Grades greater than given number: -----------------");
console.log(getNumberOfGradesGreaterThan(test_objekat1, 5));
console.log(getNumberOfGradesGreaterThan(test_objekat2, 47));
console.log(getNumberOfGradesGreaterThan(test_objekat3, 3));

// Ako je treći argument true treba napraviti novi niz od ocena osobe koji su VEĆE ili JEDNAKE od zadatog broja. 
//Ako je treći argument false treba napraviti novi niz od ocena osobe koji su MANJE od zadatog broja. Funkcija vraća niz
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