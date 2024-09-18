// object displays book properties :-title,aurthor,published 

let Book = [{
    title: "To Kill A Mockingbird ",
    aurthor: "Harper lee",
    published : 2017,
    }, {
        title : "The Great Gatsby",
        aurthor : " F. Scott Fitzgerald",
        published : 1925,
    },{
        title : "Pride and Prejudice ",
        aurthor : "Jane Austen",
        published : 1813,
    }
]

function printBookDetails(variable) {
   console.log("title: "+variable.title);
   console.log("Aurthor: "+variable.aurthor);
   console.log("Year Published: " +variable.published );
}
printBookDetails(Book[1]);
printBookDetails(Book[2]);








