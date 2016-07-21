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
var round = 1;
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
		var	testBool=false,testBool2=false;
		for (var i = 0; i < wizards.length; i++) {
			if(i!=player&&i!=opponent){
				var newWiz = $("<div/>").addClass("wizard col-sm-2").attr('wizard-id', i).html('<span class="name">'+ wizards[i].name +'</span><img class="imgWiz" src="assets/images/'+ wizards[i].image +'"><span class="points">'+ wizards[i].health +'</span>');
				//console.log("displaying: " +wizards[i].name);
				if(first===0){
					//console.log("displaying: " +wizards[i].name+" this is the first one");
					$("#charStart").append(newWiz.addClass("col-sm-offset-1"));
					first++;
				}
				else{
					//console.log("displaying: " +wizards[i].name);
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
		$(".wizard").on("click",function(){
		//select a character with the id of the clicked character
			selectWizard(this.getAttribute("wizard-id"))
	})
	}

	function selectWizard(index){
		//console.log(wizards[index].name+" was Selected");
		//checks to see if a player has been selected

		if(player===-1&&opponent===-1){
			//console.log("ADDING PLAYER")
			//if they have not put in the player's index 
			player=index;
			//place them on the dueling board
			placePlayer(index);
		}
		//checks to see if a opponent has been selected
		else if(opponent===-1){
			//console.log("ADDING Opponent")
			//if they have not put in the opponents's index 
			opponent=index;
			//place them on the dueling board
			placePlayer(index);
		}
	}
	function placePlayer(index){
		//if the player has been placed then this should be call for the opponent
		displayWizards();
		if(opponent!==-1){
			var newWiz = $("<div/>").addClass("opponent col-sm-3").attr('wizard-id', index).html('<span class="name">'+ wizards[index].name +'</span><img class="imgWiz" src="assets/images/'+ wizards[index].image +'"><span class="points">'+ wizards[index].health +'</span>');
				console.log("displaying: " +wizards[index].name);
				$('#opponent').html(newWiz);
				$(".rounds").html("<h1>Round: "+round+"</h1>");
		}
		//otherwise we are placing the player
		else{
			var newWiz = $("<div/>").addClass("player col-sm-offset-2 col-sm-3").attr('wizard-id', index).html('<span class="name">'+ wizards[index].name +'</span><img class="imgWiz" src="assets/images/'+ wizards[index].image +'"><span class="points">'+ wizards[index].health +'</span>');
				console.log("displaying: " +wizards[index].name);
				$('#player').html(newWiz);
				$('#versus').html('<h1>Attack</h1>');
		}
		//displayWizards();
	}

	$("#versus").on("click",function(){
		console.log("attack");
		//on attack  take away heath from both characters
		//check and see if either character's hp is <= 0 
		// if the player is <=0 
			//game over
		// if the enemy is <=0 
			//move enemy to defeated colomn 
			// go back to enemy selection
			//if no other enemies exist restart game
	});

	//make possable players
	var wizards = new Array(5);
		wizards[0] = new makeWizard ('Harry', 'harry.jpg', 120, 15, 25);
		wizards[1] = new makeWizard ('Ron', 'ron.jpg', 130, 25, 30);
		wizards[2] = new makeWizard ('Hermione', 'hermione.jpg', 90, 40, 50);
		wizards[3] = new makeWizard ('Malfoy', 'malfoy.jpg', 150, 35, 40);
		wizards[4] = new makeWizard ('Neville', 'neville.jpg', 200, 5, 20);

	//display the players
	//console.log("displaying");
	displayWizards();
	//set on click for player and opponent
	
});