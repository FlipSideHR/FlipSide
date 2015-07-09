describe("ticker", function () {
    var ticker = require("./lib/ticker.js")
    it("has method bindTo", function () {
        expect(typeof ticker.bindTo === "function").toBe(true);
    });

});
