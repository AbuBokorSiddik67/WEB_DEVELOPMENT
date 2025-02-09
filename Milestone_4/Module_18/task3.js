// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Calculate A Grade for Student.

var mark = 50;

if (mark >= 90 && mark<100) {
    console.log("You got A");
}
else if (mark >= 80 && mark<89){
    console.log("You got B");
}
else if (mark >= 70 && mark<79) {
    console.log("You got C");
}
else if (mark >= 60 && mark<69) {
    console.log("You got D");
}
else if (mark >= 50 && mark<59) {
    console.log("You got E");
}
else {
    console.log("you are fail");
}