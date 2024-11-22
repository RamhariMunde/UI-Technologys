/* Css code */
/*
#crush{
    margin-top: 120px;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    color:rgb(177, 9, 9);
    text-shadow: 50px;
}
*/

/* HTML Code */
/*
 <div  id="crush">
        <script src="./t.js"></script>
    </div>
*/

for (var row=0; row<=5; row++){
    for (var col=0; col<=6; col++){
        if((( col%3!=0) && (row==0)) || (( col%3==0)&& (row==1))){
            document.write("* &nbsp");
        }
        else if(row- col == 2 || row + col == 8){
            document.write("* &nbsp");
        }
        else{
            document.write("&nbsp &nbsp");
        }
    }
    document.write("<br>");
}
