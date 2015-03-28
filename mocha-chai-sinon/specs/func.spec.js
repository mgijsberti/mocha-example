var fs = require('fs');
var sinon = require('sinon');

describe('examples with', function () {



    it('spy', function (done) {
        var func = sinon.spy();
        func(1, 'foo');
        expect(func.called).to.be.true;

        expect(func.calledOnce).to.be.true;
        expect(func.callCount).to.equal(1);

        expect(func.firstCall.calledWith(sinon.match.number, sinon.match.string)).to.be.true;
        expect(func.getCall(0).calledWith(sinon.match.number, sinon.match.string)).to.be.true;

        expect(func.firstCall.calledWith(1, 'foo')).to.be.true;
        done();
    });

    it('stub', function(done){
        var func = sinon.stub();
        func.withArgs(42).returns(1);
        func.throws();
        expect(func(42)).to.equal(1);
        expect(func).to.throw(Error);
        done();
    });

    it('file', function(done){
            sinon.stub(fs, 'readFile');

            fs.readFile
                .withArgs('foo.txt', 'utf8', sinon.match.func)
                .callsArgWithAsync(2, null, 'Foo!');

            fs.readFile
                .withArgs('bar.txt', 'utf8', sinon.match.func)
                .callsArgWithAsync(2, new Error('File not found!'));

            fs.readFile.restore();
            done();
    });

});
