

const parag = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', (e)=>{
    const inp = document.querySelector('input');
    const newText = inp.value;

    parag.textContent += '\n' + newText;
    inp.value = '';
});

