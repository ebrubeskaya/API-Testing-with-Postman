pm.test("User created successful", function () {
    pm.response.to.have.status(201);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});