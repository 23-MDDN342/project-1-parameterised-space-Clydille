function draw_one_frame(cur_frac) {
  

  noStroke();
  // sky
  fill(100, 100, 214);
  rect(0, 0, width, height);

  let flower1_Y = 1* height;
  let flower1_Size = height/7;

  let grid_points1 = [
    -0.5 * height, 
    0.25 * width,
    0.50 * width,
    1 * width,
    1.25 * width,
    1.50 * width
  ]

  // if (debugView) {
  //   stroke(255, 0, 0);
  //   strokeWeight(height/100);
  //   noFill();
  //   for(let i=0; i<grid_points1.length; i++) {
  //     rect(grid_points1[i], b1_y, b1_size, 2*b1_size);
  //   }    
  // } 

 //translate(height/3.5, width/10)
 //rotate(95)
  for(let i=0; i<grid_points1.length; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1]) 
    
    drawflower(cur_x_pos, flower1_Y, flower1_Y, flower1_Size)
  }

  function drawflower(height, width, size ) {

    let flowerW = 55;
    let flowerH = 55; 
    let elli_size = size/14;
    let lineWeight = 4;
    let flowerX = 0.5*width;
    let flowerY = 0.5* height;
  
push()
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
		  // stroke(255, 107, 18); //colour darker red
		  // curve(15, 45, 45, 50, 60, 61, 58, 58); // top_left
		  // curve(15, 45, 75, 72, 105, 105, 45, 55); // bottom_right
		  // stroke(255, 156, 51); //colour darker orange
		  // curve(15, 45, 75, 50, 50, 105, 40, 55); // bottom_left
		  // curve(75, 45, 105, 50, 60, 70, 25, 25); // top_right
	  
		  //middle part
		  fill(249, 255, 87); //colour yellow
		  stroke(255, 204, 0); //colour darker yellow
		  ellipse(flowerX, flowerY + 55, elli_size); //middle
		pop()
	  
	  }

  // let grid_points2 = [
  //  -0.40 * width,
  //   0.10 * width,
  //   0.60 * width,
  //   1.10 * width
  // ]

  // if(debugView) {
  //   stroke(255, 0, 0);
  //   strokeWeight(height/100);
  //   noFill();
  //   for(let i=0; i<grid_points2.length; i++) {
  //     rect(grid_points2[i], b2_y, b2_size, 2*b2_size);
  //   }    
  // }

  // fill(100, 100, 100);
  // noStroke();
  // for(let i=0; i<grid_points2.length-1; i++) {
  //   let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
  //   rect(cur_x_pos, b2_y, b2_size, 2*b2_size);
  // }
}

