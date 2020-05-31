var pangrams = new Array(
  "Nymphs blitz quick vex dwarf jog",
  "DJs flock by when MTV ax quiz prog",
  "Big fjords vex quick waltz nymph",
  "Bawds jog, flick quartz, vex nymph",
  "Junk MTV quiz graced by fox whelps",
  "Bawds jog, flick quartz, vex nymphs",
  "she a nympho, i ain't rlly shit tho"
)

var letternumber = Math.floor(Math.random()*64)


window.onload = function(displayPangram){
  var container = document.getElementById("container");
  var sentence = pangrams[Math.floor(Math.random()*pangrams.length)];
  container.insertAdjacentHTML('beforeend', sentence);

  searchAndreplace(sentence);
}

function searchAndreplace(sentence) {
  //string.replace(searchvalue, newvalue)
  var i = 0;
  // while ( i < sentence.length) {
    // var character = sentence[i];
    // console.log(character);
    // var image = `<img class = "letter" src="assets/letters/${character}/${character}-iteration_50/${character}-50-1.jpeg">`;
    // // var image = `<img class= "letter" src="assets/letters/e/e-iteration_50/e-50-03.jpeg">`;
    // console.log(image);
    // var regex = new RegExp(character, "g");
    // console.log(regex);
    // var res = res.replace(regex, image);
    // document.getElementById("container").innerHTML = res;
    // i++;
    // console.log(res);
  // }
  
  // var iteration number incr. due to page load or mouse hover
  var res = sentence.replace(/(a)/g, `<span><img class= "letter" src="assets/letters/a/a-iteration_50/a-50-01}.jpeg"></span>`);
  res = res.replace(/(e)/g, `<span><img class= "letter" src="assets/letters/e/e-iteration_50/e-50-${letternumber}.jpeg"></span>`)
  // res = res.replace(/(c)/g, `<img class= "letter" src="assets/letters/c/c-iteration_50/c-50-${letternumber}.jpeg">`)
  document.getElementById("container").innerHTML = res;
  Runinterval(letternumber);
}

//change letter src every x seconds 
//put this function in an interval

function Runinterval (image){
  setInterval(function(){ changeSrc(image); }, 5000)
}


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
//search for letter, replace with image
//push pangram to dom
//change over time