function generatePoem(event) {
    event.preventDefault();
    new Typewriter('#poem-element', {
        strings: "Poem will <br/>be here",
        autoStart: true,
        delay: 1,
        cursor: '',
    });

}

let poemFormElement = document.querySelector('#poem-form');
poemFormElement.addEventListener('submit', generatePoem);