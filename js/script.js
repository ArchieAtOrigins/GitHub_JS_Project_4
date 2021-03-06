var quiz = {
	"name": "Super Hero Name Quiz",
	"description": "How many super heroes can you name?",
	"question": "What is the real name of ",
	"questions": [
		{"question": "Superman", "answer": "Clarke Kent"},
		{"question": "Batman", "answer": "Bruce Wayne"},
		{"question": "Wonder Woman", "answer": "Dianna Prince"}
		]
}

// dom references
var $question = document.getElementById('question');
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');

// view functions

function update(element, content, klass) {
	var p = element.firstChild || document.createElement('p');
	p.textContent = content;
	element.appendChild(p);
	if(klass) {
		p.className = klass;
	}
}

play(quiz);

// function definitions

function play(quiz) {
	var score = 0;
	update($score,score);

	// main game loop
	for(var i=0, question, answer, max=quiz.questions.length; i<max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}
	// end of game main loop
	gameOver();

	// nested functions

	function ask(question) {
		update($question,quiz.question + question);
		return prompt("Enter your answer:");
	}

	function check(answer) {
		if(answer === quiz.questions[i].answer) {
			update($feedback,"Correct!","right");
			// increase score by 1
			score++;
			update($score, score);
		} else {
			update($feedback,"Sorry, that is incorrect", "wrong");
		}
	}

	function gameOver(){
		// inform the player that the game has finished and tell them their score
		update($question, "Game Over, you scored " + score + " points" );
	}
}




