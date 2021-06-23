var dot = function(x, y, big){
    this.x = x;
    this.y = y;
    this.big = big;
};
var dots = [];
for(var i = 0; i < 200; i++){
    dots.push( new dot(random(0, width), random(0, height), random(0, 2)))
}
var create = function(){
    dots.push(new dot(random(0, width), -5, random(0, 2)));
};

dot.prototype.display = function(){
    strokeWeight(this.big);
    stroke(255, 255, 255);
    point(this.x, this.y);
};
dot.prototype.move = function(){
    this.y+=4+(this.big*1.2);
};
dot.prototype.chop = function(i){
    if(this.y > height){
       dots.splice(i, 1); 
       create();
    }
};
