class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }

    desc():void{
        console.log('engine is ' + this.engine)
    }
}
var car : Car = new Car("a");