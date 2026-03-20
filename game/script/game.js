class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
    }

    run() {
        this.frameCurrent = 0
        this.framePrevious = 0
        this.dt = 0
        this.scene = new SceneTitle(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.dt = (this.framePrevious - this.frameCurrent) / 1000
        this.framePrevious = this.frameCurrent

        this.scene.loop(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - this.targetRect.left) / this.targetRect.width * this.canvas.width,
            y: (event.clientY - this.targetRect.top) / this.targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseUp(this, pos, button)
    }
}
