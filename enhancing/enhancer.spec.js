const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
    
    describe('the repair function', () => {
        it('should restore the durability'), () => {
            // arrange
            const longsword = { 
                name: '',
                durability: 0,
                enhancement: 0
            };
            // act
            const result = enhancer.repair(longsword);
            // assert
            expect(result).toBe({

                name: '',
                durability: 100,
                enhancement: 0
        
            })
        }
    })
})