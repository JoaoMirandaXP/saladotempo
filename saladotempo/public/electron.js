const electron = require('electron');

//Conexão com a interface do usuário
const { app , BrowserWindow } = electron;

const isDev = require('electron-is-dev');
//Conexão com o ambiente da aplicação
const path = require('path');

let mainWindow;

//node integration permite o acesso a API nativa electron
function createWindow(){
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    //Condicional if especial {bool ? true : false}
    isDev ? 'http://localhost:3000' :  `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`,
  );

  if(isDev){
    mainWindow.webContents.openDevTools();
  }
  // Arrow function ()=>{} -- Lembra .class sem nome e também lembra ao android studio e o que o app deve fazer
  mainWindow.on('closed', ()=>{
    mainWindow = null;
  });
}
//.on recebe o estado em tempo de execução, e uma função
app.on('ready', createWindow);

//O que é darwin?
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
// Alguns operadores lógicos js !== (true&&true){true} -> {false} , === (true&&true){true} -> {true}
app.on('activate', () => {
  if(mainWindow === null){
    createWindow();
  }
});
