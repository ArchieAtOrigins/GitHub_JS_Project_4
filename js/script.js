quiz = {
	"name": "Super Hero Name Quiz",
	"description": "How many super heroes can you name?",
	"question": "What is the real name of ",
	"questions": [
		{"question": "Superman", "answer": "Clarke Kent"},
		{"question": "Batman", "answer": "Bruce Wayne"},
		{"question": "Wonder Woman", "answer": "Dianna Prince"}
		]
}

var score = 0;

play(quiz);

function play(quiz) {
	// main game loop
	for(var i=0, question, answer, max=quiz.questions.length; i<max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}
	//end of game main loop
	gameOver();

	function ask(question) {
		return prompt(quiz.question + question); //quiz [i] [0] is th ith question
	}

	function check(answer) {
		if(answer === quiz.questions[i].answer) {
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




