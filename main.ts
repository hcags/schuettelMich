input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Gamer += -1
    if (Gamer < 1) {
        Gamer = 5
    }
    basic.showNumber(Gamer)
})
let Gamer = 0
Gamer = 1
basic.showNumber(Gamer)
