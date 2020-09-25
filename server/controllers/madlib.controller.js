const Madlib = require("../models/madlib.model")

class MadlibController {
    // create(req,res) {
    //     console.log(req.body);
    //     const newPet = new Pet(req.body);
    //     newPet.save()
    //         .then( () => res.json(newPet))
    //         .catch( errors => res.json(errors))
    // }

    getAll(req,res) {
        Madlib.find().sort("type")
            .then( madlib => res.json(madlib))
            .catch( errors => res.json(errors))
    }


    // getOne(req,res) {
    //     Pet.findOne({_id: req.params._id})
    //         .then( pet => res.json(pet))
    //         .catch( errors => res.json(errors))
    // }


    // update(req,res) {
    //     Pet.findByIdAndUpdate({_id: req.params._id},req.body, {runValidators: true})
    //         .then( () => res.json({msg: "ok"}))
    //         .catch( errors => res.json(errors))
    // }


    // remove(req,res) {
    //     Pet.findByIdAndRemove({_id: req.params._id})
    //         .then( () => res.json({msg: "ok"}))
    //         .catch( errors => res.json(errors))
    // }


}


module.exports = new MadlibController();