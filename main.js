//Sections
var message = document.querySelector('.message');
var meditationImage = document.querySelector('.meditation-image');
var loginPage = document.querySelector('.login');
var mainPage = document.querySelector('.main-page');
var welcomeMessage = document.querySelector('.welcome');

//Buttons
var messageButton = document.querySelector('.message-button');
var loginButton = document.querySelector('.login-button');

//event listeners
messageButton.addEventListener('click', displayMessage);
loginButton.addEventListener('click', login)

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function displayMessage() {
  var selection = document.getElementsByName('statement-type');
  var randomAffirmation = affirmations[getRandomIndex(affirmations)];
  var randomMantra = mantras[getRandomIndex(mantras)];
  for (var i = 0; i < selection.length; i++) {
    if (selection[i].checked && (selection[i] === affirmation)) {
      message.innerText = randomAffirmation;
    } else if (selection[i].checked && (selection[i] === mantra)) {
      message.innerText = randomMantra;
    }
  }
  meditationImage.classList.add('hidden')
  message.classList.remove('hidden')
};
function login() {
  var loginName = document.querySelector('.name').value
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  welcomeMessage.innerText = `Welcome ${loginName}`
}

//affirmations and mantras
var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.',
];

var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.',
];
