function GenerateNumber () {
	
}
let timer = 0
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(0)
radio.setGroup(123)
let score = 0
GenerateNumber()
basic.forever(function () {
    let MyNumber = 0
    if (MyNumber > 0) {
        radio.sendNumber(MyNumber)
        timer += 1
    }
})
