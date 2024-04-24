const envFactorModel = require("../model/envFactor");

class envFactorController {
    constructor(model) {
        // console.log(model);
        this.model = model;
    }

    // async getAll(req, res) {
    //     try {
    //         const result = await this.model.getAll();
    //         res.json(result);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }

    getOne = async (req, res) => {
        try {
            // console.log(req.body);
            const result = await this.model.findOne({
                sensorID: req.body.sensorID,
            });
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    updateOne = async (req, res) => {
        try {
            const result = await this.model.findOneAndUpdate(
                {
                    sensorID: req.body.sensorID,
                },
                req.body, // show updated value
                {
                    new: true,
                }
            );

            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    createOne = async (req, res) => {
        try {
            const result = await this.model.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}

module.exports = new envFactorController(envFactorModel);
