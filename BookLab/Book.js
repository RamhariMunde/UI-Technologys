const mainDiv = document.getElementById('mainDiv');

const Books = [
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355655218i/6369447.jpg",
    Title : "मृत्युंजय",
    Link : "https://harpercollins.co.in/blog/editors-recommend/books-novels-indian-authors/"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1341932298i/11980343.jpg",
    Title : "छावा",
    Link : "https://harpercollins.co.in/blog/editors-recommend/books-novels-indian-authors/"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1324457550i/13271546.jpg",
    Title : "श्यामची आई",
    Link : "https://harpercollins.co.in/blog/editors-recommend/books-novels-indian-authors/"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1376762663i/6727757.jpg",
    Title : "Shriman Yogi",
    Link : "https://harpercollins.co.in/blog/editors-recommend/books-novels-indian-authors/"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354605638i/16231721.jpg",
    Title : "Natsamrat",
    Link : "https://www.goodreads.com/book/show/16231721-natsamrat"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559501064i/46132843.jpg",
    Title : "Shala",
    Link : "https://goodreads.com/book/show/46132843-shala"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1406968021i/22852457.jpg",
    Title : "रणांगण",
    Link : "https://www.goodreads.com/book/show/22852457"
   },
   {
    Image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354434594i/16204012.jpg",
    Title : "झुंज",
    Link : "https://www.goodreads.com/book/show/16204012"
   },
]

const displayData = () =>
{
    Books.forEach((b) =>{
        const div = document.createElement("div")
                    div.classList.add("Book")
        const ele = document.createElement("h1")
              ele.textContent = b.Title

              const anchor = document.createElement("a")
              anchor.href = b.Link
              anchor.target = "_target"
              anchor.textContent = "Buy Book"

        const image = document.createElement("img")
        image.src = b.Image;   
        image.alt = "The Forest of Enchantments"
        div.append(image,ele,anchor)
        mainDiv.appendChild(div)   
    })
}
displayData();


















/* This is a created h1 dag using javascript */
// const displayData = () => {
//     const ele = document.createElement("h1"); // <h1></h1>
//     ele.innerText = "Jay Ganesh"; // <h1>Jay Ganesh</h1>
//     mainDiv.appendChild(ele);
// }
// displayData();

/* This is anchor tag created by using Javascript */
// function displayData () {
//     const anchor = document.createElement("a")
//     anchor.href = "https:/google.com";
//     anchor.target = "-target"
//     anchor.textContent = "Click Me"
//     mainDiv.appendChild(anchor);
// }
// displayData();

/* This is added images using javascript */
// const displayData = () =>
// {
//     const image = document.createElement("img");
//     image.src = "https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_.jpg";
//     image.alt = "Kalki";
//     mainDiv.appendChild(image);
// }
// displayData();