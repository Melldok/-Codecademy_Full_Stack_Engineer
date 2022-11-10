// Import modules

const assert = require("assert");
const Rooster = require("../index");

// Describing rooster

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      // Setup

      const expected = "cock-a-doodle-do!";

      // Exercise
      const actual = Rooster.announceDawn();

      //Verify

      assert.equal(actual, expected);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // setup

      const expected = "12";
      const input = 12;

      //Exercise

      const actual = Rooster.timeAtDawn(input);

      // Verify

      assert.strictEqual(actual, expected);
    });

    it("Throws a range error if passed a number less than 0", () => {
      
      //Setup
      const input = -1;
      const expected = RangeError;
      //Exercise
      assert.throws(
      () => {
     Rooster.timeAtDawn(input);
      },
      expected
    );
      //Verify
    });

      it("Throws a range error if passed a number greater than 23", () => {
      
      //Setup
      const input = 24;
      const expected = RangeError;
      //Exercise
      assert.throws(
      () => {
     Rooster.timeAtDawn(input);
      },
      expected
    );
      //Verify
    });
  });
});
