const {app, BrowserWindow} = require('electron')
const ipcMain = require('electron').ipcMain;

let controllerWindow;
let outputWindow;

function createWindows () {
	controllerWindow = new BrowserWindow({width: 800, height: 600})
	outputWindow = new BrowserWindow({width: 800, height: 600})

	// Dev
	controllerWindow.loadURL('http://localhost:4200/controller');
	outputWindow.loadURL('http://localhost:4200/output');

	// controllerWindow.webContents.openDevTools()

	controllerWindow.on('closed', function () {
		controllerWindow = null
	})
	outputWindow.on('closed', function () {
		outputWindow = null
	})

	ipcMain.on('data', (event, arg) => {
		console.log(arg);
		outputWindow.webContents.send('data', arg);
	});
}

app.on('ready', createWindows)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// if (mainWindow === null) {
	// 	createWindow()
	// }
})

// ipcMain.on('lvsi-data', (event, arg) => {
// 	// Capture and process question
// 	console.log('capturing and processing HQ screen...');
// 	questionNumber = arg.number;
// 	var script = exec('sh ' + path.resolve(__dirname, 'hqtrivia-linux.sh'), parseCapture);
// });
