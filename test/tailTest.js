const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {

    it("returns a length of 2 for ['Hello','Lighthouse', 'Labs']", () => {
        assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
    });
    it("returns 'Lighthouse' for ['Hello','Lighthouse', 'Labs'][0]", () => {
        assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
    });
});

// TEST CODE Tail 
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
//Test Case: check the original array (Tail)
tail(["YoYo", "Lighthouse", "Labs"]);
assertEqual(["YoYo", "Lighthouse", "Labs"].length, 3);