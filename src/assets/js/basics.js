const { app } = require("electron");
const $ = require("jquery");
const fs = require("fs");
const { ipcRenderer } = require("electron/renderer");

$("#closeWindow").on("click", () => {
    console.log('asdasdasd');
    ipcRenderer.send("close-window");
});

$("#minimizeWindow").on("click", function () {
    ipcRenderer.send("minimize-window");
});
