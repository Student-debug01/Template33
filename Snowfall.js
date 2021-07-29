class Snowfall{
    constructor(){
        var option = {
            isStatic: false
        }
        this.Snowfall = Bodies.rectangle(random(1, 800), 10, 10, 10, option);
        World.add(world, this.Snowfall);

    }
    display(){
        imageMode(CENTER);
        image(snowImg, this.Snowfall.position.x, this.Snowfall.position.y, 10, 10);
    }

}