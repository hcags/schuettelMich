input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("gameStart")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(SaveGamer)) {
        Gamer += -1
        if (Gamer < 1) {
            Gamer = 5
        }
        basic.showNumber(Gamer)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (!(SaveGamer)) {
        SaveGamer = true
        basic.showNumber(Lifes)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(SaveGamer)) {
        Gamer += 1
        if (Gamer > 5) {
            Gamer = 1
        }
        basic.showNumber(Gamer)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Play) {
        radio.sendNumber(Gamer)
        Lifes += -1
        if (Lifes > 0) {
            basic.showString("" + (Lifes))
        } else {
            basic.showIcon(IconNames.Skull)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "gameStart") {
        Play = true
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showNumber(Lifes)
    }
})
let Lifes = 0
let Gamer = 0
let Play = false
let SaveGamer = false
radio.setGroup(1)
SaveGamer = false
Play = false
Gamer = 1
basic.showNumber(Gamer)
Lifes = 5
