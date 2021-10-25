class Book {
    constructor(bookTitle, author, isbn) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.isbn = isbn;
    }

    addBook() {
        const display = document.getElementById("addBook");

        let row = display.insertRow();

        let cell = row.insertCell();
        let text = document.createTextNode(this.bookTitle);
        cell.appendChild(text);

        let cell2 = row.insertCell();
        let text2 = document.createTextNode(this.author);
        cell2.appendChild(text2);

        let cell3 = row.insertCell();
        let text3 = document.createTextNode(this.isbn);
        cell3.appendChild(text3);

        let cell4 = row.insertCell();
        let del = document.createElement('a');
        del.innerHTML = '<i class="fas fa-trash"></i>';
        cell4.appendChild(del);

    }



}
document.getElementById("book-form").addEventListener("submit",
    function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;
        if (!title || !author || !isbn) {
            console.log("You bastard don't fuck with me I need some information");

        }
        else {
            console.log(title, author, isbn);

            const book = new Book(title, author, isbn);

            book.addBook();


            document.getElementById("display-books").style.display = "block";
        }


    }

)




document.getElementById("display-books").addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains("fa-trash")) {
        console.log(e.target.parentElement.parentElement.parentElement.remove())
    }
})

