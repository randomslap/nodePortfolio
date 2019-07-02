module.exports = (app, path, db) => {
	app.get("/api/", (req, res) => {
		db.projects.find({}, (err, found) => {
			err ? console.log(err) : res.json(found);
		});
	});

	app.get("/api/:id", (req, res) => {
		db.projects.find({ _id: req.params.id }, (err, found) => {
			err ? console.log(err) : res.json(found);
		});
	});
};
