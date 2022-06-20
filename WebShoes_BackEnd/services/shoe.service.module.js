const shoeModel = require('../models/shoe.model')

class ShoeService{
    static list(req, res){
        shoeModel.find()
            .then(
                (shoes)=>{
                    res.status(200).json(shoes)
                }
            );
    }
}

module.exports = ShoeService