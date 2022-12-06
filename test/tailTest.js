const assert = require("chai").assert; 
const tail = require("../tail"); 

describe("#tail", () => {

    it("returns a length of 2 for ['Hello','Lighthouse', 'Labs']", () => {
        assert.strictEqual(tail(["Hello","Lighthouse", "Labs"]).length, 2);
    })
    it("returns 'Lighthouse' for ['Hello','Lighthouse', 'Labs'][0]", () => { 
        assert.strictEqual(tail(["Hello","Lighthouse", "Labs"])[0], 'Lighthouse'); 
    })
}); 