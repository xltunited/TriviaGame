$(document).ready(function(){

	//game object, it hold the difficulty, category and number of questions chosen by the user

	var game = {

		difficulty : '',

		category : '',

		numberOfQuestions: 0,

		//Time to answer a question in seconds

		time: 15,

		//Holder to stop timer

		timer:'',

		//Used to know when the trivia game is over

		questionsLeft: 0,

		//holds the questionsinterval

		gameStart:'',

		//questionsArray will contain the appropiate questions for the game

		questionsArray:[],

		//Keep track of correct and incorrect

		correct:0,

		incorrect:0,

		correctAnswer:' ',

		userAnswers:[],

		toBeAdded:[],

		maxQuestions: 15



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

	var q3 = new quizQuestion('geography', 3, 'easy', "Which continent occupies about 30% of the Earth's total land area?" , 'South America', 'Asia', 'Europe', 'Australia', 'Asia');

	var q4 = new quizQuestion('geography', 4, 'easy', "Which imaginary line separates the north Pacific from the south pacific?", 'The Artic Circle', 'Meridial', 'Equator', 'Tropic', 'Equator');

	var q5 = new quizQuestion('geography', 5, 'easy', 'In 1997 this British crown colony became a special administrative region of China', 'Beijing', 'Shanghai', 'Macau', 'Hong Kong', 'Hong Kong');

	var q6 = new quizQuestion('geography', 6, 'easy', "Whats is the largest country in the world that has a red, white & blue flag?", 'Paraguay', 'Russia', 'Croatia', 'Norway', 'Russia');

	var q7 = new quizQuestion('geography', 7, 'easy', 'Name of the island shared by England, Wales & Scotland', 'Great Britain', 'Isles of Scilly', 'Isle of Wight', 'Throny Island', 'Great Britain');

	var q8 = new quizQuestion('geography', 8, 'easy', "It's the only papal state left in the world", 'Verona', 'Rome', 'Vatican City', 'Venice', 'Vatican City');

	var q9 = new quizQuestion('geography', 9, 'easy', "Besides North America, it's the only continent completely north of the equator", 'Antartica', 'Europe', 'Asia', 'Russia', 'Europe');

	var q10 = new quizQuestion('geography', 10, 'easy', 'Clocks Peru read the same as in this U.S. time zone', 'Eastern', 'Western', 'Central', 'South Western', 'Eastern');

	var q11 = new quizQuestion('geography', 11, 'easy', 'What is the largest country (in land) in South America?', 'Argentina', 'Colombia', 'Brazil', 'Chile', 'Brazil');

	var q12 = new quizQuestion('geography', 12, 'easy', 'What is the longest river on Earth that flows into the Mediterranean Sea?', 'Amazon', 'Yangtze River', 'Parana River', 'The Nile', 'The Nile');

	var q13 = new quizQuestion('geography', 13, 'easy', 'City that stands on the ruins of Tenochtitlan, the capital of the Aztec people', 'Mexico City', 'Pueblas', 'Oaxaca', 'Veracruz', 'Mexico City');

	var q14 = new quizQuestion('geography', 14, 'easy', 'What is the capital of France', 'Marseille', 'Orléans', 'Paris', 'Lyon', 'Paris');

	var q15 = new quizQuestion('geography', 15, 'easy', "If you live on the equator, you'll note you usually have this many hours of daylight a day", '12 Hours', '2 Hours', '8 Hours', '20 Minutes', '12 Hours');

	//Array that holds all the questions

	var allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

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

	function scoreGiver(){

		var score  = Math.floor(100*(game.correct/(game.correct+game.incorrect)));

		if(score >= 90){

			backgroundChanger('A.jpg');

			return;

		}

		 if(score >= 80 && score < 90){

			backgroundChanger('B.jpg');

			return;

		}

		 if(score >= 70 && score < 80){

			backgroundChanger('C.jpg');

			return;
			
		}

		 if(score >= 60 && score < 70){

			backgroundChanger('D.jpg');

			return;
			
		}

		 if( score < 60){

			backgroundChanger('F.jpg');

			return;
			
		}

	}

	function gameInfoPopulation(){

		

		for(var i = 0; i < (game.incorrect+game.correct); i++){

			$('.tableBody').append($('<tr class="tableRemove tableRow'+ i + '"></tr>'));

			$('.tableRow'+ i).append('<td class="tableRemove">' + game.questionsArray[i].questionNumber + '</td>');

			$('.tableRow'+ i).append('<td class="tableRemove">' + game.questionsArray[i].question + '</td>');

			$('.tableRow'+ i).append('<td class="tableRemove">' + game.questionsArray[i].right + '</td>');

			$('.tableRow'+ i).append('<td class="tableRemove">' + game.userAnswers[i] + '</td>');

			if(game.userAnswers[i] == game.questionsArray[i].right){

				$('.tableRow'+ i).append('<td class="tableRemove"><i class="fa fa-check-circle" aria-hidden="true"></i></td>');

			}

			else {

				$('.tableRow'+ i).append('<td class="tableRemove"><i class="fa fa-times-circle" aria-hidden="true"></i></td>');

			}

		}

		$('.gameInfoCol').append('<p class="tableRemove">Number Of Correct Answers : ' + game.correct + '<br>' + 'Number Of Incorrect Answers : ' + game.incorrect +'</p>');

	}

	function populateQuestion(){

		if(game.time == -1){

			game.time = 15;

			htmlTimer();

		}

		if($('.modal').css('display') == 'block'){

			$('.modal').css('display', 'none');

			clearInterval(game.gameStart);

			htmlTimer();
		}

		if(game.questionsLeft == game.numberOfQuestions){

			clearInterval(game.gameStart);

			clearInterval(game.timer);

			$('.questionScreen').css('display', 'none');

			$('.finishScreen').css('display', 'block');

			gameInfoPopulation();

			scoreGiver();

			

			return;

		}

		game.correctAnswer = game.questionsArray[game.numberOfQuestions].right;

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

	}

	function htmlTimer(){

		if(game.time == -1){

			game.time = 15;

			game.userAnswers.push('No Answer');

			clearInterval(game.timer);

			game.incorrect++;

			$('.modal').css('display', 'block');

			$('.modalAnswer').html('You ran out of time! The correct answer was ' + game.correctAnswer + '. `-`');

			game.gameStart = setInterval(populateQuestion, 4000);

			return;

		}

		$('.timeRemainingHolder').html('<p> Time Remaining: ' + game.time + '</p>')

		if(game.timer != ''){

			clearInterval(game.timer);

		}

		game.time--;

		game.timer = setInterval(htmlTimer,1000);
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

			if(allQuestions[i].difficulty == game.difficulty && allQuestions[i].category == game.category && game.maxQuestions > 0){

				game.toBeAdded.push(allQuestions[i]);

				game.maxQuestions--;

			}

			//Because numberOfQuestions is decreased everytime the questionsArray is populated, when numberOfQuestions reaches 0 it will have selected all the
			//pertaining questions 

			if(game.maxQuestions == 0){

				break;

			}

		}

		for(var j = 0; j < game.numberOfQuestions; j++){

			var random = Math.floor(Math.random()*game.toBeAdded.length);

			game.toBeAdded[random].questionNumber = j + 1;

			game.questionsArray.push(game.toBeAdded[random]);

			game.toBeAdded.splice(random, 1);

		}

		game.numberOfQuestions = 0;

		game.questionsLeft = game.questionsArray.length;

		populateQuestion();

		htmlTimer();

	});

	$('.answer').on('click', function(){

		clearInterval(game.timer);

		game.time = 15;

		game.userAnswers.push($(this).attr('data-answer'));

		if($(this).attr('data-answer') == $(this).attr('data-rightAnswer')){

			game.correct++;

			$('.modal').css('display', 'block');

			$('.modalAnswer').html('Congratulations! The correct answer is ' + $(this).attr('data-rightAnswer') + '. =]');

			game.gameStart = setInterval(populateQuestion, 4000);

		} 

		else {

			game.incorrect++;

			$('.modal').css('display', 'block');

			$('.modalAnswer').html('Opps! The correct answer was ' + $(this).attr('data-rightAnswer') + '. :(');

			game.gameStart = setInterval(populateQuestion, 4000);

		}

	});

	$('.playAgain').on('click', function(){

		$('.finishScreen').css('display', 'none');

		$('.gameSelectionScreen').css('display', 'block');

		backgroundChanger('gameshow.jpg');

		$('.begin').css('display', 'none');

		game.difficulty  = '';

		game.category  = '';

		game.numberOfQuestions = 0;

		game.time = 15;

		game.timer ='';

		game.questionsLeft = 0;

		game.gameStart ='';

		game.questionsArray = [];

		game.correct = 0;

		game.incorrect = 0;

		game.correctAnswer =' ';

		game.userAnswers = [];

		game.toBeAdded = [];

		game.maxQuestions =  15;

		$('.difficultyCheck').remove();

		$('.categoryCheck').remove();

		$('.questionCheck').remove();

		$('.tableRemove').remove();


	});

});