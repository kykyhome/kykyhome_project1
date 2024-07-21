basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("" + (input.temperature()))
basic.pause(1000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.temperature()))
        basic.pause(1000)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (input.lightLevel()))
        basic.pause(1000)
    }
})
