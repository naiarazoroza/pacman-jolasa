let pacman = game.createSprite(2, 4)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
    basic.pause(400)
    if (input.acceleration(Dimension.X) < 200) {
        pacman.move(-1)
    } else if (input.acceleration(Dimension.X) > -200) {
        pacman.move(1)
    } else if (input.acceleration(Dimension.Y) > 200) {
        pacman.move(1)
    } else if (input.acceleration(Dimension.Y) < -200) {
        pacman.move(-1)
    }
})
