function countobj(){

    this.text;

    this.create = function(){
        this.text = game.add.text(20,20,"Score: 0",{
            font:"24px Arial",
            fill:"#ffffff"
        });
    }

    this.update = function(){
        this.text.text = "Score: " + score;
    }

    this.create();
}
