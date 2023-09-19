pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Correct user id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(2);
});
pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});