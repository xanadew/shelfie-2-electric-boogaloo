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
        .then(bins=>{res.status(200).send(bins)})               // shelfie-2, shelfie-3
        .catch(()=>{res.status(500).send()});             // status codes are important to include in api requests becauses they
    },                                                    // give detailed responses depending on the method used in the request.
    conjureBin: (req,res,next) => {                       // status 200 sends a body in the response, which is needed for 3/4 crud operations
        const db = req.app.get('db');                     // and status 500 sends a catch-all, generic server error. error codes could 
        let {shelfid, bin, product_name, price} = req.body; // be tailored with a JSON for the rejected api call, and both errors and 2xx codes can 
        db.createBin([shelfid, bin, product_name, price])   // have informational JSONs appended to them. http requests in api calls via axios/ajax are what make an api RESTful
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