import PaymentSubject from '../src/subjects/paymentSubject.js'
import Payment from '../src/events/payment.js'

import Shipment from '../src/observers/shipment.js'
import Marketing from '../src/observers/marketing.js'

const subject = new PaymentSubject()
const shipment = new Shipment()
const marketing = new Marketing()

// Subscribe department to be notify
subject.subscribe(shipment)
subject.subscribe(marketing)

const payment = new Payment(subject)
// Should send a payment notify to subscribed departments 
payment.creditCard({ userName: 'rogerio teste', id: Date.now() })

// let's say that the marketing department no longer wants to be notified
subject.unsubscribe(marketing)

// Should send a payment notify to subscribed departments
payment.creditCard({ userName: 'Little Maria', id: Date.now() })