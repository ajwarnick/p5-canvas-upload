function setup() {
    console.log("### Sketch Started ###");
    createCanvas(windowWidth, windowHeight);

    let c = createCanvas(windowWidth, windowHeight);
    background(153);
    line(0, 0, width, height);
    uploadCanvas(c, 'myCanvas', 'jpg', 'upload.php');
    // saveCanvas(c, 'myCanvas', 'jpg');
}


function draw() {
    // put drawing code here
}