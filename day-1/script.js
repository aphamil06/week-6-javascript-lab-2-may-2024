let messageParagraph = document.getElementById("messageParagraph");

// Example tip calculator at 10%
function partOneA() {
  // Tip calulator at 10%
  let bill, billNumber, tip;

  // 1. prompt for the bill
  bill = prompt("What is your bill?");
  // 2. convert it to number
  billNumber = Number(bill);

  // 3. calculate tip
  tip = bill * 0.1;

  // 4. set the message
  messageParagraph.innerHTML = `Your bill is ${bill}. Your tip is ${tip} at 10%.`;
}

// Try It!
// Now try it at 20%
function partOneB() {
  alert("Try it!");
  // Tip calulator at 20%
  let bill, billNumber, tip;

  // 1. prompt for the bill
  bill = prompt("How much is your bill?");

  // 2. convert it to number
  billNumber = Number(bill);
  // 3. calculate tip
  tip = billNumber * 0.2;
  // 4. set the message
  messageParagraph.innerHTML = `Your bill is ${bill}.  Your tip is ${tip} at 20%.`;
}

// Example
// Split the bill among 3 people
function partTwoA() {
  let bill, billNumber, split;

  // 1. prompt for the bill
  bill = prompt("What is your bill?");
  // 2. convert bill to a number
  billNumber = Number(bill);
  // 3. calculate split bill
  split = bill / 3;
  // 4. set the message
  messageParagraph.innerHTML = `Your bill is ${bill}. You part of the bill is ${split} among three friends.`;
}

// Try it!
function partTwoB() {
  alert("Try it!");
  // 1. prompt for the bill
  let howManyPeople, howManyPeopleNumber, billSplit;
  bill = prompt("How much is the bill?");
  howManyPeople = prompt("How many people are splitting the bill?");
  // 2. convert it to number
  billNumber = Number(bill);
  howManyPeopleNumber = Number(howManyPeople);
  // 3. calculate split bill
  billSplit = billNumber / howManyPeopleNumber;
  // 4. set the message
  messageParagraph.innerHTML = `Your bill is ${bill}.  Your part of the bill is ${billSplit} among ${howManyPeople} friends.`;
}

// Example
// Use functions to create a tip calculator
// This is a function that takes a number, x as an argument and returns the amount you shuold tip at 10%
function tenPercentTip(x) {
  return x * 0.1;
}
// This is function that takes the tip and bill as arguments and creates a message for the user about what should be tipped.
function tipMessage(tip, bill, tipRate) {
  return `Your bill is ${bill}. You should tip $${tip}  at ${tipRate} percent.`;
}
function partThreeA() {
  let bill, billNumber, tip, message;
  // 1. prompt the user for the bill
  bill = prompt("What is your bill?");
  // 2. convert the bill to a number
  billNumber = Number(bill);
  // 3. calculate the tip
  tip = tenPercentTip(billNumber);
  // 4. create the message
  message = tipMessage(tip, bill, 10);
  // 5. set the message
  messageParagraph.innerHTML = message;
}

// Try it!
// This is a function that takes a number, x as an argument and returns the amount you shuold tip at 20%
function twentyPercentTip(x) {
  return x * 0.2
}
function partThreeB() {
  alert("Try it!");
  let bill, billNumber, tip, message;
  // 1. prompt the user for the bill
  bill = prompt("How much is the bill?");
  // 2. convert the bill to a number
    billNumber = Number(bill);
  // 3. calculate the tip
  tip = twentyPercentTip(billNumber);
  // 4. create the message
  // HINT: use tipMessage, which is defined above partThreeA
  message = tipMessage(tip, bill, 20);
  // 5. set the message
  messageParagraph.innerHTML = message;
}

// Example 4
// Use functions to create a split bill
function splitBillByN(x, n) {
  return x / n;
}
function messageForSplitBill(bill, split, n) {
  return `Your bill is ${bill}. You part of the bill is ${split} among ${n} friends.`;
}
function partFourA() {
  let bill, billNumber, split, message, splitBy, splitByNumber;
  // 1. prompt for bill
  bill = prompt("What is your bill?");
  splitBy = prompt("How many people are splitting the bill?");
  // 2. convert bill to number
  billNumber = Number(bill);
  splitByNumber = Number(splitBy);
  // 3. use a function to calculate the split
  split = splitBillByN(billNumber, splitByNumber);
  // 4. use a function to create the message
  message = messageForSplitBill(bill, split, splitBy);

  messageParagraph.innerHTML = message;
}

// Try it!
function splitBillByN(x, n) {
  return x / n;
  // Try it! return x divided by 4
  // to calculate the bill.
}

function partFourB() {
  alert("Try it!");
  let bill, billNumber, split, message, splitBy, splitByNumber;
  // 1. prompt for bill
bill = prompt ("How much is your bill?");
splitBy = prompt ("How many people are splitting the bill?");
  // 2. convert bill to number
billNumber = Number (bill);
splitByNumber = Number(splitBy);
  // 3. use a function to calculate the split
split = splitBillByN(billNumber, splitByNumber);
  // 4. use a function to create the message
message = messageForSplitBill(bill, split, splitBy);  
messageParagraph.innerHTML = message;
}

// Bonus: Create a splitBillByN function that will take two arguements, the bill and n. N is the number of friends splitting.
// Then use the splitBillByN in part 4 A and B instead of splitBillByThree and splitBillByFour.
// Think about how functions and arguments can make your code more flexible and ready to take on new requirements. (For example, can you make it split bill by 8 or 10 friends? How does splitBillByN help?)
