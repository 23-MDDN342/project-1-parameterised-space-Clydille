var x=300;
var y=300;
var a=100;
var b=100;
//Flower
var flowerW = 55;
var flowerH = 55;
var elli_size = 40;
var lineWeight = 4;
var flowerX = 75;
var flowerY = 20;

function draw_one_frame() {
	//background(255);
    x+=2;
    y+=2;
	a-=2;
	b-=2;

translate(width/2, height/2);

	for(var i=0;i<15;i++){
		for(var k=0;k<20;k++){
			rotate(PI / 12.0)
	ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4)
	push()
	translate(a%100,b%100,x%300,y%300)
	rotate(PI / 12.0)
	drawflower(k,x);
	pop()
	
		}
	}
	function drawflower(i,k) {


	  //// actual flower ///////
		  // flowerPetals
		  fill(255, 145, 138); //colour red
		  stroke(255, 107, 18); //colour darker red
		  strokeWeight(lineWeight);
		  rect(flowerX - 55, flowerY, flowerW, flowerH, 20); // top_leftpetal
		  rect(flowerX, flowerY + 55, flowerW, flowerH, 20); // bottom_rightpetal
		  fill(255, 175, 97); //colour orange
		  stroke(255, 156, 51); //colour darker orange
		  strokeWeight(lineWeight);
		  rect(flowerX - 55, flowerY + 55, flowerW, flowerH, 20); // bottom_leftpetal
		  rect(flowerX, flowerY, flowerW, flowerH, 20); // top_rightpetal
	  
		  //the cruves in the petals
		  stroke(255, 107, 18); //colour darker red
		  curve(15, 45, 45, 50, 60, 61, 58, 58); // top_left
		  curve(15, 45, 75, 72, 105, 105, 45, 55); // bottom_right
		  stroke(255, 156, 51); //colour darker orange
		  curve(15, 45, 75, 50, 50, 105, 40, 55); // bottom_left
		  curve(75, 45, 105, 50, 60, 70, 25, 25); // top_right
	  
		  //middle part
		  fill(249, 255, 87); //colour yellow
		  stroke(255, 204, 0); //colour darker yellow
		  ellipse(flowerX, flowerY + 55, elli_size); //middle
		
	  
	  }
  }

// function draw_one_frame() {
//   //background(255);
//   x+=2;
//   y+=2;
// 	a-=2;
// 	b-=2;
// 	strokeWeight(1);
//   translate(width/2, height/2);
//   for(var i=0;i<15;i++){
// 	  for(var k=0;k<20;k++){
// 		stroke(255,255,255);
//     rotate(PI / 12.0);
// 	  fill(255,255-i*10,255-k*10);
//   	line(a%100,b%100,x%300,y%300);
// 	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
// 		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
// 		rect(x%width, y%height, k+10, k+10);
// 		fill(0,i*10,255-k*10);
// 		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
// 		rotate(PI / 24.0);
// 		fill(255-(i+k)*5,(i+k)*7,i*20);
// 		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
// 		rect(a%width, b%height, k+5, k+5);
// 		drawflower(k,x);
// 	  }
//   }

// }

// function drawtriangle(x,y,r){
// 	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
// }

// function drawflower(i,k){
// 		if(i%2==1){
// 			fill(255,(k*0.4)%255,30);
// 			stroke(k%255,255,0);
// 			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
// 		}
// 		else{
// 			fill(k%255,0,255);
// 			stroke(0,(k*0.4)%255,255);
// 			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
// 		}
// }
