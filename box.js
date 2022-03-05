class Box
  {
    constructor(x,y,w,h,s,z){
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.s=s;
      this.z=z;
    }
  show(){
    rect (this.x,this.y,this.w,this.h);

  }
  speed(){
    this.x=this.x+this.s
  }
  speedUp(){
    this.y=this.y-this.z
  }
  }

  
