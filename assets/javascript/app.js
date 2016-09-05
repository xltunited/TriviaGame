$(document).ready(function(){

	//game object, it hold the difficulty, category and number of questions chosen by the user

	var game = {

		difficulty : '',

		category : '',

		numberOfQuestions: 0,

		//Time to answer a question in seconds

		timer: 15,

		//Used to know when the trivia game is over

		questionsLeft: 0,

		//holds the questionsinterval

		gameStart:'',

		//questionsArray will contain the appropiate questions for the game

		questionsArray:[]

	};

	//Constuctor for the question object, it containes the questions category, difficulty, the actual questions, 4 answers, and the right answer

	function quizQuestion(category, questionNumber, difficulty, question, answer1, answer2, answer3, answer4, right) {

		this.category = category;

		this.questionNumber = questionNumber;

		this.difficulty = difficulty;

		this.question = question;

		this.answer1 = answer1;

		this.answer2 = answer2;

		this.answer3 = answer3;

		this.answer4 = answer4;

		this.right = right;

	};

	//Question construction

	var q1 = new quizQuestion('geography', 1, 'easy', 'In which ocean did the Titanic sink?', 'Artic Ocean', 'North Pacific Ocean', 'North Atlantic Ocean', 'Indian Ocean', 'North Atlantic Ocean');

	var q2 = new quizQuestion('geography', 2, 'easy', 'Which one of the following is the capital of South Korea?', 'Pyongyang', 'Busan', 'Incheon', 'Seoul', 'Seoul');

	var q3 = new quizQuestion('geography', 3, 'easy', 'From what country did the Italian explorer Christopher Columbus depart from?', 'Portugal', 'Italy', 'Spain', 'France');

	var q4 = new quizQuestion('geography', 4, 'easy', "After what Greek god did Saturn receive it's name?", 'Apollo', 'Chronus', 'Hephaestus', 'Poseidon', 'Cronus');

	var q5 = new quizQuestion('geography', 5, 'easy', 'Approximately, how many people passed away during the bulbonic plate?', '2 Million', '100 Thousand', '10 Million', '25 Million', '25 Million');

	//Array that holds all the questions

	var allQuestions = [q1, q2, q3, q4, q5];

	//The function isGameSelectionComplete checks whether the game object properties have been entered and displays the button to begin the game

	function isGameSelectionComplete(){

		if(game.difficulty != '' && game.category != '' && game.numberOfQuestions != 0){

			$('.begin').css('display', 'block');

		}
		
	}

	//The function backgroundCHanger takes the file name as a parameter and changes it with a transition

	function backgroundChanger(imageLink){

		$('.full').css('background', 'url(assets/images/' + imageLink + ') no-repeat center center fixed');

		$('.full').css('-webkit-background-size', 'cover');

		$('.full').css('-moz-background-size', 'cover');

		$('.full').css('-o-background-size', 'cover');

		$('.full').css('background-size', 'cover');

		$('.full').css(' transition', 'background .5s linear');

	}

	//Assigns the currently clicked button for the difficulty and adds a check mark to the end of the text inside the div. This happens for the game.difficulty,
	// game.category and game.numberOfQuestions

	$('.difficultySelector').on('click', function(){

		if(game.difficulty == ''){

			$(this).append($('<i class="fa fa-check difficultyCheck" aria-hidden="true"></i>'));

		}

		else {

			$('.difficultyCheck').remove();

			$(this).append($('<i class="fa fa-check difficultyCheck" aria-hidden="true"></i>'));

		}

		game.difficulty = $(this).attr('data-difficultySelector');

		isGameSelectionComplete();

	});

	$('.categorySelector').on('click', function(){

		if(game.category == ''){

			$(this).append($('<i class="fa fa-check categoryCheck" aria-hidden="true"></i>'));

		}

		else {

			$('.categoryCheck').remove();

			$(this).append($('<i class="fa fa-check categoryCheck" aria-hidden="true"></i>'));

		}

		game.category = $(this).attr('data-categorySelector');

		isGameSelectionComplete();

	});

	$('.questionsSelector').on('click', function(){

		if(game.numberOfQuestions == ''){

			$(this).append($('<i class="fa fa-check questionCheck" aria-hidden="true"></i>'));

		}

		else {

			$('.questionCheck').remove();

			$(this).append($('<i class="fa fa-check questionCheck" aria-hidden="true"></i>'));

		}

		game.numberOfQuestions = $(this).attr('data-questionsSelector');

		isGameSelectionComplete();

	});

	function populateQuestion(){

		if(game.questionsLeft == game.numberOfQuestions){

			alert('You finished');

		}

		$('.questionNumberHolder').html('<p> Question # ' + game.questionsArray[game.numberOfQuestions].questionNumber + '</p>');

		$('.questionHolder').html(game.questionsArray[game.numberOfQuestions].question);

		//Copies the questions to the html DOM

		$('.answer1Holder').html('<p> A. ' + game.questionsArray[game.numberOfQuestions].answer1 + '</p>');

		$('.answer2Holder').html('<p> B. ' + game.questionsArray[game.numberOfQuestions].answer2 + '</p>');

		$('.answer3Holder').html('<p> C. ' + game.questionsArray[game.numberOfQuestions].answer3 + '</p>');

		$('.answer4Holder').html('<p> D. ' + game.questionsArray[game.numberOfQuestions].answer4 + '</p>');

		//Add a data attribute with the possible answers themselves

		$('.answer1Holder').attr('data-answer', game.questionsArray[game.numberOfQuestions].answer1);

		$('.answer2Holder').attr('data-answer', game.questionsArray[game.numberOfQuestions].answer2);

		$('.answer3Holder').attr('data-answer', game.questionsArray[game.numberOfQuestions].answer3);

		$('.answer4Holder').attr('data-answer', game.questionsArray[game.numberOfQuestions].answer4);

		//They all hold the right answer

		$('.answer1Holder').attr('data-rightAnswer', game.questionsArray[game.numberOfQuestions].right);

		$('.answer2Holder').attr('data-rightAnswer', game.questionsArray[game.numberOfQuestions].right);

		$('.answer3Holder').attr('data-rightAnswer', game.questionsArray[game.numberOfQuestions].right);

		$('.answer4Holder').attr('data-rightAnswer', game.questionsArray[game.numberOfQuestions].right);

		game.numberOfQuestions++;

		game.gameStart = setInterval(populateQuestion, 15000);
	}

	//The button with the class ' .begin' is initially hidden, after the game mode is set, it's display changes to ' block'. 
	//When pressed it hides the container-fluid containing the initial game screen and fills the game.questionsArray with the
	//appropiate questions

	$('.begin').on('click', function(){

		$('.gameSelectionScreen').css('display', 'none');

		//Makes the questionScreenVisible

		$('.questionScreen').css('display', 'block');

		//New background, this one is for when the user is answering questions

		backgroundChanger('questions.jpg')

		//Populates game.questionsArray with the according questions based on the user specifications

		for(var i = 0; i < allQuestions.length; i++){

			if(allQuestions[i].difficulty == game.difficulty && allQuestions[i].category == game.category && game.numberOfQuestions > 0){

				game.questionsArray.push(allQuestions[i]);

				game.numberOfQuestions--;

			}

			//Because numberOfQuestions is decreased everytime the questionsArray is populated, when numberOfQuestions reaches 0 it will have selected all the
			//pertaining questions 

			if(game.numberOfQuestions == 0){

				break;

			}

		}

		game.questionsLeft = game.questionsArray.length;

		populateQuestion();

	});

	$('.answer').on('click', function(){

		if($(this).attr('data-answer') == $(this).attr('data-rightAnswer')){

			alert( 'correct');

		}

	});







});