var projects ={
	"projects":[
		{"title": "chen-wang.net",
		"dates":"08/2015-present",
		"description": "My portfolio site that shows all my project",
		"images": "images/drawing.png"
		}
	]

};	
var bio ={
	"name": "Chen Wang",
	"role": "Web Developer",
	"contacts":{
		"mobile": "812-801-9475",
		"email": "chenwang16@outlook.com",
		"location": "Indianapolis"
	},
	"bioPic": "images/profile.jpg",
	"welcomeMessage": "Hi, this is Chen",
	"skills":["JS","HTML","CSS","Git&GitHub","C++","jQuery","AJAX","BootStrap"]
};
var education = {
	"school": "Hanover College",
	"majors": "Math&Music",
	"Minor": "CS",
	"yearsAttended": "2012-2016",
	"location": "Hanover,IN",
	"Online Courses": {
		"title": "JS basics",
		"school": "Udacity",
		"dates": "08/2015"
	}
};
var work = {
	"jobs":[
	{
		"title": "Camp Instructor",
		"employer": "iD Tech",
		"dates": "06/2015 - 07/2015",
		"location": "Bulter University",
		"description": "Foster a fun and safe environment while help students learn new technology and think creatively. "
	},
	{
		"title": "International Student Recruitment Fellow",
		"employer": "Hanover College",
		"dates": "08/2014-Present",
		"location": "Hanover College",
		"description": "Perform academic credential evaluations of prospective international students."
	}
	]
};


//display education 
education.display = function(){

	$("#education").append(HTMLschoolStart);
	var formattedSchool = HTMLschoolName.replace("%data%",education.school);
	var formattedMajors = HTMLschoolMajor.replace("%data%",education.majors);
	var formattedDates = HTMLschoolDates.replace("%data%",education.yearsAttended);
	var formattedloc = HTMLschoolLocation.replace("%data%",education.location);
	$(".education-entry:last").append(formattedSchool,formattedDates,formattedMajors,formattedloc);
}


//function that display bio in header
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage);

	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedlocation);

}


//locate the place worked
function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}


//function that display work
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer +formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}



function displayProject(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		// var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		// $(".project-entry:last").append(formattedImage);

	}
	
}

//add a map
$("#mapDiv").append(googleMap);

bio.display();
displayWork();
displayProject();
education.display();
