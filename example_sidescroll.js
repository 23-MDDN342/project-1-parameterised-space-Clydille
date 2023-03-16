function draw_one_frame(cur_frac) {
  

  noStroke();
  /// bg ///
  fill(56, 17, 51); //color for now
  rect(0, 0, width, height);



  let flower1_Y = 0.55* height;
  let flower1_Size = height;
  let leafX = width/29.5
  let leafY = height/21


/// Flowers going down ////
let grid_points1 = [
  -0.50 * height, 
  0.25 * width,
  0.50 * width,
  1 * width,
  1.50 * width,
  2.50 * width
]

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

    //Flowers
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

    /// leafs going up ////
    let grid_points3= [
      2.5* width, 
      1.50 * width,
      0.50 * width,
      -1 * height
    ]
 
    for(let i=0; i<grid_points3.length; i++) {
      let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1]) 
  
     /// Vines ///
     noStroke()
      rect(35, 0, 10, height) //stick
       drawleaf(cur_x_pos*5, leafY, flower1_Size/60, flower1_Size/60)
       
       translate(0, 0)
       drawleaf(cur_x_pos*5, leafY, flower1_Size/60, flower1_Size/60)

    }

///Drawing leaf ////
function drawleaf(height, width){

  let leafX = width/29.5
  let leafY = height/21

fill(103, 166, 88) /// green
//stroke(166, 232, 151) ///light green
strokeWeight(3)
rect(leafX, leafY, 35, 35, 20); ///leaf
noStroke()
}

/// Drawing flower ////
  function drawflower(height, width) {

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

