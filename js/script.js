var quiz = [
	["What is Superman's real name?", "Clarke Kent"],
	["What is Wonderwoman's real name?", "Dianna Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
	];

var score = 0;

play(quiz);

function play(quiz) {
	// main game loop
	for(var i=0, question, answer, max=quiz.length; i<max; i++) {
		question = quiz[i] [0];
		answer = ask(question);
		check(answer);
	}
	//end of game main loop
	gameOver();

	function ask(question) {
		return prompt(question); //quiz [i] [0] is th ith question
	}

	function check(answer) {
		if(answer === quiz[i][1]) {
			alert("Correct!");
			// increase score by 1
			score++;
		} else {
			alert("Sorry, that is incorrect");
		}
	}

	function gameOver(){
		// inform the player that the game has finished and tell them their score
		alert("Game Over. Your score is " + score + " points");
	}
}


