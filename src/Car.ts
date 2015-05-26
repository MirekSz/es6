/**
 * Created by Mirek on 2015-05-23.
 */


export class Car {
    name:String;

    constructor() {
        this.name = 'jan'
    }

    hello(name:String) {
        console.log('Hello ' + name)
    }

    wolaj(call:any):any {
        call('hello');
    }
}

export interface CarService<T> {
    load(id:number):T
    save(car:T);
}

export class CarServiceImpl implements CarService<Car> {
    load(id:number):Car {
        return undefined;
    }


    save(car:Car) {
    }

}
class Factory {
    create():CarServiceImpl {
        return new CarServiceImpl();
    }
}
export var factory = new Factory();
