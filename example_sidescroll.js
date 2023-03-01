function draw_one_frame(cur_frac) {
  let sun_size = height/8;
  //Flower
  let flowerW = 55;
  let flowerH = 55;
  let elli_size = 40;
  let lineWeight = 4;
  let flowerX = 75;
  let flowerY = 20;

  noStroke();
  // sky
  fill(100, 100, 214);
  rect(0, 0, width, height);

  // sun
  fill(255, 255, 0);
  drawflower(0.25 * width, 0.10 * height, sun_size);

  // grass
  fill(0, 200, 0);
  rect(0, height/2, width, height/2);

  stroke(0);
  fill(100, 100, 100);

  let b1_y = 0.55 * height;
  let b2_y = 0.65 * height;

  let b1_size = height/12;
  let b2_size = height/6;

  let grid_points1 = [
   -0.25 * width,
    0.0 * width,
    0.25 * width,
    0.50 * width,
    0.75 * width,
    1.00 * width
  ]

  if (debugView) {
    stroke(255, 0, 0);
    strokeWeight(height/100);
    noFill();
    for(let i=0; i<grid_points1.length; i++) {
      rect(grid_points1[i], b1_y, b1_size, 2*b1_size);
    }    
  }

  //fill(100, 100, 100);
  noStroke();
  for(let i=0; i<grid_points1.length-1; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1])
    rect(cur_x_pos, b1_y, 5*b1_size, b1_size/5);
    //ellipse(cur_x_pos, b1_y, b1_size, 2*b1_size);
  }

  function drawflower(i,k) {


	  //// actual flower ///////
		  // flowerPetals
		  fill(255, 145, 138); //colour red
		  stroke(255, (k*0.4)%107, 18); //colour darker red
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

