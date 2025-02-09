/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMark = 80;
let myFriendMark = 30;

if (myMark == 80) {
    if (myFriendMark == 80) {
        console.log("Go to Lunch with my fiend!");
    }
    else if (myFriendMark <= 80 && myFriendMark >= 60) {
        console.log("Good luck next time!");
    }
    else if (myFriendMark <= 60 && myFriendMark >= 40) {
        console.log("Message unseen");
    }
    else if (myFriendMark <= 40) {
        console.log("Block My Friend");
    }
    else {
        console.log("block cirodin");
    }
} else {
    console.log("Go to Home and sleep and act sad");
}