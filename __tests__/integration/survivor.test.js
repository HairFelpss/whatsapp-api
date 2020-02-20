const request = require("supertest");
const app = require("../../src/app");

const { Survivor } = require("../../src/app/models");

describe("Check Suvivors", () => {
  it("Should check if survivor is good", async () => {
    const survivor = await Survivor.create({
      name: "Felipe",
      age: 23,
      gender: "M",
      coordinates: "24N 20W"
    });
    expect(survivor.name).toBe("Felipe");

    const response = await request(app)
      .post("/survivor")
      .send({
        name: survivor.name,
        age: survivor.age,
        gender: survivor.gender,
        coordinates: survivor.coordinates
      });

    expect(response.status).toBe(200);
  });
});
