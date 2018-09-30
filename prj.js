	function assign_img(){
		//alert('Is this working') Comment to check if the function is working
	
		var table = ''
		var rows=4
		var columns=4

		var num_array=[0,0,0,0,0,0,0,0] //Array to hold the number of occurrences of each number currently in the table
		var x=0
		var cellcount=1 //variable used for image's name attribute (Numbers 1-8). 
		var assignment=0 //variable used for image's location on the table
		var num_array2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	
		//creation of table, table elements, and image assignment
		for(var r = 1; r<=rows;r++){	
			table += '<tr>'
			for(var c=1; c<=columns; c++){
				var y=0;
				while(y==0){ //loop will continue until it finds a number with less than two occurrences to assign. E.g: #2 won't be assigned if it already exists two times in the table
					x=Math.floor((Math.random() * 8) + 1) //random number generator from 1-8
					if(num_array[x-1]<2){ 
						assignment++
						cellcount=x
						num_array[x-1]++
						y=1
					}		
				num_array2[assignment]=x;
				} 
				table+='<td>' + '<div class="img-container">' + '<img src="question.png"' +'id="'+ assignment + '" ' + 'name="' + cellcount + '" ' + 'class="zintwo" onclick="return zChanger('+ assignment +')"' + ' />' +'<img src="' + cellcount + '.png" class="zinone" />' + '</div>' + '</td>'
			}
			table += '</tr>'
		}
		document.write('<table border=1>' + table + '</table>')	
	}

	//flip function
	var z=0;
	var idCheck='';		//holds image element+attributes from onclicked image
	var nameCheck=''	//holds image element's name value
	var temp='';		//temp value to hold 1st selected cell while 2nd is being selected
	var tempIdCheck=''; //this is for temp style zindex
	var saver=''; //extra temp value to hold 2nd selected cell value in case the player selects a 3rd cell by accident

	function zChanger(quest){
		idCheck = document.getElementById(quest); 
		if(z<2){
			idCheck.style.zIndex="0";
			nameCheck=document.getElementById(quest).name;
			if(z==0){
				temp=idCheck;
			}
			z++;
			saver=idCheck;
		}
		else{ //if player selects more than 2 cells, they are alerted to hit the match button
			alert('Press match');	
			idCheck=saver; //idCheck is reverted from 3rd selected back to 2nd selected cell
		}
	
	}

	//function for match button
	var matchcount=0; //keeps track of player's score
	function matchbutton(){
		if(z<2){ //if player selects less than 2 cells, they are alerted
			alert('Select 2 cells!');
			idCheck.style.zIndex="2";
			temp.style.zIndex="2";
			idCheck='';
			temp='';
			z=0;
		}
	else{ //if player doesn't select any cells, they are alerted
		if(idCheck==''||temp==''){
			alert('Select 2 cells!')
			idCheck.style.zIndex="2";
			temp.style.zIndex="2";
			idCheck='';
			temp='';
	}

	else{ 
	//if the names of the selected images/cells match, score goes up, player is alerted of the match, number of selected values goes back to zero/blank for next turn
	//if matchcount is 8, player is alerted that they won and instructed to press the Restart button if they want to play again
		if(idCheck.name==temp.name){
			matchcount++;
			alert('You got a match! Score: '+matchcount);
			z=0;
			if(matchcount==8){
			alert('You win! Press restart to commence another game!')
		}
	}
	else{ //Player is alerted that their match is incorrect, and the number of selected values set back to zero/blank
		alert('Incorrect match!');
		z=0;
		idCheck.style.zIndex="2";
		temp.style.zIndex="2";
		idCheck='';
		temp='';
	}
	
	}
}
}

$(function(){
		$("#tabs").tabs();
		$("#datepicker").datepicker({
			onSelect: function(dateText, inst){
				$('#title').text("You picked: " + dateText);
			}
			
		});
	});

	
	var POP = {}
	POP.poop='12'
	POP.pup={
		name: 'Kuk',
		number: 12
	}
	
	
	
	var r = /(\d{1,3},?)*\d{1,3}\s?(¥|[Jj][Pp][Yy])/g;

$(function(){
	var x = document.getElementById("poop").textContent;
	alert(r.test(x));
	
});
	
	
$(function() {
	
	$('#success').hide();
	$('p:contains("jpy")').addClass('highlight');
});

var score=0;
function scorePlus(){
	score+=1;
	$('#score').text(score);
}

function restart(){
	score=0;
	$('#score').text(score);
}

function fadescore(){
	$('#success').show().fadeOut(2000);
}
