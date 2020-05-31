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
  "Then a cop quizzed Mick Jagger s ex wives briefly",
  "Jack amazed a few girls by dropping the antique onyx vase",
  "Many wived Jack laughs at probes of sex quiz",
  "Portez ce vieux whisky au juge blond qui fume",
  "TV quiz drag nymphs blew JFK cox",
  "Crazy Fredrick bought many very exquisite opal jewels",
  "We promptly judged antique ivory buckles for the next prize",
  "The job requires extra pluck and zeal from every young wage earner",
  "A quivering Texas zombie fought republic linked jewelry",
  "Back in June we delivered oxygen equipment of the same size",
  "Jim quickly realized that the beautiful gowns are expensive",
  "Vexed nymphs go for quick waltz job",
  "Fat hag dwarves quickly zap jinx mob",
  "Public junk dwarves quiz mighty fox",
  "Jack fox bids ivy-strewn phlegm quiz",
  "Two driven jocks help fax my big quiz",
  "Public junk dwarves hug my quartz fox",
  "My ex pub quiz crowd gave joyful thanks",
  "Cozy sphinx waves quart jug of bad milk",
  "Schwarzkopf vexed Iraq big-time in July",
  "Sex prof gives back no quiz with mild joy",
  "Quizzical twins proved my hijack-bug fix",
  "Heavy boxes perform quick waltzes and jigs",
  "Watch Jeopardy Alex Trebek s fun TV quiz game"
)
var iterationNumber = Math.floor(1 + Math.random() * 50);

$(document).ready(function() {

  var sentence = pangrams[Math.floor(Math.random()*pangrams.length)];
  document.title = sentence;
  var i = 0;
  var k;
  var letternumbers = new Array();
   for (var j = 0; j <= sentence.length; j++) {
        letternumbers[j] = Math.floor(1 + Math.random() * 64);
  }
  while ( i <= sentence.length) {
    k = sentence[i];
    createElement(k, letternumbers);
    i++;
  }

  setTimeout( function() {
  (function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 300);
  }(sentence + " "));
  },300);
  interaction(sentence.toLowerCase(), letternumbers);
});


