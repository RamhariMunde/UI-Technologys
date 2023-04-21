(function () {
    var x,y;
    try {               // The try statement defines a code block to run (to try).
        throw new Error(); // The throw statement defines a custom error.
    }catch (x) {        // The catch statement defines a code block to handle any error.
        x = 1;
        y = 2;
        console.log(x); // 1
        }
        console.log(x); // this x is undefined
        console.log(y); // 2

    })();
    

    

    
    