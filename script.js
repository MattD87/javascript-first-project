//create array of questions
//declare variables for score and current question starting at 0 to be incremented as quiz progresses
//document ready
//create event listener to start quiz when user clicks begin and show first/next question
//create event listener to record selected answer and show next question. Ensure an answer is selected (if/else)
//create function to check input submitted and compare answer to  keep track of current score 
//create function to show results when all questions have been answered.
//create function to restart the quiz




let score = 0;
let currentQuestion = 0;

const questions = [
    {
        title: `Rube had what particular habit before games?`,
        answers: [`He ate a whole chicken with all the fixings`, `He entered through the grandstands and took fans beer and food before hopping onto the field`, `He performed a juggling routine for the fans`, `He wrestled alligators`],
        correct: 1
    },
    {
        title: `How did the Rube celebrate getting 3 strikeouts in an inning?`,
        answers: [`He quietly walked off the field`, `He yelled and screamed at the other team`, `He did cartwheels and sommersaults off the field`, `He threw his glove at his first basemen`],
        correct: 2
    },
    {
        title: `What did the Rube routinely ask his teammates to do when he was pitching?`,
        answers: [`Leave the field so he was the only player on defence`, `Cheer him on and chant his name`, `remain dead silent`, `Face the opposite direction until he was ready to begin`],
        correct: 0
    },
    {
        title: `What did opposing fans commonly bring to distract the Rube?`,
        answers: [`Puppies`, `Shiny Objects`, `Beer`, `All of the above`],
        correct: 3
    },
    {
        title: `What event would cause Rube to run off the field every time regardless of when it occured?`,
        answers: [`Giving up a homerun`, `A firetruck passing by`, `Being offered a fishing trip`, `Being offered a beer`],
        correct: 1
    },
    {
        title: `How did the Rube learn to pitch as a kid?`,
        answers: [`Playing T-ball`, `Throwing 300 pitches a day.`, `Throwing rocks at birds`, `Videogames`],
        correct: 1
    },
    {
        title: `Rube was fined 50$ on his second day with his first professional team for heavy drinking. How did he respond?`,
        answers: [`Quitting the team and leaving to wrestle alligators`, `Buckling down and becoming more professional`, `Drinking more`, `Fighting the manager`],
        correct: 0
    },
    {
        title: `It is estimated that during his lifetime, Rube saved how many people's life in different ways?`,
        answers: [`1`, `5`, `8`, `13`],
        correct: 3
    },
    {
        title: `Rube was bitten by what animal during a year that saw him win 22 games, get married and divorced, accidentally shoot a friend in the hand, save a woman from drowning, and getting a part time job as a bartender?`,
        answers: [`A dog`, `A cat`, `A Lion`, `A bear`],
        correct: 2
    },
    {
        title: `Despite all of this, Rube put up better numbers during his time than what contemporary who is now the namesake for the best pitcher in baseball award?`,
        answers: [`Honus Wagner`, `Cy Young`, `Babe Ruth`, `Roger Clemens`],
        correct: 1
    }
]

$(document).ready(() => {
    $(`.start a`).click(function(e) {
        e.preventDefault();
        $(`.start`).hide();
        $(`.quiz`).show();
        showQuestion();
    })

    $(`.quiz ul`).on(`click`, `li`, function() {
        $(`.selected`).removeClass(`selected`);
        $(this).addClass(`selected`);
    });

    $(`.quiz a`).click(function(e) {
        e.preventDefault();
        if ($(`li.selected`).length) {
            let guess = parseInt($(`li.selected`).attr(`id`));
            //console.log(guess);
            checkAnswer(guess);

        } else {alert (`Please select an answer, you don't want to be called a Rube`)};
    });

    $(`.results a`).click(function(e) {
        e.preventDefault();
        restartQuiz();
        
    });
});

function showQuestion() {
    let question = questions[currentQuestion];
    $(`.quiz h2`).text(question.title);
    $(`.quiz ul`).html('');
    for (let i=0; i<question.answers.length; i++) {
        $(`.quiz ul`).append(`<li id = "${i}">${question.answers[i]}</li>`);
    }
}

function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if (question.correct === guess) {
        score++;
    } // add else statement to notify incorrect answer?
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showResults();
    } else {
    showQuestion();
    }
}

function showResults() {
    $(`.quiz`).hide();
    $(`.results`).show();
    if (score === 0) {
        alert (`Wow, you're quite the Rube. You didn't get any correct answers! The Rube would be proud.`)
    } 
    $(`.results p`).text (`Congratulations, you're not a Rube! You scored ${score} out ${questions.length}!`);      
}

function restartQuiz() {
    $(`.results`).hide();
    $(`.quiz`).show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}