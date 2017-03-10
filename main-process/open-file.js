const ipc    = require('electron').ipcMain
const dialog = require('electron').dialog


ipc.on('open-file-dialog', function (event) {

	dialog.showOpenDialog({

		properties: [
			'openFile',
			'multiSelections'
		],

		filters: [{
			name: 'texte',
			extensions: ['txt', 'js']
		}]

	}, 

	function (files) {

		//Si un fichier a bien été selectionné alors on emet
		//un evenement pour le renderer process
		if (files) {
			event.sender.send('selected-directory', files)
		}

	})

})
