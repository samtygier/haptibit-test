input.onButtonPressed(Button.A, function () {
    if (mode == 1) {
        haptibit.playEffect(HapticEffect.StrongClick)
    } else if (mode == 2) {
        haptibit.playEffect(HapticEffect.SharpClick)
    } else if (mode == 3) {
        haptibit.playEffect(HapticEffect.SoftBump)
    } else if (mode == 4) {
        haptibit.playEffect(HapticEffect.DoubleClick)
    } else if (mode == 5) {
        haptibit.playEffect(HapticEffect.TripleClick)
    } else if (mode == 6) {
        haptibit.playEffect(HapticEffect.SoftFuzz)
    } else {
        haptibit.playEffect(HapticEffect.StrongBuzz)
    }
})
input.onButtonPressed(Button.B, function () {
    mode += 1
    if (mode > 7) {
        mode = 1
    }
    basic.showNumber(mode)
})
let mode = 0
basic.showString("H")
basic.pause(50)
basic.showString("B")
basic.pause(50)
basic.clearScreen()
mode = 1
basic.showNumber(mode)
