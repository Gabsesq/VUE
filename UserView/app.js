// app.js
const app = new Vue({
  el: '#app',
  
  methods: {
    newStudent: function(){

    }
  }
});
new Vue({
  el: '#app',
  data: {
      books: [],
      newBook: {
          title: '',
          isbn: '',
          person: '',
      }
  },
  mounted() {
      this.fetchBooks();
  },
  methods: {
      fetchBooks() {
          // Fetch all books
          fetch('https://localhost:3000/books.json')
              .then(response => response.json())
              .then(data => {
                  this.books = data;
              })
              .catch(error => {
                  console.error('Error fetching books:', error);
              });
      },
      createBook() {
          // Create a new book
          fetch('https://localhost:3000//books.json', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.newBook),
          })
          .then(response => response.json())
          .then(data => {
              // Add the newly created book to the list
              this.books.push(data);
              // Clear the form
              this.newBook.title = '';
              this.newBook.isbn = '';
              // Add any other book properties you cleared to the initial state
          })
          .catch(error => {
              console.error('Error creating a book:', error);
          });
      },
      deleteBook(id) {
          // Delete a book by its ID
          fetch(`https://localhost:3000//books/${id}.json`, {
              method: 'DELETE',
          })
          .then(() => {
              // Remove the deleted book from the list
              this.books = this.books.filter(book => book.id !== id);
          })
          .catch(error => {
              console.error('Error deleting a book:', error);
          });
      },
  },
});




