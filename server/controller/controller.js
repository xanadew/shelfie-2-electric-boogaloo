module.exports = {
    retrieveBin: (req,res,next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        db.getBin([id[0], id[1]])
        .then((bin) => {res.status(200).send(bin)})
        .catch(()=>{res.status(500).send('nope')});
    },
    retrieveBins: (req,res,next) => {
        let {id} = req.params;
        const db = req.app.get('db');
        db.getBins([id])
        .then(bins=>{res.status(200).send(bins)})
        .catch(()=> res.status(500).send());
    },
    revitalizeBin: (req,res,next) => {
        const db = req.app.get('db');
        let {product_name, price} = req.body;
        let {id} = req.params;
        db.editBin([id[0], id[1], product_name, price])
        .then(bins=>{res.status(200).send(bins)})
        .catch(()=>{res.status(500).send()});
    },
    conjureBin: (req,res,next) => {
        const db = req.app.get('db');
        let {shelfid, bin, product_name, price} = req.body;
        db.createBin([shelfid, bin, product_name, price])
        .then((bins)=>{
                res.status(200).send(bins)})
        .catch((err)=>{res.status(500).send(err)});
    },
    banishBin: (req,res) => {
        const db = req.app.get('db');
        let {id} = req.params;
        db.deleteBin([id[0], id[1]])
        .then(()=>{res.status(200).send('GREAT SUCCESS')})
        .catch(()=>{res.status(500).send()});
    }

}