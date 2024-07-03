import nodemon from 'nodemon';


nodemon({
    script:'./src/App.js',
    ext:'js ts',
    exec:'node'
});