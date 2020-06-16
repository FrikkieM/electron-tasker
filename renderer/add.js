'use strict';

const { ipcRenderer } = require('electron');

document.getElementById('todoForm').addEventListener('submit', (e) => {
    e.preventDefault();

    //input on the form
    console.log(e.target);
    const input = e.target[0];

    ipcRenderer.send('add-todo', input.value);

    // reset input
    input.value = '';
})