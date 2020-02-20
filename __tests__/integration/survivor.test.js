const request = require("supertest");
const app = require("../../src/app");

const truncate = require("../utils/truncate");

describe("Check Suvivors", () => {
  beforeEach(async () => {
    await truncate();
  });
  it("Should check if survivor is good", async () => {
    const response = await request(app)
      .post("/survivors")
      .send({
        name: "Felipe",
        age: 23,
        gender: "M",
        coordinates: "24N 20W",
        infected: true
      });

    expect(response.status).toBe(200);
  });

  it("Should update user coordinates", async () => {
    const response = await request(app)
      .put("/survivors")
      .send({
        coordinates: "38N -11W"
      });

    expect(response.status).toBe(200);
  });
});
