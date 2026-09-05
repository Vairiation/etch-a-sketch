function createGrid(gridNum) {
    const body = document.querySelector('body');
    const grid = document.createElement('div');
    const setGridBtn = document.createElement('button');

    body.style.margin = '0';
    body.style.height = '100vh';
    grid.className = 'grid';
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.justifyContent = 'center';
    grid.style.alignItems = 'center'
    
    for (let i = 1; i <= gridNum; i++) {
        const row = document.createElement('div');

        row.className = 'row';
        row.style.flexDirection = 'row';
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';
        row.style.margin = '0';
        row.style.height = `${100/gridNum}vh`;
        
        for (let i = 1; i <= gridNum; i++) {
            const square = document.createElement('div');

            square.className = 'square';
            square.style.height = `${100/gridNum}vh`;
            square.style.aspectRatio = '1 / 1';
            square.style.border = '1px solid black';
            square.style.flexDirection = 'row';
            square.style.margin = '0';
            
            square.addEventListener('mouseenter', () => {
                square.style.transitionDuration = '0s';
                square.style.backgroundColor = 'red';
            })
            square.addEventListener('mouseleave', () => {
                square.style.transitionDuration = '5s';
                square.style.backgroundColor = 'transparent';
            })
            row.appendChild(square);
        }
        
        grid.appendChild(row);
    }

    setGridBtn.className = 'setGridBtn';
    setGridBtn.innerText = 'Set Grid';
    setGridBtn.style.border = '2px solid black 4px';
    setGridBtn.addEventListener('click', () => {
        const newGrid = prompt('How many square would you like per row of the grid?');
        
        document.querySelector('.grid')?.remove();
        document.querySelector('.setGridBtn')?.remove();
        createGrid(newGrid);
    })
    
    body.appendChild(setGridBtn);
    body.appendChild(grid);
}

createGrid(16);