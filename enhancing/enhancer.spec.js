const { repair, succeed, fail } = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    
    describe('repair', () => {
        it('should restore the durability', () => {
            // arrange
            const item = { 
                name: 'longsword',
                durability: 0,
                enhancement: 0
            };
                const expected = {
                name: 'longsword',
                durability: 100,
                enhancement: 0
                }
        
            // act
            const repairedItem = repair(item);
            // assert
            expect(repairedItem).toEqual(expected)
        })
    })

    describe('success', () => {
        it('should increase enhancement by 1', () => {
            //arrange
            const item = {
                name: 'longsword',
                durability: 0,
                enhancement: 0
            };
            const expected = {
                name: 'longsword',
                durability: 0,
                enhancement: 1
            }
            // act
            const succeedItem = succeed(item);

            // assert
            expect(succeedItem).toEqual(expected)
        })
    })

    describe('fail', () => {
        it('should decrease enhancement by 5', () => {
             //arrange
             const item = {
                name: 'longsword',
                durability: 0,
                enhancement: 14
            };
            const expected = {
                name: 'longsword',
                durability: 0,
                enhancement: 9
            }
            // act
            const failedItem = fail(item);

            // assert
            expect(failedItem).toEqual(expected)
        })
        it('should decrease enhancement by 10', () => {
            //arrange
            const item = {
               name: 'longsword',
               durability: 0,
               enhancement: 16
           };
           const expected = {
               name: 'longsword',
               durability: 0,
               enhancement: 6
           }
           // act
           const failedItem = fail(item);

           // assert
           expect(failedItem).toEqual(expected)
       })
        it('should decrease enhancement by 1', () => {
            //arrange
            const item = {
               name: 'longsword',
               durability: 0,
               enhancement: 17
           };
           const expected = {
               name: 'longsword',
               durability: 0,
               enhancement: 16
           }
           // act
           const failedItem = fail(item);
    
           // assert
           expect(failedItem).toEqual(expected)
         }) 
    })
})