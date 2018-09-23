const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect();
const should = chai.should();

const app = require("../server");

chai.use(chaiHttp);

describe("/api/form", () => {
  it("should return msg", done => {
    chai
      .request(app)
      .get("/api/form/test")
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should return registered person as object", done => {
    chai
      .request(app)
      .post("/api/form/")
      .send({
        firstname: "Test",
        lastname: "Person",
        email: "email@test.com",
        eventdate: "2018-01-02"
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("firstname");
        res.body.should.have.property("lastname");
        res.body.should.have.property("_id");
        res.body.firstname.should.equal("Test");
        done();
      });
  });

  it("should return form errors", done => {
    chai
      .request(app)
      .post("/api/form/")
      .end(function(err, res) {
        res.should.have.status(400);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("firstname");
        res.body.should.have.property("lastname");
        res.body.should.have.property("email");
        res.body.should.have.property("eventdate");
        done();
      });
  });

  it("should return invalid email error", done => {
    chai
      .request(app)
      .post("/api/form/")
      .send({
        firstname: "Test",
        lastname: "Person",
        email: "emailtest.com",
        eventdate: "2018-01-02"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("email");
        res.body.email.should.be.equal("Email is invalid");
        done();
      });
  });
});