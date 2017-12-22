module.exports = {
    handler: (req, res) => {
	if (req.body.temp > 5) {
	    res.end('Decreasing!')
	} else {
	    res.end('Increasing!')
	}
    }
};
