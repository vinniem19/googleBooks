import axios from 'axios';

export default {
    getBooks: function() {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter');
    }

   /* getBook: function(id) {
        return axios.get('/api/books' + id);
    },
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData);
  } */
};