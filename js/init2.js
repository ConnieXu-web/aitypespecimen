var entryCount = 0;
var displayCount = 0;

//var letters = new Array ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

var pangrams = new Array(
  "The quick brown fox jumps over the lazy dog",
  "abcdefghijklmnopqrstuvwxyz",
  "Buvez de ce whisky que le patron juge fameux",
  "Junk MTV quiz graced by fox whelps",
  "Waltz, bad nymph for quick jigs vex",
  "Sex charged fop blew my junk TV quiz",
  "Joaquin Phoenix was gazed by MTV for luck",
  "Boxers had zap of gay jock love quit women",
  "Fake bugs put in wax jonquils drive him crazy",
  "Then a cop quizzed Mick Jagger’s ex wives briefly",
  "Jack amazed a few girls by dropping the antique onyx vase",
  "Many wived Jack laughs at probes of sex quiz",
  "Portez ce vieux whisky au juge blond qui fume",
  "TV quiz drag nymphs blew JFK cox"
)
var iterationNumber = Math.floor(Math.random()*50);

$(document).ready(function() {

  var sentence = pangrams[Math.floor(Math.random()*pangrams.length)];
  var i = 0;
  var k;
  var letternumbers = new Array();
   for (var j = 0; j <= sentence.length; j++) {
        letternumbers[j] = 1+Math.floor(Math.random()*64);
  }
  while ( i <= sentence.length) {
    k = sentence[i];
    createElement(k, letternumbers);
    i++;
  }
  interaction(sentence, letternumbers);
});

function createElement(k, letternumbers) {
 var elem = $('#cursor');
  if (k == "a" || k == "A") { 
      var hey = "a";
      elem.before(`<span class="inner" id = "a"><button onclick=" window.open('file:///Users/ConnieXu/Desktop/School/Parsons/Spring%202020/Experimental%20Type/pangrams_test/a.html', '_blank'); return false;"><img class="letter" src="assets/letters/a/a-iteration_50/a-50-${letternumbers[0]}.jpeg"></button></span>`); 
    }
  if (k == "b" || k == "B") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/b/b-iteration_50/b-50-${letternumbers[1]}.jpeg"></span>`); 
    }
  if (k == "c" || k == "C") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/c/c-iteration_50/c-50-${letternumbers[2]}.jpeg"></span>`); 
    }
  if (k == "d" || k == "D") {
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/d/d-iteration_50/d-50-${letternumbers[3]}.jpeg"></span>`); 
    }
  if (k == "e" || k == "E") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/e/e-iteration_50/e-50-${letternumbers[4]}.jpeg"></span>`); 
    }

  if (k == "f" || k == "F") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/f/f-iteration_50/f-50-${letternumbers[5]}.jpeg"></span>`); 
    }

  if (k == "g" || k == "G") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/g/g-iteration_50/g-50-${letternumbers[6]}.jpeg"></span>`); 
    }
  if (k == "h" || k == "H") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/h/h-iteration_50/h-50-${letternumbers[7]}.jpeg"></span>`); 
    }
  if (k == "i" || k == "I") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/i/i-iteration_50/i-50-${letternumbers[8]}.jpeg"></span>`); 
    }
  if (k == "j" || k == "J") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/j/j-iteration_50/j-50-${letternumbers[9]}.jpeg"></span>`); 
    }
  if (k == "k" || k == "K") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/k/k-iteration_50/k-50-${letternumbers[10]}.jpeg"></span>`); 
    }
  if (k == "l" || k == "L") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/l/l-iteration_50/l-50-${letternumbers[11]}.jpeg"></span>`); 
    }
  if (k == "m" || k == "M") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/m/m-iteration_50/m-50-${letternumbers[12]}.jpeg"></span>`);
    }
  if (k == "n" || k == "N") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/n/n-iteration_50/n-50-${letternumbers[13]}.jpeg"></span>`); 
    }
  if (k == "o" || k == "O") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/o/o-iteration_50/o-50-${letternumbers[14]}.jpeg"></span>`); 
    }
  if (k == "p" || k == "P") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/p/p-iteration_50/p-50-${letternumbers[15]}.jpeg"></span>`); 
    }
  if (k == "q" || k == "Q") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/q/q-iteration_50/q-50-${letternumbers[16]}.jpeg"></span>`);
    }
  if (k == "r" || k == "R") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/r/r-iteration_50/r-50-${letternumbers[17]}.jpeg"></span>`); 
    }
  if (k == "s" || k == "S") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/s/s-iteration_50/s-50-${letternumbers[18]}.jpeg"></span>`); 
    }
  if (k == "t" || k == "T") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/t/t-iteration_50/t-50-${letternumbers[19]}.jpeg"></span>`); 
    }
  if (k == "u" || k == "U") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/u/u-iteration_50/u-50-${letternumbers[20]}.jpeg"></span>`); 
    }
  if (k == "v" || k == "V") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/v/v-iteration_50/v-50-${letternumbers[21]}.jpeg"></span>`); 
    }
  if (k == "w" || k == "W") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/w/w-iteration_50/w-50-${letternumbers[22]}.jpeg"></span>`); 
    }
  if (k == "x" || k == "X") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/x/x-iteration_50/x-50-${letternumbers[23]}.jpeg"></span>`); 
    }
  if (k == "y" || k == "Y") { 
      elem.before(`<span class="inner"><img class="letter" src="assets/letters/y/y-iteration_50/y-50-${letternumbers[24]}.jpeg"></span>`); 
    }
  if (k == "z" || k == "Z") {
       elem.before(`<span class="inner"><img class="letter" src="assets/letters/z/z-iteration_50/z-50-${letternumbers[25]}.jpeg"></span>`); 
    }
  if (k == " ") {
       elem.before('<span class="inner">&nbsp;</span>') 
    };
}

