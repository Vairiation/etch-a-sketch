function createGrid(gridNum) {
    const body = document.querySelector('body');
    const grid = document.createElement('div');
    const style = document.createElement('style');
    
    style.textContent = `
        .square:hover {
            background-color: red;
            transition-duration: 0s;
        }
        .square {
            transition: 5s ease-in;
        }
    `;
    
    grid.className = 'grid';
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.justifyContent = 'center';
    grid.style.alignItems = 'center'
    grid.style.height = '100vh';
    grid.style.width = '100vw';
    
    for (let i = 1; i <= gridNum; i++) {
        const row = document.createElement('div');

        row.className = 'row';
        row.style.flexDirection = 'row';
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';
        row.style.width = '100vw';
        row.style.margin = '0';
        row.style.height = `${100/gridNum}vh`;
        
        for (let i = 1; i <= gridNum; i++) {
            const square = document.createElement('div');

            square.className = 'square';
            square.style.height = `${100/gridNum}vh`;
            square.style.width = `${100/gridNum}vw`;
            square.style.border = '1px solid black';
            square.style.flexDirection = 'row';
            square.style.margin = '0';
            row.appendChild(square);
        }
        
        grid.appendChild(row);
    }
    body.appendChild(style);
    body.appendChild(grid);

}

createGrid(16);