let x = 0;
let img, cnv;

function preload() {
  img = loadImage("assets/mario.png");
}

function setup() {
  cnv = createCanvas(img.width, img.height);

  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;

  cnv.position(newCanvasX, newCanvasY);

  for (let col = 0; col < img.width; col += 10) {
    for (let row = 0; row < img.height; row += 10) {
      let xPos = col;
      let yPos = row;

      let c = img.get(xPos, yPos);
      let type = random(10);

      if (type > 1) {
        fill(color(c));
        rect(xPos, yPos, 10, 5);
      } else {
        push();
        translate(xPos, yPos);
        rotate(radians(random(360)));
        noFill();
        strokeWeight(random(2));
        stroke(color("#B026FF"));
        // stroke(color(c));
        curve(
          xPos,
          yPos,
          sin(yPos) * random(60),
          cos(xPos) * random(40),
          0,
          0,
          cos(yPos) * sin(xPos) * random(140),
          cos(xPos) * sin(xPos) * random(50)
        );
        pop();
      }
    }
  }
}

function draw() {for (let col = 0; col < img.width; col += 10) {
    for (let row = 0; row < img.height; row += 10) {
      let xPos = col;
      let yPos = row;

      let c = img.get(xPos, yPos);
      let type = random(10);

      if (type > 1) {
        fill(color(c));
        rect(xPos, yPos, 10, 5);
      } else {
        push();
        translate(xPos, yPos);
        rotate(radians(random(360)));
        noFill();
        strokeWeight(random(2));
        stroke(color("#B026FF"));
        // stroke(color(c));
        curve(
          xPos,
          yPos,
          sin(yPos) * random(60),
          cos(xPos) * random(40),
          0,
          0,
          cos(yPos) * sin(xPos) * random(140),
          cos(xPos) * sin(xPos) * random(50)
        );
        pop();
      }
    }
  }
}