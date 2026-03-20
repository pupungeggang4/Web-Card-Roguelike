window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    game = new Game()
    game.run()
}

function errorHandle(msg, url, line, col, err) {
    if (err != null) {

    }
}

function rightClick() {
    return false
}
