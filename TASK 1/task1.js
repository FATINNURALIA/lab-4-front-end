// Function to calculate the square of a number
function findSquare() {
    const x = document.getElementById("num1").value; // Get the value from input field
    document.getElementById("answer1").innerHTML = "Answer: " + (x * x); // Display the answer
}

// Function to calculate the sum of cubes of two numbers
function findSumSquare() {
    const x = document.getElementById("num2X").value;
    const y = document.getElementById("num2Y").value;
    document.getElementById("answer2").innerHTML = "Answer: " + ((x * x * x) + (y * y * y)); // Calculate and display the sum of cubes
}

// Function to reverse a number
function findReversedNumber() {
    const x = document.getElementById("num3").value;
    const reversedStr = x.toString().split('').reverse().join('');
    document.getElementById("answer3").innerHTML = "Answer: " + reversedStr;
}

// Function to print numbers divisible by a given number (between 1 and 100)
function findDivisibleNumbers() {
    const z = document.getElementById("num4").value;
    let nums = "";
    for (let i = 1; i <= 100; i++) {
        if ((i % z) === 0) {
            if (nums === "") {
                nums = i.toString();
            } 
            else {
                nums += ", " + i;
            }
        }
    }
    document.getElementById("answer4").innerHTML = "Answer: " + nums;
}