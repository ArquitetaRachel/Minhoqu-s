function countobj(){
	this.text;
	this.create = function(){
		var style = { font: "bold 28px Arial", fill: "#ffffff",boundsAlignH: "left"};
		var x = 0;
		var y =30;
		var str = 'Pontos '+score;
		this.text = game.add.text(x,y,str,style);
		this.text.setTextBounds(30, 0, 800, 600);
	}
	this.update = function(){
		var str = 'Pontos '+score+;
		this.text.setText(str);
	}
	this.create();
}
