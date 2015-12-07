function submitAnswers() {
  var total= 5;
  var score= 0;

  // get user input
  var q1= document.forms["quizForm"] ["q1"].value;
  var q2= document.forms["quizForm"] ["q2"].value;
  var q3= document.forms["quizForm"] ["q3"].value;
  var q4= document.forms["quizForm"] ["q4"].value;
  var q5= document.forms["quizForm"] ["q5"].value;
  // alert(q1);

// Validation

// if (q1 == null || q1 == " ") {
//   alert("You missed q1");
//   return false;
// }

for(i = 1; i <= total; i++) {
  if (eval('q'+ i) == null || eval('q'+ i) == ' ') {
    alert("You missed question " + i);
    return false;
  }
}
 // set correct answers

 var answers =["b","a","d","b","d"];

 // check asnwers

 for(i = 1; i <= total; i++) {
   if (eval('q'+ i) == answers[i - 1]) {
     score++;
   }
}

 // if (q1 == answers[0]) {
 //   score++;
 // }
 // if (q2 == answers[1]) {
 //   score++;
 // }
 // if (q3 == answers[2]) {
 //   score++;
 // }
 // if (q4 == answers[3]) {
 //   score++;
 // }
 // if (q5 == answers[4]) {
 //   score++;
 // }
 alert("You scored " +score+ " out of "+total);
}
