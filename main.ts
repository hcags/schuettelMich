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
    SaveGamer = true
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
let Gamer = 0
let SaveGamer = false
SaveGamer = false
Gamer = 1
basic.showNumber(Gamer)