function deleteElement() {
  $(".inner").last().remove();
}

function interaction(sentence, letternumbers){ 

    sentence = sentence.replace(/\s+/g, '');
    console.log(sentence);
    var letters = new Array();
    for (var f = 0; f < sentence.length;f++) {
        letters.push(sentence[f]);
    }
    console.log(letters);

    let letterArr = document.getElementsByClassName("letter");
    console.log(letterArr);

    for (let z = 0; z <= sentence.length; z++) {
        console.log(letterArr[z]);
        let currLetter = letterArr[z];
        console.log("current letter", currLetter);
        currLetter.addEventListener("mouseover", function () {
            var testLet = letters[z];
            var testLets = letternumbers[z];
            let goingup = true;
            console.log(letters[z]);
            if (goingup==true){
                letternumbers[z]++;
                goingup==true;
                if (letternumbers[z]>=64){
                    goingup = false;
                }
            } else{
                //start back at 0
                letternumbers[z]=0;
            }
            this.setAttribute('src', `assets/letters/${testLet}/${testLet}-iteration_50/${testLet}-50-${testLets}.jpeg`);
            }
        )
        //currLetter.addEventListener("onclick", function() {
           // document.getElementById(currLetter)
        //})   
    }
}


var randomImg = Math.floor(Math.random()*64);
var container = document.getElementById("conainter");
  
function changeSrc(image) {
    var goingup = true
    console.log(goingup)
  
    if (goingup==true){
      letternumber++;
      goingup==true;
      if (letternumber>=64){
        goingup = false;
      }
    } else{
      //start back at 0
      letternumber=0;
    }
    console.log(letternumber);
  
    var newSrc = `assets/letters/e/e-iteration_50/e-50-${letternumber}.jpeg`
    console.log("new:", newSrc);
    changeimg(newSrc);
  }
  
  function changeimg(newSrc) {
  
    //loop 
    document.getElementsByClassName("letter")[0].src = newSrc;
  }

function Runinterval (image){
    setInterval(function(){ changeSrc(image); }, 5000)
  }
  