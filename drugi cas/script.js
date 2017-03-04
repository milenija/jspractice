//par nepar 1 do 10

// for (var i = 1; i<=10; i++)
// {
// 	if(i % 2 == 0) {
// document.write(i + " je paran" + "</br>");
// 	}
// 	else {
// 		document.write(i + " je neparan" + "</br>");
// 	}
// }

//sa casa zbir
function sabiraj(broj) {
	if (typeof broj == "number" && broj > 0 && broj % 1 ===0) {
		var suma = 0;
		for (i = 0; i <=0; i++) {
			suma+=i;
		}
		return suma;
	}
	return "Unesi jedan ceo nenegativan broj.";
}
console.log("Suma je " + sabiraj(4));


//zbir
function upisiBroj() {
	var n = Number(prompt("Upisi neki broj").trim());
	var zbir = 0;
	for (var i = 0; i<=n; i++) {
		zbir += i;
	}
	alert("Zbir uzastopnih brojeva je " + zbir + ".");
}
	
	//puta
	function drugiBroj() {
		var n = Number(prompt("Upisi neki drugi broj").trim());
		var zbir = 1;
		for (var i = 1; i<=n; i++) {
		zbir = zbir * i;

		}
	alert("Faktorijel je " + zbir + ".");
	}
//racun
function podeljeno() 
{
	var x = Number(prompt("Upisi koliki ti je budzet"). trim());
	var y = Number(prompt("Upisi koliko kosta proizvod koji hoces da kupis").trim());
	alert("Mozes da kupis proizvod " + x / y + " puta.");
}
//racun sa casa
//function kolikoKomada(stanje, cena) {
// 	return Math.floor(stanje/cena);
// }
// var rezultat = kolikoKomada(325, 14);
// document.write(rezultat);

//ograniceni zbir
function ograniceni() {
	var x = Number(prompt("Upisi jedan manji broj"). trim());
	var y = Number(prompt("Upisi veci broj od prethodnog").trim());
	var zbir = 0;
	if(x < y) {
		for(var i = x; i<=y; i++) {
			zbir+=i;
		}
		alert(zbir);
	}
		else {
			alert("Ukucaj brojeve tako da prvi bude manji od drugog.");
		}
}

