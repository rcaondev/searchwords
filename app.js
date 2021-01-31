const text = document.getElementById('text');
const originalText = text.innerHTML;
const input = document.getElementById('input');
const button = document.getElementById('button');


function highlightWord(){
    if (input.value) {
        const word = input.value.trim()
        const regexp = new RegExp(word, 'g')
        text.innerHTML = originalText.replace(regexp, `<mark>${word}</mark>`)
    };
};

button.addEventListener('click', highlightWord);