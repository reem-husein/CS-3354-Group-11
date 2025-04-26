const express = require("express");
const Driver = require("../../DBConnection/Driver");

test("should get a driver basic profile given id", async () => {
  const res = await request(app)
    .get(
      "http://localhost:5050/api/ProfileHandling/basic-info/680836cda295c9c39feaf002"
    )
    .send({
      name: "Alice",
      role: "Developer",
    })
    .expect(201);

  expect(res.body.name).toBe({
    employeeBasicInfo: {
      phone_number: 7142322321,
      full_name: "Peter Parker",
      DOB: "10/10/2001",
      license_number: "SP1D3r526",
    },
    _id: "680836cda295c9c39feaf002",
  });
});

test("should get a driver full profile given id", async () => {
  const res = await request(app)
    .get(
      "http://localhost:5050/api/ProfileHandling/full-profile/680836cda295c9c39feaf002"
    )
    .expect(201);

  expect(res.body).toMatchObject({
    loginInfo: {
      email: "spiderman@marvel.com",
      password: "i_hate_dc2",
    },
    employeeBasicInfo: {
      phone_number: 7142322321,
      full_name: "Peter Parker",
      DOB: "10/10/2001",
      license_number: "SP1D3r526",
    },
    employeeWorkHistory: {
      debt_owed_to: "Norman Osborn",
      debt_type: "credit",
      debt_amount: "1000",
      missing_work: "All",
      notes: "too busy saving people!",
    },
  });
});

test("should get a driver profile given id", async () => {
  const res = await request(app)
    .get(
      "http://localhost:5050/api/ProfileHandling/full-profile/680836cda295c9c39feaf002"
    )
    .expect(201);

  expect(res.body).toMatchObject({
    employeeBasicInfo: {
      phone_number: 7142322321,
      full_name: "Peter Parker",
      DOB: "10/10/2001",
      license_number: "SP1D3r526",
    },
    employeeWorkHistory: {
      debt_owed_to: "Norman Osborn",
      debt_type: "credit",
      debt_amount: "1000",
      missing_work: "All",
      notes: "too busy saving people!",
    },
  });
});

test("should update a driver full profile given id", async () => {
  const res = await request(app)
    .post(
      "http://localhost:5050/api/ProfileHandling/full-profile/680836cda295c9c39feaf002"
    )
    .send({
      employeeBasicInfo: {
        phone_number: 7142322321,
        full_name: "Peter Parker",
        DOB: "10/10/2001",
        license_number: "SP1D3r526",
      },
      employeeWorkHistory: {
        debt_owed_to: "Norman Osborn",
        debt_type: "credit",
        debt_amount: "1000",
        missing_work: "All",
        notes: "too busy saving people!",
      },
    })
    .expect(201);

  expect(res.body.name).toBe({
    employeeBasicInfo: {
      phone_number: 7142322321,
      full_name: "Peter Parker",
      DOB: "10/10/2001",
      license_number: "SP1D3r526",
    },
    employeeWorkHistory: {
      debt_owed_to: "Norman Osborn",
      debt_type: "credit",
      debt_amount: "1000",
      missing_work: "All",
      notes: "too busy saving people!",
    },
  });
});
