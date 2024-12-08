let coins = 0; // Starting coins
let diamonds = 0; // Starting diamonds
let currentQuestionIndex = 0; // Tracks the current question index
let score = 0; // Tracks the quiz score
let diamondsEarned = 0; // Track the number of diamonds earned

// Define the questions array
const questions = [
    { question: "What has to be broken before you can use it?", answer: "An egg", options: ["A glass", "An egg", "A shell"] },
    { question: "What has to be wound before it can be used?", answer: "A watch", options: ["A key", "A watch", "A spring"] },
    {
        question: "What has a neck without a head, a body without legs, and can be found in the sea?",
        answer: "A bottle",
        options: ["A bottle", "A shell", "A vase"]
    },
    {
        question: "What has one head, one foot, and four legs?",
        answer: "A bed",
        options: ["A bed", "A table", "A chair"]
    },
    {
      question: "What has cities, but no houses; mountains, but no trees; and water, but no fish?",
      answer: "A map",
      options: ["A globe", "A map", "An atlas"]
    },
    {
      question: "I am full of keys but cannot open a single door. What am I?",
      answer: "A piano",
      options: ["A keyboard", "A lock", "A piano"]
    },
    {
      question: "I am full of stories but have no voice. What am I?",
      answer: "A book",
      options: ["A radio", "A book", "A movie"]
    },
    {
      question: "I am always growing but never eat. I have pages but no words. What am I?",
      answer: "A calendar",
      options: ["A tree", "A diary", "A calendar"]
    },
    {
        question: "What has a neck without a head, a body without legs, and can be found in a bottle?",
        answer: "A cork",
        options: ["A cork", "A lid", "A cap"]
      },
      {
        question: "What has to be filled before you can empty it?",
        answer: "A shoe",
        options: ["A cup", "A shoe", "A bag"]
      },
      {
        question: "What has to be passed first before you can pass yourself?",
        answer: "An exam",
        options: ["A race", "A road", "An exam"]
      },
      {
        question: "You can hold it without ever touching it. What is it?",
        answer: "Breath",
        options: ["A shadow", "A thought", "Breath"]
      },
      {
        question: "What gets bigger the more you take from it?",
        answer: "A hole",
        options: ["A pit", "A hole", "A void"]
      },
      {
        question: "What has to be wet before it can be dry?",
        answer: "Paint",
        options: ["Paint", "A towel", "A sponge"]
      },
      {
        question: "I am always coming, but never arrive. What am I?",
        answer: "Tomorrow",
        options: ["Time", "Tomorrow", "A shadow"]
      },
      {
        question: "What is full of holes but can still hold water?",
        answer: "A sponge",
        options: ["A net","A sponge", "A colander"]
      },
      {
        question: "What has a neck without a head, a body without legs, and is used to write?",
        answer: "A pen",
        options: ["A pen", "A pencil", "A marker"] },
        { question: "What falls but never breaks, and what breaks but never falls?", answer: "Night falls, Day breaks", options: ["Glass breaks, Ice falls","Night falls, Day breaks", "Rain falls, Ice melts"] },
     { question: "You throw a red ball into the blue sea. What color does the ball turn?", answer: "The ball stays red", options: ["The ball turns blue", "The ball disappears","The ball stays red"] },
     { question: "What has to be wet before you can use it?", answer: "A teabag", options: ["A teabag", "A sponge", "A towel"] },
     { question: "What has one voice but cannot speak?", answer: "An echo", options: ["A shadow", "A ghost", "An echo"] },
     { question: "What gets sharper the more you use it?", answer: "Your brain", options: ["A pencil", "Your brain", "A knife"] },
     { question: "What has a bank but no money, a bed but no sleep, and a mouth but cannot speak?", answer: "A riverbank", options: ["A riverbank", "A hill", "A treasure chest"] },
     { question: "What word is spelled incorrectly in every dictionary?", answer: "The word ‘incorrectly’", options: ["The word ‘dictionary’", "The word ‘incorrectly’", "The word ‘wrongly’"] },
     { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter ‘M’", options: ["The letter ‘M’","A blink", "A shadow"] },
     { question: "What has a beginning, a middle, and an end, but no voice to tell its story?", answer: "A song", options: ["A book", "A song", "A road"] },
     { question: "What can be cracked, made, told, and played?", answer: "A joke", options: ["A riddle","A joke", "A code"] },
     { question: "What belongs to you, but other people use it more than you do?", answer: "Your name", options: ["Your phone", "Your name", "Your house"] },
     { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field", options: ["Because he was funny",  "Because he was outstanding in his field", "Because he was unique"] },
     { question: "What do you call a fish with no eyes?", answer: "Fsh!", options: ["No-eye fish", "Blind fish", "Fsh!" ] },
     { question: "Why did the bicycle fall over?", answer: "It was two-tired", options: ["It was two-tired", "It lost balance", "It had a flat tire"] },
     { question: "What do you call a belt made of watches?", answer: "A waist of time!", options: ["A ticking belt", "A waist of time!", "A clock strap"] },
     { question: "When a cow laughs, what does it produce?", answer: "Milkshakes", options: ["Milkshakes", "Laughing gas", "Yogurt"] },
     { question: "Why did the golfer wear two pairs of pants?", answer: "In case he got a hole-in-one", options: ["For extra comfort", "In case he got a hole-in-one", "To match his shoes"] },
     { question: "What do you call a bear with no teeth?", answer: "A gummy bear!", options: ["A gummy bear!", "A toothless bear", "A cuddly bear"] },
     { question: "What do you call a funny mountain?", answer: "Hillairous!", options: ["A jokey hill", "A comedic cliff", "Hillairous!",] },
     { question: "I wear a mask but have no face. I fight crime but carry no weapon. Who am I?", answer: "Batman", options: ["Batman", "Spiderman", "The Lone Ranger"] },
     { question: "I have a heart of gold and a straw brain. What am I?", answer: "The Wizard of Oz – Scarecrow", options: ["A haystack", "A stuffed doll","The Wizard of Oz – Scarecrow",] },
     { question: "I am full of jokes but never laugh. I have a cast of characters but never act. What am I?", answer: "A sitcom", options: ["A sitcom", "A comic book", "A theater"] },
     { question: "I am a tiny green creature with a love for mischief and bananas. Who am I?", answer: "Grogu from “The Mandalorian”", options: ["A minion", "Baby Yoda", "Grogu from “The Mandalorian”",] },
     { question: "What has a golden snitch but no Quidditch pitch?", answer: "The Hunger Games trilogy – Mockingjay pin", options: ["The Hunger Games trilogy – Mockingjay pin", "Harry Potter", "Fantastic Beasts"] },
     { question: "I’m a set of building blocks that can create anything you imagine. Who am I?", answer: "Lego", options: ["Minecraft","Lego", "Tinker Toys"] },
     { question: "What detective always says “Elementary, my dear Watson”?", answer: "Sherlock Holmes", options: [ "Sherlock Holmes", "Hercule Poirot", "Nancy Drew"] },
     { question: "What game forces you to catch ’em all?", answer: "Pokemon", options: [ "Pokemon", "Digimon", "Yu-Gi-Oh!"] },
     { question: "I’m a time-traveling alien with a loyal blue companion. What am I?", answer: "The Doctor from Doctor Who", options: [ "The Doctor from Doctor Who", "Rick from Rick and Morty", "The TARDIS"] },
     { question: "I’m a fictional world with seven kingdoms vying for the Iron Throne. What am I?", answer: "Westeros from Game of Thrones", options: ["Westeros from Game of Thrones", "Middle-earth", "Narnia"] },
     { question: "I’m a blue cat with a robotic arm and a magic pocket. What am I?", answer: "Doraemon", options: ["Felix the Cat", "Garfield","Doraemon",] },
     { question: "I’m a phrase associated with a pointy-eared alien species known for their logical minds. What am I?", answer: "Live Long and Prosper – Star Trek", options: ["Live Long and Prosper – Star Trek", "May the Force be with You", "Engage!"] },
     { question: "I’m a magical school hidden within a castle. What am I?", answer: "Hogwarts from Harry Potter", options: ["Camelot","Hogwarts from Harry Potter", "Avalon"] },
     { question: "I’m a phrase spoken before a wish is made on seven magical balls. What am I?", answer: "I wish, with all my heart – Dragon Ball Z", options: ["By the power of Grayskull!", "Kamehameha!","I wish, with all my heart – Dragon Ball Z",] },
     
        { 
          question: "What comes down but never goes up?", 
          answer: "Rain", 
          options: ["Rain", "A ball", "A rocket"] 
        },
        { 
          question: "What has a face but can't smile?", 
          answer: "A clock", 
          options: ["A clock", "A mirror", "A photo"] 
        },
        { 
          question: "What has hands but can't clap?", 
          answer: "A clock", 
          options: ["A robot", "A doll", "A clock"] 
        },
        { 
          question: "What is as light as a feather but the strongest man can't hold it for much longer?", 
          answer: "Breath", 
          options: ["A balloon","Breath", "A bubble"] 
        },
        { 
          question: "What is always in front of you but can't be seen?", 
          answer: "The future", 
          options: ["The future", "A shadow", "The air"] 
        },
        { 
          question: "What is full of holes but still holds a lot of weight?", 
          answer: "A net", 
          options: ["A sponge", "A net", "A bag"] 
        },
        { 
          question: "What has no legs but can run?", 
          answer: "A river", 
          options: ["A river", "A car", "A person"] 
        },
        { 
          question: "What can travel around the world while staying in the corner?", 
          answer: "A stamp", 
          options: ["A stamp", "A plane", "A satellite"] 
        },
        { 
          question: "What has a heart that doesn't beat?", 
          answer: "An artichoke", 
          options: ["A heart-shaped stone", "An artichoke", "A doll"] 
        },
        { 
          question: "What can be cracked, made, told, and played?", 
          answer: "A joke", 
          options: ["A riddle", "A joke", "A game"] 
        },
        { 
          question: "What is easy to get into, but hard to get out of?", 
          answer: "Trouble", 
          options: ["Trouble", "A car", "A trap"] 
        },
        { 
          question: "What can be seen once in a minute, twice in a moment, but never in a thousand years?", 
          answer: "The letter 'M'", 
          options: ["A blink","The letter 'M'", "A second"] 
        },
        { 
          question: "What has a head, a tail, but no body?", 
          answer: "A coin", 
          options: ["A snake", "A coin", "A worm"] 
        },
        { 
          question: "What is always on the move but never gets tired?", 
          answer: "Time", 
          options: ["Water", "Time", "Wind"] 
        },
        { 
          question: "What has a bark but no bite?", 
          answer: "A tree", 
          options: ["A dog", "A tree", "A chair"] 
        },
        { 
          question: "What has one eye but can't see?", 
          answer: "A needle", 
          options: ["A needle", "A coin", "A fish"] 
        },
        { 
          question: "What has a thumb and four fingers but is not alive?", 
          answer: "A glove", 
          options: ["A hand", "A glove", "A sock"] 
        },
        { 
          question: "What has a ring but no finger?", 
          answer: "A telephone", 
          options: ["A key", "A telephone", "A necklace"] 
        },
        { 
          question: "What comes once in a year, twice in a week, but never in a day?", 
          answer: "The letter 'E'", 
          options: ["The letter 'E'", "A holiday", "A season"] 
        },
        
        { 
          question: "What has a spine but can't stand up?", 
          answer: "A book", 
          options: ["A book", "A chair", "A human"] 
        },
        { 
          question: "What gets wetter the more it dries?", 
          answer: "A towel", 
          options: ["A sponge", "A mop","A towel"] 
        },
        { 
          question: "What can be broken but never held?", 
          answer: "A promise", 
          options: ["A promise", "A glass", "A piece of paper"] 
        },
        { 
          question: "What is black and white and read all over?", 
          answer: "A newspaper", 
          options: ["A book", "A zebra", "A newspaper"] 
        },
        { 
          question: "What can you catch but not throw?", 
          answer: "A cold", 
          options: ["A cold", "A ball", "A fish"] 
        },
       
        { 
          question: "What has feet but can't walk?", 
          answer: "A ruler", 
          options: ["A chair", "A ruler", "A bed"] 
        },
        { 
          question: "What is a room with no walls or doors?", 
          answer: "A mushroom", 
          options: ["A mushroom", "A kitchen", "A garden"] 
        },
        { 
          question: "What has a face but cannot speak?", 
          answer: "A clock", 
          options: ["A clock", "A mirror", "A photo"] 
        },
        { 
          question: "What is at the end of a rainbow?", 
          answer: "A letter 'W'", 
          options: ["A pot of gold", "A rainbow", "A letter 'W'"] 
        },
        { 
          question: "What has a bottom at the top?", 
          answer: "A leg", 
          options: ["A cup", "A leg", "A mountain"] 
        },
        { 
          question: "What has an eye but cannot see?", 
          answer: "A needle", 
          options: ["A camera", "A needle", "A coin"] 
        },
        { 
          question: "What flies without wings?", 
          answer: "Time", 
          options: ["Time", "A bird", "A plane"] 
        },
        { 
          question: "What is made of water but if you put it in water, it will die?", 
          answer: "An ice cube", 
          options: ["A sponge", "An ice cube", "A fish"] 
        },
        { 
          question: "What is never ahead of you but always behind you?", 
          answer: "Your shadow", 
          options: ["Your shadow", "Your reflection", "Your past"] 
        },
        { 
          question: "What gets sharper the more you use it?", 
          answer: "Your mind", 
          options: ["A pencil", "Your mind", "A knife"] 
        },
        { 
          question: "What is invisible but makes things visible?", 
          answer: "Light", 
          options: ["Wind", "Light", "A shadow"] 
        },
        
            { 
              question: "What has a head, a tail, but no body?", 
              answer: "A coin", 
              options: ["A snake", "A coin", "A worm"] 
            },
            { 
              question: "What can you hear but not touch or see?", 
              answer: "Sound", 
              options: ["Wind", "Sound", "Light"] 
            },
            { 
              question: "What can fill a room but takes up no space?", 
              answer: "Light", 
              options: ["Air", "Light", "Sound"] 
            },
            { 
                question: "The more you take, the more you leave behind. What am I?", 
                answer: "Footsteps", 
                options: ["Time", "Footsteps", "Memories"] 
              },
              { 
                question: "What has many teeth but can't bite?", 
                answer: "A comb", 
                options: ["A gear", "A comb", "A saw"] 
              }
          ];

// Function to display a question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    // Dynamically create buttons for each option
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;

        // Add the event listener directly to the button
        button.addEventListener("click", () => checkAnswer(option, currentQuestion.answer));

        optionsContainer.appendChild(button);
    });

    // Add an image below the question
    const questionImageContainer = document.getElementById("question-image");
    questionImageContainer.innerHTML = '';  // Clear any previous images

    const img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2020/03/23/17/04/brain-4961452_1280.jpg";  // Image URL
    img.alt = "Question Image";
    img.style.width = "70%";  // Adjust the width and other styles
    questionImageContainer.appendChild(img);

    // Ensure that no "Next" button is shown (since it's not present in the HTML)
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    const messageContainer = document.getElementById("message-container");
     // Debugging - check if this function is being triggered
     console.log("Answer clicked:", selectedAnswer);

    // Check if the answer is correct
    if (selectedAnswer === correctAnswer) {
        score++;
        coins += 2;
         // Check if coins can be converted into diamonds
if (coins >= 10) {
    const newDiamonds = Math.floor(coins / 10); // Calculate how many diamonds to add
    diamonds += newDiamonds; // Add new diamonds
    coins -= newDiamonds *10; // Calculate the remaining coins (remainder after converting to diamonds)
    diamondsEarned += newDiamonds; // Update the total diamonds earned
}


        messageContainer.textContent = "Correct answer!";
        messageContainer.style.color = "green";
    } else {
        messageContainer.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
        messageContainer.style.color = "red";
    }
    messageContainer.style.display = "block";  // Make sure the message container is visible
    messageContainer.style.opacity = "1"; // Reset opacity if it was faded earlier
    // Debugging - ensure the message container is visible
           console.log("Message container shown");
    // Disable all the options after an answer is clicked to prevent further changes
    const optionsButtons = document.querySelectorAll("#options button");
    optionsButtons.forEach(button => {
        button.disabled = true;
    });
     // Debugging - log the current state of coins and diamonds
     console.log(`Coins: ${coins}, Diamonds: ${diamonds}`);
    
    // Set a timer to fade out the message before showing the next question
    setTimeout(() => {
        messageContainer.style.transition = "opacity 0.5s ease"; // Smooth fade-out
        messageContainer.style.opacity = "0"; // Fade out the message

        setTimeout(() => {
            messageContainer.style.display = "none"; // Hide after fading out
            if (currentQuestionIndex < questions.length) {
                displayQuestion(); // Display the next question
            } else {
                finishQuiz(); // End the quiz
            }
        }, 500); // Wait for the fade-out transition to complete (match the duration)
    }, 1000); // Wait for the message to be visible for 1 second


    currentQuestionIndex++;
    updateUI();

    // Wait for a moment before loading the next question
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            finishQuiz();
        }
    }, 1000);
}

// Function to finish the quiz
function finishQuiz() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("final-result").style.display = "block";
    document.getElementById("final-score").textContent = `Your score: ${score}, Coins earned: ${coins}, Diamonds: ${diamonds}`;
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    coins = 0;
    diamonds = 0;
    diamondsEarned = 0;

    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("final-result").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    displayQuestion();
}

// Function to update the UI (coins, diamonds, progress, etc.)
function updateUI() {
    const totalQuestions = questions.length;
    const completedQuestions = currentQuestionIndex;
    const percentageCompleted = Math.round((completedQuestions / totalQuestions) * 100);

    updateCoins(coins);
    updateDiamonds(diamonds);
    document.getElementById("progress").textContent = `Progress: ${completedQuestions}/${totalQuestions} (${percentageCompleted}%)`;
}

// Function to update the coins display
function updateCoins(newCount) {
    document.getElementById("coins-count").textContent = newCount;
}

// Function to update the diamonds display
function updateDiamonds(newCount) {
    document.getElementById("diamonds-count").textContent = newCount;
}

// Initialize the page
window.onload = () => {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("share-message").style.display = "none";
    updateUI();
};
