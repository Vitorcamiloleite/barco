class Boat {
    constructor(x, y, width, height, boatPos) {
      
  var options = {//adicionar valores   
    restitution: 0.8,
    friction :1.0,
    density: 1.0,

      };
   
   
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      //criar variável para obter as posições aleatórias do navio à partir do código
   this.boatPosition = boatPos
      //carregar imagem nos navios
     this.image = loadImage("assets/boat.png")
      World.add(world, this.body);
    }
   
   
    display() {
     //criar variável para obter o ângulo do corpo
      var angle = this.body.angle
      var pos = this.body.position;
     //salvar as novas configurações
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      // definir o imageMode como centro
      imageMode(CENTER)
      //mostrar a imagem
      image(this.image,0 , this.boatPosition, this,this.width,this,this.height)
      //adicionar função pronta q remove o valor de preenchimento atual para exibir imagens
      noTint()
      //redefinir os estilos de desenho
      pop()
    }
  }