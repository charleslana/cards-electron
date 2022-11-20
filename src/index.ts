import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow;

app.on('ready', createWindows);

function createWindows(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: __dirname + '/preload.js',
    },
    show: false,
  });
  mainWindow.loadFile('./html/index.html');
  mainWindow.on('ready-to-show', () => mainWindow.show());
}

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('electron-reloader')(module);
} catch (_) {
  console.log();
}
