const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

    it("returns [] for middle([1])", () => {
        assert.deepEqual(middle([1]), []);
    });
    it("returns [2] for [1, 2, 3]", () => {
        assert.deepEqual(middle([1, 2, 3]), [2]);
    });
});
