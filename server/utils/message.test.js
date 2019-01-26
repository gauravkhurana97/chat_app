 const expect = require("expect");
  var {generate_message} = require("./message");

  describe("generate_message",()=>{
      it("should generate correct message object",()=>{

        var res = generate_message("gaurav","lokesh");
        expect(res.from).toEqual("gaurav");
        expect(res.text).toEqual("lokesh");
        expect(res.createdAt).toBeA("number");

      })
  })