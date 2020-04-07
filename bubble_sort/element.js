class Element {
  constructor(height) {
    this.height = height
    this.colored = false
  }

  getHeight() {
    return this.height
  }

  setColor() {
    this.colored = true
  }

  resetColor() {
    this.colored = false
  }

  getColor() {
    return this.colored
  }
}
