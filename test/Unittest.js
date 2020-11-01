const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions');

describe('sum', function(){
    it('returns 4 when adding2 and 2', function(){
        assert.equal(functions.sum(2,2), 4);
    });

    it('returns 0 when adding 5 and -5', function(){
        assert.equal(functions.sum(5, -5), 0);
    });
    it('returns 10.1 when adding 9 and 1.1', function(){
        assert.equal(functions.sum(9, 1.1), 10.1);
    });
});

describe('tail', function(){
    it('should return null when the provided array is empty []', function(){
        let arr = [];
        assert.isNull(functions.tail(arr));
    });

it('should return 3 when the provided array is empty [1,2,3]', function(){
    let arr = [1,2,3];
    assert.equal(functions.tail(arr), 3);
});

it('should return hello when the provided array is empty [hello]', function(){
    let arr = ['hello'];
    assert.equal(functions.tail(arr), 'hello');
});
});


describe('merge', function() {
    it('return null when both provided arrays are empty', function() {
        let arr1 = []
        let arr2 = []
        assert.isNull(functions.merge(arr1, arr2));
    });

    it('return [1,3] when one array is empty and other is [1,3]', function() {
        let arr1 = [];
        let arr2 = [1,3];
        assert.deepEqual(functions.merge(arr1, arr2), [1,3]);
    });

    it('return [a,c,b,d] when one array is [a,b] empty and other is [c,d]', function() {
        let arr1 = ['a','b'];
        let arr2 = ['c','d'];
        assert.deepEqual(functions.merge(arr1, arr2), ['a','c', 'b', 'd']);
    });
});
    
describe('product', function() {
    it('returns 4 when multiply 2 and 2', function(){
        assert.equal(functions.product(2, 2), 4);
    });

    
    it('returns 0 when multiply 0 and 2', function(){
        assert.equal(functions.product(0, 2), 0);
    });
    
    it('returns -4 when multiply -2 and 2', function(){
        assert.equal(functions.product(-2,2), -4);
    });

});

describe('min', function() {
    it('returns -2 when provided array is [-2, -1]', function(){
        assert.equal(functions.min(-2,-1), -2);
    });   

        it('returns 1 when provided array is [1,2]', function(){
            assert.equal(functions.min(1,2), 1);
        }); 

        it('returns 0 when provided array is [1,0]', function(){
            assert.equal(functions.min(1,0), 0);
        });
    });

    describe('max', function() {
        it('returns 4 when provided array is [2,4]', function(){
            assert.equal(functions.max(2,4), 4);
        });

        it('returns -1 when provided array is [-1,-4]', function(){
            assert.equal(functions.max(-1,-4), -1);
    });
        it('returns 2 when provided array is [2,2]', function(){
            assert.equal(functions.max(2,2), 2);
        });
    });

    describe('head', function(){
        it('should return null when the provided array is empty []', function(){
            let arr = [];
            assert.isNull(functions.head(arr));
        });
        it('should return 1 when the provided array is [1,2,3]', function(){
            let arr = [1,2,3];
            assert.equal(functions.head(arr),1);
    });
    
    it('should return hello when the provided array is empty [hello]', function(){
        let arr = ['hello'];
        assert.equal(functions.tail(arr), 'hello');
    });
});

    describe('mid', function(){
        it('should return 2 when the provided array is [1,2,3]', function(){
            let arr = [1,2,3];
            assert.equal(functions.mid(arr), 2);
        });

        it('should return null when the provided array is empty []', function(){
            let arr = [];
            assert.isNull(functions.mid(arr));
        });
        it('should return null when the provided array is empty []', function(){
            let arr = [];
            assert.isNull(functions.mid(arr));
        })

    });

    describe('smallest', function(){
        it('should return 1 when the provided array is [2,5,1]', function(){
            let arr = [2,5,1];
            assert.equal(functions.smallest(arr), 1 );
        });

    it('should return -2 when the provided array is [-1,-2,0,5,10]', function(){
        let arr = [-1,-2,0,,5,10];
        assert.equal(functions.smallest(arr), -2);
    });

    it('should return null when the provided array is empty []', function(){
        let arr = [];
        assert.equal(functions.smallest(arr));
    });
});

    describe('largest', function(){
        it('should return 5 when the provided array is [1,2,3,,4,5]', function(){
            let arr = [1,2,3,4,5];
            assert.equal(functions.largest(arr), 5 );
    });

    it('should return 10 when the provided array is [0,-1,-2,5,10]', function(){
        let arr = [0,-1,-2,5,10];
        assert.equal(functions.largest(arr), 10);

    });

        it('should return 10 when the provided array is [0,-1,-2,5,10]', function(){
            let arr = [0,-1,-2,5,10];
            assert.equal(functions.largest(arr), 10);
        });

            it('should return null when the provided array is empty []', function(){
                let arr = [];
                assert.isNull(functions.largest(arr));
            });
            });
    

            describe('total', function(){
                it('should return 12 when the provided array is [2,4,6]', function(){
                    let arr = [2,4,6];
                    assert.equal(functions.total(arr), 12);
                });
    
                    it('should return 1 when the provided array is [1]', function(){
                        let arr = [1];
                        assert.equal(functions.total(arr), 1);
                    });

                    it('should return 0 when the array is empty []', function(){
                        let arr = [];
                        assert.equal(functions.total(arr), 0);
                    });
                });

                describe('average', function(){
                    it('should return 0 when the provided array is empty []', function(){
                        let arr =[];
                        assert.isNull(functions.average(arr), 0);
                    });

                        it('should return 4 when the provided array is [2,4,6]', function(){
                            let arr = [2,4,6];
                            assert.equal(functions.average(arr), 4);
                        });
                        
                            it('should return  when the provided array is [1]', function(){
                                let arr = [1];
                                assert.equal(functions.average(arr), 1);
                            });
                        });





                    


    



    

                    
                