const books = [
    'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide'
];

const searching = 'javascript';

const output = [];
for(const book of books){
    if(book.toLowerCase().includes(searching.toLowerCase())){
        output.push(book);
    }
}
console.log(output);