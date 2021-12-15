let pacman = game.createSprite(2, 4)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        basic.pause(200)
        pacman.move(1)
    }
    if (input.acceleration(Dimension.X) < -200) {
        basic.pause(200)
        pacman.move(-1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        basic.pause(200)
        pacman.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        basic.pause(200)
        pacman.change(LedSpriteProperty.Y, -1)
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria = game.createSprite(randint(0, 4), randint(0, 4))
        janaria.set(LedSpriteProperty.Brightness, 10)
    }
    if (pacman.isTouching(mamua)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(500)
    mamua.move(1)
    mamua.ifOnEdgeBounce()
})
