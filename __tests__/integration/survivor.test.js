const { Survivor } = require("../../src/app/models");

describe("Check Suvivors", () => {
  it("Should check if survivor is good", async () => {
    const survivor = await Survivor.create({
      name: "Felipe",
      age: 23,
      gender: "M",
      coordinates: "24N 20W"
    });

    console.log(survivor);
    expect(survivor.name).toBe("Felipe");
  });
});
