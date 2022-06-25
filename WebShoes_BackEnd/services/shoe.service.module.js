const shoeModel = require('../models/shoe.model')

class ShoeService{
    static list(req, res){
        shoeModel.find()
            .then((shoes)=> res.status(200).json(shoes))
            .catch(error => res.status(500).json(error))
    }

    static create(req, res){
        shoeModel.create(req.body)
            .then(shoe => res.status(201).json(shoe))
            .catch(error => res.status(500).json(error))
    }

    static delete(req, res){
        shoeModel.findByIdAndRemove(req.params.id)
            .then((shoes) => res.status(201).json(shoes))
            .catch(error => res.status(500).json(error))
    }

    static retrieve(req, res){
        shoeModel.findById(req.params.id)
            .then(shoe => res.status(201).json(shoe))
            .catch(error => res.status(500).json(error))
    }

    static update(req, res) {
        shoeModel.findByIdAndUpdate(req.params.id, req.body, {'new': true})
            .then(shoe => res.status(200).json(shoe))
            .catch(error => res.status(500).json(error))
    }
}

module.exports = ShoeService