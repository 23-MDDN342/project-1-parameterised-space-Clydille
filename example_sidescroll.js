function draw_one_frame(cur_frac) {
  

  noStroke();
  /// bg ///
  fill(55, 13, 110);
  rect(0, 0, width, height);

  let flower1_Y = 0.55* height;
  let flower1_Size = height;


/// Flowers going down ////
let grid_points1 = [
  -0.50 * height, 
  0.25 * width,
  0.50 * width,
  1 * width,
  1.50 * width,
  2.50 * width
]
  // let grid_points1 = [
  //   -0.5 * height, 
  //   0.25 * width,
  //   0.50 * width,
  //   1 * width,
  //   1.25 * width,
  //   1.50 * width
  // ]

  if (debugView) {
    stroke(255, 0, 0);
    strokeWeight(height/100);
    noFill();
    for(let i=0; i<grid_points1.length; i++) {
      drawflower(grid_points1, flower1_Y, flower1_Size, flower1_Size)
    }   
  } 

  for(let i=0; i<grid_points1.length; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1]) 
    push()
    drawflower(cur_x_pos, flower1_Y, flower1_Size, flower1_Size)///first flower
    translate(height/1.8, 0)
    drawflower(cur_x_pos, flower1_Y, flower1_Size, flower1_Size) /// third flower
    translate(height/1.8, 0)
    drawflower(cur_x_pos, flower1_Y, flower1_Size, flower1_Size) /// third flower
    pop()
  }

  /// Flowers going up ////
  let grid_points2 = [
    2.50* width, 
    1.50 * width,
    1 * width,
    0.50 * width,
    0.25 * width, 
    -0.50 * height
  ]
  
  for(let i=0; i<grid_points2.length; i++) {
    let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1]) 
    push()
    translate(height/3.5, width/10)
    drawflower(cur_x_pos, flower1_Y, flower1_Size, flower1_Size) /// second flower
    translate(height/1.8, 0)
    drawflower(cur_x_pos, flower1_Y, flower1_Size, flower1_Size) /// forth flower
    pop()
  }

/// Drawing flower ////
  function drawflower(height, width, size) {

    let flowerW = 55;
    let flowerH = 55; 
    let elli_size = 35;
    let lineWeight = 4;
    let flowerX = 0.55*width;
    let flowerY = 0.55*height;
  
    push()
	  //// actual flower ///////
		  // flowerPetals
		  fill(255, 145, 138); //colour red
		  stroke(133, 23, 63); //colour darker red
		  strokeWeight(lineWeight);
		  rect(flowerX - 55, flowerY, flowerW, flowerH, 20); // top_leftpetal
		  rect(flowerX, flowerY + 55, flowerW, flowerH, 20); // bottom_rightpetal
		  fill(255, 175, 97); //colour orange
		  stroke(145, 69, 15); //colour darker orange
		  strokeWeight(lineWeight);
		  rect(flowerX - 55, flowerY + 55, flowerW, flowerH, 20); // bottom_leftpetal
		  rect(flowerX, flowerY, flowerW, flowerH, 20); // top_rightpetal
	  
		  //middle part
		  fill(249, 255, 87); //colour yellow
		  stroke(255, 204, 0); //colour darker yellow
		  ellipse(flowerX, flowerY + 55, elli_size); //middle
		pop()
	  
	  }

}

