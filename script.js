const container = document.querySelector('#container');

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', "divPix");
        container.appendChild(cells);
    }
};



makeDivs(256);

const divvies = document.querySelectorAll('.divPix');

divvies.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'purple';
    })
})