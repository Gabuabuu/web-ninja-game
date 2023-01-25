class Sprite {
    constructor({ position, imageSrc }) {
      this.position = position;    this.width = 50;
      this.height = 150;
      this.image = new Image()
      this.image.src = imageSrc
  
    };
  
    draw() {
      context.drawImage(this.image, this.position.x, this.position.y)
    }
    
    update() {
      this.draw();
    }
  } // Construindo a posição e velocidade do canvas
  
  class Fighter {
    constructor({ position, velocity, color = "red", offset }) {
      this.position = position;
      this.velocity = velocity;
      this.width = 50;
      this.height = 150;
      this.lastKey;
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },
        offset,
        width: 100,
        height: 50,
      };
      this.color = color;
      this.isAttacking;
      this.health = 100
    } // Construindo a posição e velocidade do canvas
  
    draw() {
      context.fillStyle = this.color;
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
  
      // Attack box
      if (this.isAttacking) {
        context.fillStyle = this.color
        context.fillRect(
          this.attackBox.position.x,
          this.position.y,
          this.attackBox.width,
          this.attackBox.height
        )
      }
    }
  
    update() {
      this.draw();
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y;
  
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 95) {
        this.velocity.y = 0;
      } else {
        this.velocity.y += gravity;
      }
    }
  
    attack() {
      this.isAttacking = true;
      setTimeout(() => {
        this.isAttacking = false;
      }, 100);
    }
  }