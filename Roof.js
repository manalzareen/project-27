class Roof{
constructor(x,y,width,height){
var options={
    'isStatic':true
} 
this.width-width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
fill("lightpink");
rect(pos.x,pos.y,250,30);

}



}