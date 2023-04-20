var b = 1;
function outer() {
    var b = 2;
    function inner() {
        b++;
        var b = 3;
        console.log('b'); // in console not iffect 3

    }
    inner();

}
outer();