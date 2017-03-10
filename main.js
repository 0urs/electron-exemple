const electron 			   = require('electron')
const path                 = require('path')
const url                  = require('url')

const BrowserWindow 	   = electron.BrowserWindow
const app 				   = electron.app



let win

function createWindow () {

	win = new BrowserWindow({
		width: 1024, 
		height: 768
	})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	win.webContents.openDevTools()

	win.on('closed', () => {
		win = null
	})

}


app.on('ready', createWindow)

app.on('window-all-closed', () => {

	if (process.platform !== 'darwin') {

		app.exit()

	}

})

app.on('activate', () => {

	if (win === null) {

		createWindow()

	}

})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

require(path.join(__dirname, 'main-process/open-file.js'))