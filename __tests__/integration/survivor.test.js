const request = require("supertest");
const app = require("../../src/app");
const { Inventory } = require("../../src/app/models");

const truncate = require("../utils/truncate");

describe("Check Suvivors", () => {
  beforeAll(async () => {
    await truncate();
  });
  it("Should check if survivor is good", async () => {
    const inventory = await Inventory.create();
    const response = await request(app)
      .post("/survivors")
      .send({
        name: "Felipe",
        age: 23,
        gender: "M",
        coordinates: "24N 20W",
        infected: true,
        inventory_id: inventory.id
      });

    expect(response.status).toBe(200);
  });

  it("Should update survivor coordinates", async () => {
    const response = await request(app)
      .put("/survivors/1")
      .send({
        coordinates: "38N -11W"
      });

    expect(response.status).toBe(200);
    expect(response.body.coordinates).toBe("38N -11W");
  });

  /* it("Should update survivor inventory", async () => {
    const response = await request(app)
      .put("/inventories")
      .send({
        water: 5,
        food: 1,
        medKit: 2
      });

    expect(response.status).toBe(200);
    expect(response.data.water).toBe(5);
  });*/
});
