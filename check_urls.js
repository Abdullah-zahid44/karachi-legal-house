const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Gavel_of_a_judge.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/2/23/The_scales_of_justice.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Law_books_-_Project_Nuncio_%285810014022%29.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Supreme_Court_of_Pakistan_2.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Karachi_skyline_from_Habib_Bank_Plaza.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/3/30/Keyboard_with_Cybercrime_key.jpg'
];
Promise.all(urls.map(u => fetch(u, {method: 'HEAD'}).then(r => r.status))).then(console.log);
