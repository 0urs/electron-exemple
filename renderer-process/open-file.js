const ipc = require('electron').ipcRenderer
const fs  = require('fs')

const selectDirBtn = document.getElementById('openfile')

//Création d'un evenement pour intercepter le clique sur
//le bouton et l'envoyer au main process grâce à ipc
selectDirBtn.addEventListener('click', function (event) {

	ipc.send('open-file-dialog')

})

//Evenement qui reviens du main process une fois un 
//fichier selectionné par l'utilisateur et qui l'affiche
ipc.on('selected-directory', function (event, path) {

	fs.readFile(path[0], (err, data) => {

		if (err) {
			throw err;
		}

		document.getElementById('textbox').innerHTML = data

	});

})
