var do100 = [];
for (var i = 1; i<=100; i++) {
	do100.push(i);
}
console.log(do100);

 
var niz1 = [23, 43, -8, 77, 0, 23, 15];
var holder = 0;
for (var i = 0; i<niz1.length; i++) {
   if (holder < niz1[i]) {
      holder = niz1[i];
     }
  
}
console.log("Najveci broj u arrayu je " + holder);


var prviNiz = [7, 15, 45, 78, 20, 9];
var puta = [];
for (var i = 0; i < prviNiz.length; i++) {
	puta[i] = prviNiz[i] * 2;
}
console.log(puta);

          
var niz = [16, 23, 3, 78, 9, 14, 17];
var parni = [];
var neparni = [];
for (var i = 0; i <niz.length; i++) {
	if (niz[i] % 2 == 0) {
		parni.push(niz[i]);
	}
	else {
		neparni.push(niz[i]);
	}
}
console.log(parni);
console.log(neparni);

//DOMACI ODAVDE

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var porez = [];
var total = 0;
for(i = 0; i<cene.length; i++) {
  if (cene[i] < 50) {
  porez.push(cene[i]*18/100+cene[i]);
    total +=porez[i];
}
else {
  porez.push(cene[i]*8/100+cene[i]);
  total +=porez[i];
}
}

console.log(porez);
console.log(total);

var provera ="";
function daLi(rec) {
  for(var i = rec.length - 1; i>=0; i--) {
    provera += rec[i];
  }

  if (provera == rec) {
    console.log(provera + " je palindrom.");
  }
  else {
    console.log(rec + " nije palindrom.");
  }
}
daLi("kilo");