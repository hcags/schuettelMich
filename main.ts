input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(SaveGamer) && !Play) {
        Gamer += -1
        if (Gamer < 1) {
            Gamer = 5
        }
        basic.showNumber(Gamer)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (!(SaveGamer) && !Play) {
        SaveGamer = true
        basic.showNumber(Lifes)
        basic.pause(500)
        basic.showNumber(Gamer)

        basic.rgb(255,0,0)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(SaveGamer) && !Play) {
        Gamer += 1
        if (Gamer > 5) {
            Gamer = 1
        }
        basic.showNumber(Gamer)
    }
})
radio.onReceivedString(function (receivedString) {
    let splittetString = receivedString.split('-')
    if (splittetString[0] == 'difficult') {

        basic.showString(splittetString[1])

        Play = true
        basic.rgb(0,255,255)
        difficult = parseInt(splittetString[1])
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
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
        basic.rgb(0,255,0)
        basic.showNumber(Lifes)
    }
})
let difficult = 1
let Lifes = 5
let Gamer = 1
let Play = false
let SaveGamer = false
radio.setGroup(1)
SaveGamer = false
Play = false
basic.showNumber(Gamer)
input.onGesture(Gesture.Shake, function () {
    if (difficult >= 1) {
        shaked()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (difficult >= 2) {
        shaked()
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (difficult >= 2) {
        shaked()
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (difficult >= 2) {
        shaked()
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (difficult > 2) {
        shaked()
    }
})
function shaked() {
    if (Play) {
        radio.sendNumber(Gamer)
        Lifes += -1
        if (Lifes > 0) {
            basic.showString("" + (Lifes))
            if (Lifes < 3) {
                basic.rgb(0,255,255)
            }
        } else {
            basic.showIcon(IconNames.Skull)
            basic.rgb(255, 0, 0)
        }
        basic.pause(5000)
    }
}
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function() {
    radio.sendString('difficult-' + 2)
    basic.pause(2000)
    radio.sendString('gameStart')
})
