///<reference path="..\..\..\.WebStorm10\system\extLibs\http_github.com_borisyankov_DefinitelyTyped_raw_master_mocha_mocha.d.ts"/>
var chai = require('chai');
var expect = chai.expect;

declare var require;
import core = require('../src/Car');
/**
 * Globals
 */


describe('ES 6 TEST', function()  {
    it("load module", function(){
        new core.Car().hello('ale fajnie ');
        new core.Car().wolaj((param)=>{console.log('Arrow '+param)});
    })
});
