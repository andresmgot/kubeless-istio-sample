const os = require('os')
module.exports = {
    sample: function (req, res) {
	// Return temperature
	res.json({
	    src: os.hostname(),
	    temp: `${Math.floor(Math.random() * 20)}`,
	    hum: `${Math.floor(Math.random() * 30)}`,
	})
  }
}
