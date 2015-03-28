var sinon = require('sinon');

describe('Examples with a fake server', function(){
    var server;
    //fake server with some stub data.
    var fakeData = '[{ "id": 12, "comment": "Hey there" }]';
    var myLib = {
        getCommentsFor: function(route,callback){
            if(route === '/some/article'){
                callback(fakeData);
            } else{
                callback('error');
            }

        }
    };

    before(function () {
        server = sinon.fakeServer.create();
    });

    it('Check response of server',function(){


        server.respondWith("GET", "/some/article/comments.json",
            [200, { "Content-Type": "application/json" },
                fakeData]);

        var callback = sinon.spy();
        myLib.getCommentsFor("/some/article", callback);
        server.respond();
        sinon.assert.calledWith(callback, fakeData);
    });

    it('Check error response of server',function(){


        server.respondWith("GET", "/some/article/comments.json",
            [500, { "Content-Type": "application/json" },
                'error']);

        var callback = sinon.spy();
        myLib.getCommentsFor("/bla/article", callback);
        server.respond();
        sinon.assert.calledWith(callback, 'error');
    });


    after(function(){
        server.restore();
    });
});
