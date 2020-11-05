const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// writing files
fs.writeFile('./docs/blog1.txt', '123', () => {
    console.log('Written');
});

fs.writeFile('./docs/blog2.txt', '456', () => {
    console.log('Written');
})

// directories

// deleting files