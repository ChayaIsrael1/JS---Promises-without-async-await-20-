// Exercise 1: Say Hello After a Delay (with .then)
// Use: setTimeout
// It returns a Promise that waits delay milliseconds
// After that, it resolves with "Hello, <name>!"

function delayedGreet(name, delay) {
    return new Promise((res, rej) => setTimeout(() => { res(`Hello, ${name}!`) }, delay))
}
delayedGreet("Alice", 2).then((mess) => { console.log(mess) })

// Exercise 3: Random Success or Failure (with .then and .catch)
// 50% chance to resolve "Success!", 50% chance to reject "Failure!"
// You must use .then() to show success and .catch() to show failure.

function randomOperation() {
    return new Promise((res, rej) => setTimeout(() => {
        if (Math.random() < 0.5) {
            res("Success!");
        } else {
            rej("Failure!");
        }
    }, 1000))
}

randomOperation().then((res) => console.log("Success!")).catch((rej) => console.log("Failure!"))

// Exercise 4: Timer Race - Which is Faster? (with .then)
// It starts two timers:
// Timer A resolves after 2 seconds
// Timer B resolves after 3 seconds
// The Promise resolves with the message from the faster one
// You must use .then() to show which timer finished first.
function raceTimers() {
    return new Promise((res) => {
        let alreadyHasWinner = false;
        setTimeout(() => {
            if (!alreadyHasWinner) {
                alreadyHasWinner = true;
                res("Timer A finished");
            }
        }, 2000);
        setTimeout(() => {
            if (!alreadyHasWinner) {
                alreadyHasWinner = true;
                res("Timer B finished");
            }
        }, 3000);
    });
}

raceTimers().then((msg) => console.log(msg));


// Exercise 6: Wait for 3 Promises Together (with .then)
// Use Promise.all to wait for all

function waitAll() {
    const p1 = new Promise((res) => setTimeout(() => { res("First") }, 1000))
    const p2 = new Promise((res) => setTimeout(() => { res("Second") }, 2000))
    const p3 = new Promise((res) => setTimeout(() => { res("Third") }, 3000))
    return Promise.all([p1, p2, p3]);

}
waitAll().then((mes) => console.log(mes))

// Exercises 8-10: Chaining Promises
// These must use .then() multiple times, each step after the other.
// Exercise 8: Say 3 Things, One by One
function chainedGreetings() {
    const p1 = new Promise((res) => setTimeout(() => { res("Hi!") }, 1000))
    const p2 = new Promise((res) => setTimeout(() => { res("How are you?") }, 2000))
    const p3 = new Promise((res) => setTimeout(() => { res("Goodbye!") }, 1000))
    return p1.then((mes) => { console.log(mes); return p2 }).then((mes) => {console.log(mes); return p3}).then((mes) => console.log(mes))
}


chainedGreetings();


// Exercise 9: Read File → Count Words → Save Result (Chained .then) EXTRA
// Use: fs module
// Create processFile(inputPath, outputPath)
// Step 1: Read file
// Step 2: Count words
// Step 3: Save "Word count: X" to output file
// All steps chained with .then()
//  Example Output:
// Word count written to result.txt:
// Word count: 15
// Exercise 10: Get Data → Parse JSON → Show Title (Chained .then) EXTRA
// Use: https module
// Create getUserTitle(userId)
// Step 1: Fetch from https://jsonplaceholder.typicode.com/todos/<userId>
// Step 2: Parse JSON
// Step 3: Show "title" from the response
// Use chained .then(), and .catch() for errors.
// Example Output:
// User 4's title: et porro tempora