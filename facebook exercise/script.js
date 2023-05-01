var database = [
	{
		username : "hyokito",
		password : "adit1234"
	},
	{
		username : "kunimitsu",
		password : "1234adit"
	},
	{
		username : "conan",
		password : "4321tida"
	}
];

var newsFeed = [
	{
		username : "adit",
		timeline : "great day"
	},
	{
		username : "krisna",
		timeline : "bad day"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
	for (var i = 0; i < database.length; i++){
		if(username === database[i].username && password === database[i].password){
			return true;
		}
	}
	return false;
}

function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(newsFeed);
	} else{
		alert("Wrong username or password!");
	}
}

signIn(userNamePrompt, passwordPrompt);