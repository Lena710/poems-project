function displayPoem(response) {
     new Typewriter('#poem-element', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: '',
    });
}

function generatePoem(event) {
    event.preventDefault();

    let topicElement = document.querySelector('#user-topic');

    let poemElement = document.querySelector('#poem-element');
    poemElement.classList.remove('hidden');
    poemElement.innerHTML = `<div class='blink'>Generating a poem about ${topicElement.value}</div>`;

    let apiKey = 'b6bd5oaet2f63fa47b510ab2e1146be4';
    let prompt = `Write a poem about ${topicElement.value}. Separate each line with <br/>`;
    let context = 'You are a French poet, who writes 4-line poems about any subject. Sign with "SheCodes AI" inside <strong> element at the bottom ';
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
   

}

let poemFormElement = document.querySelector('#poem-form');
poemFormElement.addEventListener('submit', generatePoem);