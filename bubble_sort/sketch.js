let elementCount = 50
let size = 10
let distance = 5
var arr = []
var ii = 0
var jj = 0
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (i=0;i<elementCount;i++){
    let element = new Element(int(random(200, 500)))
    arr.push(element)
  }
  frameRate(20)

}

function draw() {
  background(255)
  fill(0)
  for (i=0;i<arr.length/2;i++) {
    if (arr[i].getColor()){
      fill(0)
    }
    else {
      fill(150)
    }
    rect(
      windowWidth/2 - (size+distance) * (arr.length/2-i),
      windowHeight - 100,
      size,
      -arr[i].getHeight()
    )
  }

  for (i=0;i<arr.length/2;i++) {
    if (arr[arr.length-i-1].getColor()){
      fill(0)
    }
    else {
      fill(150)
    }
    rect(
      windowWidth/2 + (size+distance)*(arr.length/2 - i - 1),
      windowHeight - 100,
      size,
      -arr[arr.length-i-1].getHeight()
    )
  }
  sortStep()
}

function resetAll() {
  for (x=0;x<arr.length;x++) {
    arr[x].resetColor()
  }
}

function sortStep() {
  if (jj<arr.length-1-ii){
    resetAll()
    arr[jj].setColor()
    if (arr[jj].getHeight() > arr[jj+1].getHeight()) {
      temp = arr[jj]
      arr[jj] = arr[jj+1]
      arr[jj+1] = temp
    }
    jj++
  }
  else if (jj==arr.length-1-ii) {
      jj = 0
      ii++
      resetAll()
  }
}
