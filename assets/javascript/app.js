$(document).ready(function(){

	var game = {

		difficulty : '',

		category : '',

		numberOfQuestions: 0

	}

	function quizQuestion(questionNumber, difficulty, category, question, answer1, answer2, answer3, answer4, right) {

		this.questionNumber = questionNumber;

		this.difficulty = difficulty;

		this.category = category;

		this.question = question;

		this.answer1 = answer1;

		this.answer2 = answer2;

		this.answer3 = answer3;

		this.answer4 = answer4;

		this.right = right;

	}

	var q1 = new quizQuestion(1, 'easy', 'In which ocean did the Titanic sink?', 'Artic Ocean', 'North Pacific Ocean', 'North Atlantic Ocean', 'Indian Ocean', 'North Atlantic Ocean');

	var q2 = new quizQuestion(2, 'easy', 'Which one of the following is the capital of South Korea?', 'Pyongyang', 'Busan', 'Incheon', 'Seoul', 'Seoul');

	var q3 = new quizQuestion(3, 'easy', 'From what country did the Italian explorer Christopher Columbus depart from?', 'Portugal', 'Italy', 'Spain', 'France');

	var q4 = new quizQuestion(4, 'easy', "After what Greek god did Saturn receive it's name?", 'Apollo', 'Chronus', 'Hephaestus', 'Poseidon', 'Cronus');

	var q5 = new quizQuestion(5, 'easy', 'Approximately, how many people passed away during the bulbonic plate?', '2 Million', '100 Thousand', '10 Million', '25 Million', '25 Million');

	var geography = [q1, q2, q3, q4, q5];

	$('.difficultySelector').on('click', function(){

		game.difficulty = $(this).attr('data-difficultySelector');

	})

	$('.categorySelector').on('click', function(){

		game.category = $(this).attr('data-categorySelector');

	})

	$('.questionsSelector').on('click', function(){

		game.numberOfQuestions = $(this).attr('data-questionsSelector');

		console.log(game.numberOfQuestions);

	})

})