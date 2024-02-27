


let btn = document.querySelector('button');
let inp = document.querySelector('input');
let hey = document.querySelector('.me');
let itemIdCounter = 0;
let pos = false;

btn.addEventListener('click', () => {
    if (inp.value.trim() === '') {
        inp.style.border = '2px solid red';
    } else if (inp.value.trim() !== '') {
        addto(inp.value.trim());
        inp.value = '';
    }
});

inp.addEventListener('keydown', (e) => {
    // pos=true;
    if(pos){
        inp.disabled
    } else if (inp.value.trim() === '') {
        inp.style.border = '2px solid red'
    } else if (e.key == 'Enter') {
        addto(inp.value.trim());
        inp.value = '';
    }
});

inp.addEventListener('input', () => {
    if (inp.value.trim() !== '') {
        inp.style.border = '5px solid green';
        inp.style.outline = 'none';
    } else {
        inp.style.border = '2px solid red';
    }
});

const disableEditButtons = () => {
    let editButtons = document.querySelectorAll('.edit-btn');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].disabled = true;
    }
};

const enableEditButtons = () => {
    let editButtons = document.querySelectorAll('.edit-btn');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].disabled = false;
    }
};

const addto = function (text) {
    const divItem = document.createElement('div');
    const sdivItem = document.createElement('div');
    const pargItem = document.createElement('p');
    divItem.classList.add('div-class');

    const itemId = `${itemIdCounter++}`;
    divItem.id = itemId;

    sdivItem.innerHTML = `<button class="edit-btn" id="${itemId}-edit"><i class="fas fa-pen-to-square"></i></button> <button class='delet-btn' id="${itemId}-delete"> <i class="fas fa-times"></i> </button>`;

    pargItem.innerHTML = text;
    divItem.appendChild(pargItem);
    divItem.appendChild(sdivItem);
    hey.appendChild(divItem);

    const editBtn = document.getElementById(`${itemId}-edit`);
    const deleteBtn = document.getElementById(`${itemId}-delete`);

    editBtn.addEventListener('click', () => {
        pos = true;
        disableEditButtons();
        

        const editTask = document.createElement('input');
        pargItem.replaceWith(editTask);
        let para = pargItem.innerText;
        editTask.value = para;
        editTask.focus();

        editTask.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                if (editTask.value.trim() !== '') {
                    pargItem.innerText = editTask.value;
                    editTask.replaceWith(pargItem);
                    enableEditButtons();
                    pos = false;
                } else {
                    divItem.remove();
                    enableEditButtons();
                }
            }
        });
    });

    deleteBtn.addEventListener('click', () => {
        divItem.remove();
        console.log(`Delete button clicked for item with id: ${itemId}`);
        enableEditButtons();
    });
};


