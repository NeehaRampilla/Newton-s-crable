
    class Rope{
    constructor(body1,body2,offsetx, offsety){
        var opition= {
            bodyA:body1,
            bodyB:body2,
            pointB: {
                x:offsetx,
                y:offsety
            }
        }
        this.offsetx=offsetx;
        this.offsety=offsety;
    this.sling=Constraint.create(opition);
    World.add (world, this.sling);

            }
    display(){
        var point1 = this.sling.bodyA.position;
        var point2 = this.sling.bodyB.position;
        var anchor2X= point2.x+ this.offsetx;
        var anchor2Y= point2.y+this.offsety;
        push ();
        strokeWeight(3);
        stroke("white");
        line (point1.x, point1.y, anchor2X, anchor2Y);
        pop ();

    }

}
