var data = {
	school: "General Assembly",
	city: "San Francisco",
	address: "225 Bush St, San Francisco, CA 94104",
	floor_number: "5",
	course: "Web Development Immersive",
	course_id: "WDI21",
	classrootm: "6",
	students: [{
		id: 0,
		last_name: "Farquhar",
		first_name: "Bradley",
		github_username: "farquhar86"
	}, {
		id: 1,
		last_name: "Preys",
		first_name: "Daniel",
		github_username: "danielpreys"
	}, {
		id: 2,
		last_name: "Monaghan",
		first_name: "Darragh",
		github_username: "darraghmonaghan"
	}],
	instructors: [
		"Justin Castilla",
		"Ilias Tsangaris",
		"Nathan Allen"
	]
}

function flower(){
	this.color = 'red';
	this.petals = 32;
	this.smellsPretty = true;
	this.sniff = function(){
		console.log("sniff sniff sniff");
	};
	this.smellsGood = function(ans){
		if(ans){
			console.log('smells good!');
		} else{
			console.log('stinks!');
		}
	};
	this.game = function(){
		var alternator = true;
		for(i = this.petals; i > 0; i--){
			var last = '';
			if(i === 1){last = '!'};
			if(!alternator){
				console.log('he loves me not' + last);
				alternator = !alternator;
			}else{
				console.log('he loves me' + last);
				alternator = !alternator;
			}
		}
	}
}