function createElement(k, letternumbers) {
 var elem = $('#cursor');
  if (k == "a" || k == "A") { 
      var hey = "a";
      elem.before(`<span class="inner" id = "a"><a href="a.html"><img class="letter" src="assets/letters/a/a-iteration_50/a-50-${letternumbers[0]}.jpeg"></a></span>`); 
    }
  if (k == "b" || k == "B") { 
      elem.before(`<span class="inner"><a href="b.html"><img class="letter" src="assets/letters/b/b-iteration_50/b-50-${letternumbers[1]}.jpeg"></a></span>`); 
    }
  if (k == "c" || k == "C") { 
      elem.before(`<span class="inner"><a href="c.html"><img class="letter" src="assets/letters/c/c-iteration_50/c-50-${letternumbers[2]}.jpeg"></a></span>`); 
    }
  if (k == "d" || k == "D") {
      elem.before(`<span class="inner"><a href="d.html"><img class="letter" src="assets/letters/d/d-iteration_50/d-50-${letternumbers[3]}.jpeg"></a></span>`); 
    }
  if (k == "e" || k == "E") {
       elem.before(`<span class="inner"><a href="e.html"><img class="letter" src="assets/letters/e/e-iteration_50/e-50-${letternumbers[4]}.jpeg"></a></span>`); 
    }

  if (k == "f" || k == "F") { 
      elem.before(`<span class="inner"><a href="f.html"><img class="letter" src="assets/letters/f/f-iteration_50/f-50-${letternumbers[5]}.jpeg"></a></span>`); 
    }

  if (k == "g" || k == "G") { 
      elem.before(`<span class="inner"><a href="g.html"><img class="letter" src="assets/letters/g/g-iteration_50/g-50-${letternumbers[6]}.jpeg"></a></span>`); 
    }
  if (k == "h" || k == "H") { 
      elem.before(`<span class="inner"><a href="h.html"><img class="letter" src="assets/letters/h/h-iteration_50/h-50-${letternumbers[7]}.jpeg"></a></span>`); 
    }
  if (k == "i" || k == "I") { 
      elem.before(`<span class="inner"><a href="i.html"><img class="letter" src="assets/letters/i/i-iteration_50/i-50-${letternumbers[8]}.jpeg"></a></span>`); 
    }
  if (k == "j" || k == "J") {
       elem.before(`<span class="inner"><a href="j.html"><img class="letter" src="assets/letters/j/j-iteration_50/j-50-${letternumbers[9]}.jpeg"></a></span>`); 
    }
  if (k == "k" || k == "K") { 
      elem.before(`<span class="inner"><a href="k.html"><img class="letter" src="assets/letters/k/k-iteration_50/k-50-${letternumbers[10]}.jpeg"></a></span>`); 
    }
  if (k == "l" || k == "L") { 
      elem.before(`<span class="inner"><a href="l.html"><img class="letter" src="assets/letters/l/l-iteration_50/l-50-${letternumbers[11]}.jpeg"></a></span>`); 
    }
  if (k == "m" || k == "M") {
       elem.before(`<span class="inner"><a href="m.html"><img class="letter" src="assets/letters/m/m-iteration_50/m-50-${letternumbers[12]}.jpeg"></a></span>`);
    }
  if (k == "n" || k == "N") { 
      elem.before(`<span class="inner"<a href="n.html"><img class="letter" src="assets/letters/n/n-iteration_50/n-50-${letternumbers[13]}.jpeg"></a></span>`); 
    }
  if (k == "o" || k == "O") {
       elem.before(`<span class="inner"><a href="o.html"><img class="letter" src="assets/letters/o/o-iteration_50/o-50-${letternumbers[14]}.jpeg"></a></span>`); 
    }
  if (k == "p" || k == "P") {
       elem.before(`<span class="inner"><a href="p.html"><img class="letter" src="assets/letters/p/p-iteration_50/p-50-${letternumbers[15]}.jpeg"></a></span>`); 
    }
  if (k == "q" || k == "Q") {
       elem.before(`<span class="inner"><a href="q.html"><img class="letter" src="assets/letters/q/q-iteration_50/q-50-${letternumbers[16]}.jpeg"></a></span>`);
    }
  if (k == "r" || k == "R") {
       elem.before(`<span class="inner"><a href="r.html"><img class="letter" src="assets/letters/r/r-iteration_50/r-50-${letternumbers[17]}.jpeg"></a></span>`); 
    }
  if (k == "s" || k == "S") {
       elem.before(`<span class="inner"><a href="s.html"><img class="letter" src="assets/letters/s/s-iteration_50/s-50-${letternumbers[18]}.jpeg"></a></span>`); 
    }
  if (k == "t" || k == "T") {
       elem.before(`<span class="inner"><a href="t.html"><img class="letter" src="assets/letters/t/t-iteration_50/t-50-${letternumbers[19]}.jpeg"></a></span>`); 
    }
  if (k == "u" || k == "U") {
       elem.before(`<span class="inner"><a href="u.html"><img class="letter" src="assets/letters/u/u-iteration_50/u-50-${letternumbers[20]}.jpeg"></a></span>`); 
    }
  if (k == "v" || k == "V") {
       elem.before(`<span class="inner"><a href="v.html"><img class="letter" src="assets/letters/v/v-iteration_50/v-50-${letternumbers[21]}.jpeg"></a></span>`); 
    }
  if (k == "w" || k == "W") {
       elem.before(`<span class="inner"><a href="w.html"><img class="letter" src="assets/letters/w/w-iteration_50/w-50-${letternumbers[22]}.jpeg"></a></span>`); 
    }
  if (k == "x" || k == "X") { 
      elem.before(`<span class="inner"><a href="x.html"><img class="letter" src="assets/letters/x/x-iteration_50/x-50-${letternumbers[23]}.jpeg"></a></span>`); 
    }
  if (k == "y" || k == "Y") { 
      elem.before(`<span class="inner"><a href="y.html"><img class="letter" src="assets/letters/y/y-iteration_50/y-50-${letternumbers[24]}.jpeg"></a></span>`); 
    }
  if (k == "z" || k == "Z") {
       elem.before(`<span class="inner"><a href="z.html"><img class="letter" src="assets/letters/z/z-iteration_50/z-50-${letternumbers[25]}.jpeg"></a></span>`); 
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
        var randomIteration = Math.floor(1 + Math.random() * 50);
          var testLet = letters[z];
          var testLets = letternumbers[z];
          let goingup = true;
          console.log(letters[z]);
          if (goingup==true){
              letternumbers[z]++;
              goingup==true;
              if (letternumbers[z]>=64){
                  letternumbers[z]=1;
              }
          } else{
              //start back at 0
              letternumbers[z]=1;
          }
          this.setAttribute('src', `assets/letters/${testLet}/${testLet}-iteration_${randomIteration}/${testLet}-${randomIteration}-${testLets}.jpeg`);
          }
      )
      //currLetter.addEventListener("onclick", function() {
         // document.getElementById(currLetter)
      //})   
  }
}


var randomImg = Math.floor(Math.random()*64);
var container = document.getElementById("conainter");
  