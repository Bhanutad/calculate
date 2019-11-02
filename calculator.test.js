const calculator = require('./calculator');

describe("Add function", ()=> {
    test("Should return 2 if a=1 and b=1", ()=>{
        const a = 1;
        const b = 1;

        const result = calculator.add(a,b);
        expect(result).toEqual(2);
    })
})
