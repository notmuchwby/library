let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const shelves = document.querySelector('#library-shelves');

function clickButton() {
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const bookPages = document.querySelector('#num-pages');
    const readOrNot = document.querySelector('#read-or-not');

    if(bookTitle.value !== "" && bookAuthor.value !== "" && bookPages.value !== "") {
        
        let readValue = "";

        if(readOrNot.checked === true) {
            readValue = "Yes";
        } else {
            readValue = "No";
        }

        const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readValue);

        myLibrary.push(book);

        shelves.textContent = "";
        showBooks();

    } else {
        alert("Enter values for each box");
    }
}


function showBooks() {
    myLibrary.forEach((book, index) => {
        const oneBook = document.createElement('div');
        oneBook.id = "one-book";
   
        const b = document.createElement('p');
        b.id = "p-form";
        const title = book.title;        
        b.textContent = "Book's title: " + title;
        oneBook.appendChild(b);

        const p = document.createElement('p');
        const author = book.author;
        p.id = "p-form";        
        p.textContent = "Author's name: " + author;
        oneBook.appendChild(p);

        const c = document.createElement('p');
        const pages = book.pages;
        c.id = "p-form";        
        c.textContent = "Number of pages: " + pages;
        oneBook.appendChild(c);

        const r = document.createElement('p');
        r.id = "book-status"
        const read = book.read;        
        r.textContent = "Book read: " + read;
        oneBook.appendChild(r);

        const buttons = document.createElement('div');
        buttons.id = "buttons";

        // DELETE BOOK BUTTON 

        const btn = document.createElement('button');
        btn.textContent = "Delete book";
        btn.id = "two-buttons";

        btn.addEventListener('click', function() {
            myLibrary.splice(index, 1);
            shelves.textContent = "";
            showBooks();
        });

        buttons.appendChild(btn);

        // CHANGE READ STATUS BUTTON

        const btn1 = document.createElement('button');
        btn1.textContent = "Change read status";
        btn1.id = "two-buttons";
        btn1.addEventListener('click', function() {
            if(read === "Yes") {
                book.read = "No";
                r.textContent = "Book read: No";
            } else if (read === "No") {
                book.read = "Yes";
                r.textContent = "Book read: Yes";
            }
        })

        buttons.appendChild(btn1);
    
        oneBook.appendChild(buttons);

        shelves.appendChild(oneBook);
    })
}



