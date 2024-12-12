var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Internacionalista')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡I hope you always find a reason to smile!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>code!</strong>')
    .pauseFor(2500)
    .start();