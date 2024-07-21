basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("" + (input.temperature()))
basic.pause(1000)
let Pressed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || Pressed == 0) {
        basic.showString("" + (input.temperature()))
        Pressed = 0
    }
    if (input.buttonIsPressed(Button.B) || Pressed == 1) {
        basic.showString("" + (input.lightLevel()))
        Pressed = 1
    }
})
