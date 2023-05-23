function NumberMatch () {
    MyNumber = 0
    basic.showIcon(IconNames.Yes)
    score += 3
    if (score > 24) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.pause(3000)
        GenerateNumber()
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (MyNumber > 0) {
        if (receivedNumber == MyNumber) {
            NumberMatch()
        } else {
            NumberMismatch()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(MyNumber)
})
function GenerateNumber () {
    MyNumber = randint(1, 5)
    basic.showNumber(MyNumber)
    timer = 0
}
function NumberMismatch () {
    basic.showIcon(IconNames.No)
    score += -1
    if (score < 0) {
        score = 0
    }
    basic.pause(2000)
    basic.showNumber(MyNumber)
}
input.onButtonPressed(Button.B, function () {
    ShowScore()
})
function ShowScore () {
    basic.clearScreen()
    for (let index = 0; index <= score; index++) {
        led.plot(index % 5, index / 5)
    }
}
let timer = 0
let MyNumber = 0
let score = 0
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(0)
radio.setGroup(123)
score = 0
GenerateNumber()
basic.forever(function () {
    if (MyNumber > 0) {
        radio.sendNumber(MyNumber)
        timer += 1
        if (timer > 10) {
            GenerateNumber()
        }
        basic.pause(1000)
    }
})
