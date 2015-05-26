///<reference path="../typings/base.d.ts"/>

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash')

import core = require('../src/Car');
/**
 * Globals
 */


describe('TypeScript TEST', function () {
    it("load module", function () {
        new core.Car().hello('ale fajnie ');
        expect(5).to.be.eq(2+3)
        new core.Car().wolaj((param)=> {
            console.log('Arrow ' + param)
        });
    })

    it("use interface", function () {
       var service: core.CarServiceImpl   = core.factory.create();
        expect(service instanceof core.CarServiceImpl).to.be.true;

        var res = _.chunk(['a', 'b', 'c'], 2);
        console.log(res)
    })
});
