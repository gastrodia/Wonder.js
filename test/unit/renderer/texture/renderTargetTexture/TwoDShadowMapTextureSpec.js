describe("TwoDShadowMapTexture", function() {
    var sandbox = null;
    var Texture = null;
    var texture = null;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        Texture = wd.TwoDShadowMapTexture;
        texture = new Texture();

        sandbox.stub(wd.DeviceManager.getInstance(), "gl", testTool.buildFakeGl(sandbox));
    });
    afterEach(function () {
        sandbox.restore();
    });

    describe("sendData", function () {
        var program;

        beforeEach(function () {
            program = {
                sendUniformData: sandbox.stub(),
                getUniformLocation: sandbox.stub(),
                isUniformDataNotExistByLocation: sandbox.stub().returns(false)
            };
        });

        it("send map sampler to array", function () {
            var pos1 = 100,
                pos2 = 200;
            program.getUniformLocation.onCall(1).returns(pos1);
            program.getUniformLocation.onCall(2).returns(pos2);
            var map = new wd.ImageTexture();
            var material = wd.LightMaterial.create();
            material.diffuseMap = map;

            material.addTwoDShadowMap(texture);

            var texture2 = new Texture();
            material.addTwoDShadowMap(texture2);



            material.mapManager.sendData(program);

            expect(program.getUniformLocation.secondCall).toCalledWith("u_twoDShadowMapSampler[0]");
            expect(program.getUniformLocation.thirdCall).toCalledWith("u_twoDShadowMapSampler[1]");

            expect(program.sendUniformData).toCalledWith(pos1, wd.VariableType.SAMPLER_2D, 1);
            expect(program.sendUniformData).toCalledWith(pos2, wd.VariableType.SAMPLER_2D, 2);
        });
    });
});

