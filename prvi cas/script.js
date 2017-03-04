var user = prompt("Biraj: Papir, kamen, makaze.").toLowerCase();
var computer = Math.random();

if (computer <= 0.33) {
	computer = "papir";
}

else if (computer <= 0.66) {
	computer = "kamen";
}

else {
	computer = "makaze";
}


if (user == computer) {
	document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'>Nereseno, igraj ponovo!</h1>");
}
else if (user == "papir") {
	if (computer == "makaze") {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'Izgubio si, gubitnice!</h1>");
	}
	else {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'>Pobedio si. Trazim revans!</h1>");
	}
}

else if (user == "kamen") {
	if (computer == "papir") {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'Izgubio si, gubitnice!</h1>");
	}
	else {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'>Pobedio si. Trazim revans!</h1>");
	}
}

else if (user == "makaze") {
	if (computer == "kamen") {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'Izgubio si, gubitnice!</h1>");
	}
	else {
		document.write("<h1 style='font-family: Helvetica; color: indigo; text-align: center;'>Pobedio si. Trazim revans!</h1>");
	}
}

else {
	alert("Ukucajte jednu od tri opcija.");
}