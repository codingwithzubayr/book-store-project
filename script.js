// Fetch and display books
async function fetchBooks() {
    try {
        const response = await fetch('http://43.202.47.57:5000/books');
        const books = await response.json();
        const bookList = document.getElementById('books');
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            const fullname = `${book.title} by ${book.author}`;  // Create fullname
            li.innerHTML = `${book.title} by ${book.author} (${book.publication_year}, $${book.price}) 
                            <button class="delete-btn" onclick="deleteBook('${encodeURIComponent(fullname)}')">Delete</button>`;  // Changed for Task 4.2: Pass fullname instead of id
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

    if (!title || !author || !year || !price) {
        alert('Please fill in all fields.');
        return;
    }

    const book = { title, author, publication_year: parseInt(year), price: parseFloat(price) };

    try {
        const response = await fetch('http://43.202.47.57:5000/add_student', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error(`Failed to add book: ${response.statusText}`);
        }
        const result = await response.json();
        alert(result.message); // Show success message
        fetchBooks(); // Refresh the list
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Error adding book: ' + error.message);
    }
}

// Delete a book
async function deleteBook(fullname) {
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            await fetch(`http://43.202.47.57:5000/delete/${encodeURIComponent(fullname)}`, {  // Changed for Task 4.2: Use fullname instead of id
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