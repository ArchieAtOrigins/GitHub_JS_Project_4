var quiz = [
	["What is Superman's real name?", "Clarke Kent"],
	["What is Wonderwoman's real name?", "Dianna Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
	];

var score = 0;

for (var i=0, max=quiz.length; i<max; i++) {
	// get answer from user
	var answer = prompt(quiz[i] [0])
	//check if answer is correct
	if(answer === quiz[i] [1]) {
		alert("Correct!");
		score++;
	} else {
		alert("Sorry, that is incorrect. BLNT");
	}
}

alert("Game Over. You scored " + score + " points");