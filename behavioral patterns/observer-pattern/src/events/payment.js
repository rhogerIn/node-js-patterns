export default class Payment {
    constructor(paymentSubject) {
        this.paymentSubject = paymentSubject
    }

    creditCard(paymentData) {
        console.log(`\nA payment occured from ${paymentData.userName}`)
        this.paymentSubject.notify(paymentData)
    }
}