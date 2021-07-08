const Slot = require('../models/slot')
const { findSlot } = require('../middlewares/findSlot')
const slotController = {}



module.exports.create = (req, res) => {
    const body = req.body 
    const slot = new Slot(body)
    let available = findSlot()
    if(available === -1) {
        res.send("Parking Full")
    } else {
        slot.slotNumber = available
        slot.save()
        .then(slot => res.json(slot.slotNumber))
        .catch(err => res.json(err))
    }
}

module.exports.show = (req, res) => {
    const carNumber = req.body.carNumber
    const slotNumber = req.body.slotNumber
    
    
    Slot.find( {slotNumber: slotNumber, carNumber: carNumber} )
        .then(slot => {
            console.log(slot)
            res.json(slot)
        })
    .catch(err => {
            console.log(err)
            res.json(err)
        })
}


module.exports.destroy = (req, res) => {
    const id = req.params.id 
    Slot.findOneAndDelete({ slotNumber: req.body.slotNumber })
        .then(slot => {
            if(!slot) {
                res.send('Car is not parked')
            } else {
                res.json(slot) 
            }
            
        })
        .catch(err => {
            res.send('Something went down')
        })
}