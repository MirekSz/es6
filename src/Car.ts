///<reference path="..\..\..\..\..\Program Files (x86)\JetBrains\WebStorm 10.0.2\plugins\JavaScriptLanguage\typescriptCompiler\external\lib.es6.d.ts"/>
/**
 * Created by Mirek on 2015-05-23.
 */
import core = require("./Wehicle")


export class Car extends core.Wehicle{
    name:String;

    constructor() {
        super();
        this.name = 'jan'
    }

    hello(name:String) {
        console.log('Hello ' + name)
    }

    wolaj(call:any):any{
        call('hello');
    }
}

interface CarService<T>{
    load(id:number):T
    save(car:T );
}

class CarServiceImpl implements CarService<Car>{
    load(id:number):Car {
        return undefined;
    }


    save(car:Car) {
    }

}
