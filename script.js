// GLOBAL VARIABLES - variables used by multiple functions
// define variable for score
var score;

// define variable for time alotted
var time;

// define variable for user entry for quiz paramaters
var userNum;

// define variable for quiz type - single or mixed multiplying
var quizType;

// define variable for interval timer
var quizTime;

// define variable to pause timer during question feedback
var pause;

// define variable for equation
var equation;

// define variable for correct answer
var answer;

// define variable for user answer
var userAnswer;

// when DOM is loaded
$(function() {
	// start quiz when user clicks "Go"
	$(".start").on("click", function(event) {
		event.preventDefault();
		if (this.id === "mixed") {
			userNum = parseInt($("#maxNumber").val());
			if (userNum <= 12 && userNum >= 3) {
				quizType = "mix";
				startQuiz();
			} else {
				alert("Please enter a number between 3 and 12");
			}
		}
		if (this.id === "single") {
			userNum = parseInt($("#singleNumber").val());
			if (userNum <= 12 && userNum >= 3) {
				quizType = "single";
				startQuiz();
			} else {
				alert("Please enter a number between 3 and 12");
			}
		}
	});
});

// function to start quiz - time and score are set here so Try Again button will reset them
function startQuiz() {
	score = 0;
	time = 60;
	pause = false;
	// show timer
	$("#content").html(
		"<p class='text-center text-primary' id='timer'>Time: </p>"
	);
	$("#timer").append("<span id='countdown'>" + time + "</span>");
	// start timer
	quizTime = setInterval(function() {
		if (!pause) {
			time--;
			$("#countdown").html("<span>" + time + "</span>");
			if (time <= 0) {
				clearInterval(quizTime);
				// end quiz if time is up
				endQuiz();
			}
		} else {
			console.log("paused");
		}
	}, 1000);
	$("#content").prepend("<div id='questions'></div>");
	// go to quiz
	takeQuiz(0);
}

// function to cycle through quiz questions
function takeQuiz() {
	// timer is active while user is trying to answer questions
	pause = false;
	// prevent new question if out of time
	if (time > 0) {
		askQuestion();
	}
}

// function to provide question and user input box
function askQuestion() {
	// create question based on quiz parameters
	if (quizType === "mix") {
		var multiplier = userNum + 1;
		var a = Math.floor(Math.random() * multiplier);
		var b = Math.floor(Math.random() * multiplier);
	}
	if (quizType === "single") {
		var random = Math.round(Math.random());
		if (random === 0) {
			var a = userNum;
			var b = Math.floor(Math.random() * 13);
		}
		if (random === 1) {
			var a = Math.floor(Math.random() * 13);
			var b = userNum;
		}
	}
	equation = a + " x " + b + " =";
	answer = a * b;

	// show question on page
	var answerBox =
		'<input type="text" autocomplete="off" class="d-inline-flex number-box" id="userAnswer">';
	$("#questions").html(
		'<div class="card p-5 my-3" id="questionCard"><h2>' +
			equation +
			answerBox +
			"</h2></div>"
	);
	$("#userAnswer").focus();
}

// event listener to get user answer
$(document).on("keypress", "input", function(e) {
	if (e.which == 13) {
		userAnswer = parseInt($(this).val());
		$(this).trigger("blur");
		checkAnswer(equation, answer);
		// go to next question after pause to view feedback
		setTimeout(takeQuiz, 2000);
	}
});

// function to check answer and update score
function checkAnswer() {
	// timer is paused while answer is checked and feedback is given
	pause = true;
	// if correct
	if (answer === userAnswer) {
		var isCorrect =
			'<img src="Assets/kisspng-line-triangle-point-area-green-tick-png-picture-5a756f7983e689.6751696415176456895403.png" alt="correct" height="80">';
		$("#questionCard").append('<div class="overlay">' + isCorrect + "</div>");
		// update score
		score++;
	}
	// if incorrect
	else {
		var isCorrect =
			'<img src="Assets/kissclipart-png-clipart-x-mark-clip-art-e014378f9cf54e59.png" alt="wrong" height="80">';
		$("#questionCard").append('<div class="overlay">' + isCorrect + "</div>");
		setTimeout(function() {
			$("#questionCard").append(
				'<div class="card overlay2"><h3>' +
					equation +
					' <span class="pop">' +
					answer +
					"</span></h3>"
			);
		}, 500);
	}
}

// at end of quiz
function endQuiz() {
	$("#content").html("<h2 class='text-center'>Time is Up!</h2>");
	$("#timer").html("");
	setTimeout(function() {
		// show score
		$("#content").html(
			'<p>Your score is: <span class="pop">' + score + "</span><p>"
		);
		// encouragement based on score
		var star =
			'<img src="Assets/PikPng.com_gold-stars-png_301248.png" alt="gold star" class="star" height="100">';
		$("#content").append('<div id="stars"></div>');
		if (score >= 20) {
			for (i = 0; i < 4; i++) {
				$("#stars").append(star);
			}
			$("#content").append(
				"<h4>Your are a Muliplying Master!!!!</h4><p>Is it time to try some harder problems?</p>"
			);
		} else if (score >= 15) {
			for (i = 0; i < 3; i++) {
				$("#stars").append(star);
			}
			$("#content").append(
				"<h4>Fantastic!!</h4><p>You are almost a master.</p>"
			);
		} else if (score >= 10) {
			for (i = 0; i < 2; i++) {
				$("#stars").append(star);
			}
			$("#content").append(
				"<h4>Great Work!</h4><p>Improvements happen with practice.</p>"
			);
		} else if (score >= 5) {
			$("#stars").append(star);
			$("#content").append("<h4>Good Effort!</h4><p>Keep practicing.</p>");
		} else {
			$("#content").append(
				"<h4>Keep Practicing!</h4><p>Remember that everything gets easier the more times you do it.</p>"
			);
		}
		// try again and new quiz buttons
		var againBtn =
			'<input type="button" class="btn btn-lg btn-block w-25" id="again" value="Try Again!">';
		var newBtn =
			'<input type="button" class="btn btn-lg btn-block w-25" id="new" value="New Quiz">';
		$("#content").append(againBtn);
		$("#content").append(newBtn);

		// if user clicks "Try Again" start the quiz again
		$("#again").on("click", startQuiz);

		// if user clicks "New Quiz" go back to home page
		$("#new").on("click", function() {
			location.reload();
		});
	}, 1000);
}
