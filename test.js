const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  win.setTitle('Fyntrax')
  win.loadURL('https://app.fyntrax.com')

  console.log(win.webContents)
})

