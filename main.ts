let Beepnumber = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(input.temperature())
    Beepnumber = 0
    if (input.temperature() >= 29) {
        Beepnumber = input.temperature() - 30
    }
    for (let Index = 0; Index <= Beepnumber; Index++) {
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    basic.pause(1000)
})
