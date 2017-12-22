const request = require('request');

module.exports = {
    control: function (req, res) {
	return new Promise((resolve, reject) => {
	    request.get('http://temp.default:8080', (err, tempResp) => {
		if (err) {
		    reject(err)
		} else {
		    const temp = JSON.parse(tempResp.body).temp
		    request.post('http://thermostat.default:8080', {form:{temp}}, (err, thermostatResp) => {
			if (err) {
			    reject(err)
			} else {
	  		    let message = `Temperature measured: ${temp} degrees. Action: ${thermostatResp.body}`
			    if (JSON.parse(tempResp.body).hum) {
			        message += `. Humidity: ${JSON.parse(tempResp.body).hum}%`
			    }
			    res.end(message);
                        }
		    });
		}
	    });
	});
  }
}

