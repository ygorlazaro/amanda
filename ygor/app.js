const p = document.querySelector('p');

document.querySelector('#btnAumentar').addEventListener('click', () => {
    const valor = p.innerText;

    const novoValor = ~~valor + 10;

    p.innerHTML = novoValor;
})

document.querySelector('#btnDiminuir').addEventListener('click', () => {
    const valor = p.innerText;

    const novoValor = ~~valor - 1;

    p.innerHTML = novoValor;
})
