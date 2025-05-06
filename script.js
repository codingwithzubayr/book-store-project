// Fetch and display books
async function fetchBooks() {
    try {
        const response = await fetch('http://3.36.49.128:5000/books');
        const books = await response.json();
        const bookList = document.getElementById('books');
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `${book.title} by ${book.author} (${book.publication_year}, $${book.price}) 
                            <button class="delete-btn" onclick="deleteBook(${book.id})">Delete</button>`;
            bookList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Add a new book
async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const book = { title, author, publication_year: parseInt(year), price: parseFloat(price) };

    try {
        await fetch('http://3.36.49.128:5000/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        });
        fetchBooks(); // Refresh the list
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';
    } catch (error) {
        console.error('Error adding book:', error);
    }
}

// Delete a book
async function deleteBook(id) {
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            await fetch(`http://3.36.49.128:5000/delete/${id}`, {
                method: 'DELETE'
            });
            fetchBooks(); // Refresh the list
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }
}

// Load books when the page loads
window.onload = fetchBooks;