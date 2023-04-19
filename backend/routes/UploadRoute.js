const {Router} = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const router = Router();
const UploadModel = require("../models/UploadModel");


router.get("/api/get", async (req,res) => {
    const allPhotos = await UploadModel.find().sort({createdAt: "descending"});
    res.status(200).send(allPhotos)
});

router.post("/api/save", uploadMiddleware.single("photo"), (req,res) => {
    const photo = req.file.filename;

    console.log(photo);


    UploadModel.create({photo})
    .then((data) => {
        console.log("Uploaded Successfully");
        console.log(data);
        res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;