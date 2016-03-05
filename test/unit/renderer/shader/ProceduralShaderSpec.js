describe("ProceduralShader", function() {
    var sandbox = null;
    var shader = null;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        shader = new wd.ProceduralShader();

        testTool.openContractCheck(sandbox);
    });
    afterEach(function () {
        sandbox.restore();
    });

    describe("update", function(){
        var quadCmd,material;
        var lib;

        beforeEach(function(){
            quadCmd = wd.QuadCommand.create();
            material = new wd.Material();

            shader.program = wd.Program.create();


            sandbox.stub(shader, "judgeRefreshShader");
            sandbox.stub(shader.program, "use");

            lib = {
                sendShaderVariables:sandbox.stub()
            }
            shader.addLib(lib);
        });

        it("judge to refresh shader", function(){
            shader.update(quadCmd, material);

            expect(shader.judgeRefreshShader).toCalledOnce();
        });
        it("use program", function () {
            shader.update(quadCmd, material);

            expect(shader.program.use).toCalledOnce();
            expect(shader.program.use).toCalledBefore(lib.sendShaderVariables);
        });
        it("send shaderLib->variables", function () {
            shader.update(quadCmd, material);

            expect(lib.sendShaderVariables).toCalledOnce();
        });
    });

    describe("addLib", function(){
        beforeEach(function(){
        });

        it("if already has one, replace it with new one", function(){
            var lib1 = {
                a:1,
                sendShaderVariables:sandbox.stub()
            }
            var lib2 = {
                sendShaderVariables:sandbox.stub()
            }

            shader.addLib(lib1);
            shader.addLib(lib2);

            expect(shader.getLibs().getCount()).toEqual(1);
            expect(shader.getLibs().getChild(0)).toEqual(lib2);
        });
    });
});