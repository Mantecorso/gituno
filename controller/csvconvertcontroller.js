var Controller = require('controller');
var Csv = require('csv');

class csvController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    csvConvert() {
        var sitio = this.req.file.destination + "/" + this.req.file.filename;
        var csv = new Csv(sitio);
            csv.convertToJson()
            .then(data => {
                console.log(JSON.stringify(data))
                this.res.json(data)
            })
            .catch(event => {
                console.error(event)
                this.res.json('Error en la conversion a JSON' + event)
            }); 
    }
}

module.exports = csvController;