import * as PIXI from 'pixi.js'
import buttCoinPNG from '/assets/buttcoin.png'
import { plusOrMinus, map } from './utils/math'

const app = new PIXI.Application({
  autoResize: true,
  resolution: devicePixelRatio,
  resizeTo: window,
})
document.body.appendChild(app.view)

const amount = 200000
const sprites = new PIXI.ParticleContainer(amount, {
  scale: true,
  position: true,
  rotation: true,
  uvs: true,
  alpha: true,
})

const buttcoin = []
const totalSprites = app.renderer instanceof PIXI.Renderer ? amount : 100

let appWidth, appHeight, appMargin
appWidth = app.screen.width
appHeight = app.screen.height
appMargin = appWidth / 4

const gravity = 2

for (let i = 0; i < totalSprites; i++) {
  const bc = PIXI.Sprite.from(buttCoinPNG)

  bc.anchor.set(0.5)

  // spread buttcoin around
  bc.x = map(Math.random(), 0, 1, appMargin, appWidth - appMargin)
  bc.y = appHeight / 4

  // randomly set direction left or right
  bc.direction = Math.random() * plusOrMinus() * 3
  bc.acceleration = -3.5

  bc.applyGravity = () => bc.acceleration * gravity
  bc.remove = () => bc.remove()

  buttcoin.push(bc)
  sprites.addChild(bc)
}

let count = 0
let tick = 0
let done = 0
const intervalTime = map(amount, 1, 200000, 100, 10)
const interval = setInterval(() => {
  if (count < amount - 1) {
    app.stage.addChild(buttcoin[count])
    count++
  } else {
    clearInterval(interval)
  }
}, intervalTime)

const loop = app.ticker.add(() => {
  for (let i = 0; i < count; i++) {
    const bc = buttcoin[i]

    bc.acceleration += 0.2
    bc.x += bc.direction
    bc.y += bc.applyGravity()

    if (bc.y > appHeight + bc.height) done++
    tick += 0.1
  }

  if (done === amount) loop.destroy()
})

const resize = () => {
  app.renderer.resize(window.innerWidth, window.innerHeight)
  appWidth = app.screen.width
  appHeight = app.screen.height
  appMargin = appWidth / 4
}

resize()
window.addEventListener('resize', resize)
