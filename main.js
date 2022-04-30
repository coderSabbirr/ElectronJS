const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});
