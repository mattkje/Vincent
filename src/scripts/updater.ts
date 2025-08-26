import {app} from 'electron'
import {autoUpdater} from 'electron-updater'

app.on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify()
    autoUpdater.on('update-downloaded', () => {
        autoUpdater.quitAndInstall()
    })
})