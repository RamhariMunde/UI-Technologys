var y = 24;
function favFunction(){
    var x = 667;
    var fun1 = function() {
        console.log(x);
    };

    var fun2 = function(){
        console.log(y);

    };

    fun1();
    fun2();

}
favFunction();