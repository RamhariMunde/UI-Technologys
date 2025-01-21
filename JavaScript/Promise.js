
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomeNum = Math.floor(Math.random() * 10);
        if (randomeNum < 5) {
            resolve(`Success! Random number: ${randomeNum}`);
        } else {
            reject(`Error! Random number: ${randomeNum}`);
        }
    }, 1000); // Fix the misplaced closing parenthesis
});

myPromise
    .then((message) => {
        console.log(message); // Log the success message
    })
    .catch((error) => {
        console.error(error); // Log the error message
    });
