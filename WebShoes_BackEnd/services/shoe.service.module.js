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

    static create(req, res){
        shoeModel.create(req.body)
            .then(
                (shoe) => {
                    res.status(201).json(shoe)
                }
            )
            .catch(err => console.log(err))
    }
}

module.exports = ShoeService