var a = 0;

function counter() {
	if (a == 100) {
		document.body.style.backgroundColor = "black";
		clearInterval(int);
	} else {
		a++;
		document.getElementById('timer').innerHTML = a;
	}
}

 var int = setInterval(counter,100);