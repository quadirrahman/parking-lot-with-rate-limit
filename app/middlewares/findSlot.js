const dotenv = require('dotenv');
dotenv.config();

module.exports.findSlot = () => {
    var lotSize = process.env.PARKING_LOT_SIZE
    if(lotSize > 0) {
        process.env.PARKING_LOT_SIZE = process.env.PARKING_LOT_SIZE - 1
        return process.env.PARKING_LOT_SIZE
    } else {
        return -1
    }   
}

