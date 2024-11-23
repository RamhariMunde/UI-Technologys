/* Css code */
/* #crush{
    margin-top: 120px;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    color:rgb(177, 9, 9);
    text-shadow: 50px;

}
button{
    text-align: center;
    justify-content: center;
    font-size: bold 18px;
    padding: 15px;
    margin-top: 12px;
    background-color: brown;
    color: white;
    border-radius: 20px;
    font-family: cursive;
}
button:hover{
cursor: pointer;
background-color: white;
color: brown;
padding: 18px;
margin-top: 12px;
border-radius: 20px;
font-family: cursive;
font-size: 20px;
} */

/* HTML Code */
/*
 <div  id="crush">
        <script src="./t.js"></script>
        <button> Love You </button>
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
