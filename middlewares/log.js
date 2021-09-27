module.exports = {
    log: (req, res, next) =>{
        console.log(Date.now());
        next();
    }
}