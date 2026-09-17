input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        level = Math.map(index, 0, 9, 0, 1023)
        pins.analogWritePin(AnalogPin.P8, level)
        basic.pause(500)
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P8, 0)
        basic.pause(100)
    }
})
let level = 0
basic.showString("H")
basic.pause(50)
basic.showString("B")
basic.pause(50)
basic.clearScreen()
