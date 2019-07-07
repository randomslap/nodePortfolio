$(document).ready(() => {
	sticky();

	const API = {
		getProjects: () => {
			return $.get("/api/");
		},
		getOneProject: () => {
			return $.get("/api/" + id);
		}
	};

	API.getProjects().then(data => {
		console.log(data);
		data.forEach(project => {
			const card =
				"<div class='card column' data-id= " +
				project._id +
				"><img class='projectImg' src=" +
				JSON.stringify(project.img) +
				"/><div class=content><div class='header'>" +
				project.name +
				"</div><div class='meta'>" +
				project.type +
				"</div><div class='description'>" +
				project.description +
				"</div></div></div>";
			$("div.ui.cards#projects").append(card);
		});
	});
});

const sticky = () => {
	$(".ui.sticky").sticky({
		context: "#2"
	});
	if ($(".ui.sticky").hasClass("fixed")) {
		console.log("menu is sticky");
	}
};

const progressBar = () => {};
