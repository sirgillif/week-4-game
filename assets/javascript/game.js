/*	
	.append() to add things to the class
	.hide() to no linger show things in the box	
*/

/*
	Star wars RPG
	1. populate players at the top of the page
	2. choose a player as your character
	3. choose an enemy to attack
	4. attack enemy until on of the 2 of you are dead
	5. if you died 
		a. restart game
	6. if you didn't die
		a. choose next opponent
		b. fight next opponent
		c. if you die
			i. do #5
		d. if you dont die
			i. do # 6 until out of enemies	 

	for each unique game your player's attack increases on each hit by his/her origional attack power
	eg. round 1. 8 pts 
		round 2. 16 pts
		round 3. 24 pts
		... etc
*/
	
//global
var player = -1;
var opponent = -1;
var round = 0;
//populate players 
$(document).ready(function() {
	//functions
	function makeWizard(name, image, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
	}
	function displayWizards(){
		$("#charStart").empty();
		var first=0;
		for (var i = 0; i < wizards.length; i++) {
			if(i!==player&&i!==opponent){
				var newWiz = $("<div/>").addClass("wizard col-sm-2").attr('wizard-id', i).html('<span class="name">'+ wizards[i].name +'</span><img class="imgWiz" src="assets/images/'+ wizards[i].image +'"><span class="points">'+ wizards[i].health +'</span>');
				console.log("displaying: " +wizards[i].name);
				if(first===0){
					console.log("displaying: " +wizards[i].name+" this is the first one");
					$("#charStart").append(newWiz.addClass("col-sm-offset-1"));
					first++;
				}
				else{
					console.log("displaying: " +wizards[i].name);
					$("#charStart").append(newWiz);
				}

			}
		}
		if (player<0) {
			$(".rounds").html("<h1>Select your player</h1>");
		}
		else if (opponent<0) {
			$(".rounds").html("<h1>Select your opponent</h1>");
		}
	}
	function selectWizard(index){
		//console.log(wizards[index].name+" was Selected");
		//checks to see if a player has been selected
		if(player<0){
			//if they have not put in the player's index 
			player=index;
			//place them on the dueling board
			placePlayer();
		}
		//checks to see if a opponent has been selected
		else if(opponent<0){
			//if they have not put in the opponents's index 
			opponent=index;
			//place them on the dueling board
			placePlayer();
		}
	}
	function placePlayer(){
		if(opponent<0){

		}
		else{
			
		}
	}


	//make possable players
	var wizards = new Array(5);
		wizards[0] = new makeWizard ('Harry', 'harry.jpg', 120, 20, 25);
		wizards[1] = new makeWizard ('Ron', 'ron.jpg', 130, 25, 30);
		wizards[2] = new makeWizard ('Hermione', 'hermione.jpg', 90, 40, 50);
		wizards[3] = new makeWizard ('Malfoy', 'malfoy.jpg', 150, 35, 40);
		wizards[4] = new makeWizard ('Neville', 'neville.jpg', 200, 10, 35);

	//display the players
	//console.log("displaying");
	displayWizards();
	//set on click for player and opponent
	$(".wizard").on("click",function(){
		//select a character with the id of the clicked character
		selectWizard(this.getAttribute("wizard-id"))
	})
});