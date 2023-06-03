//Declaring arrey
var topics = ['HTML', 'CSS','Git','JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

//Adding function & For Loop

function listTopics(){
    for(var x = 0; x < topics.length; x++)
    {
        console.log(topics[x]);
    }
}
console.log("Here's the list of topics we learned in the Prework");
listTopics();

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("LEt's study CSS");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's Study JavaScript");
    } else {
        console.log('Please try again!')
    }
}
console.log("What toppic should we study first?");
selectTopic();