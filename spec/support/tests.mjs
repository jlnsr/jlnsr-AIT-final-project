import * as help from '../../public/scripts/helpers.js'

// Jasmine usage
// SOURCE: https://jasmine.github.io/tutorials/your_first_suite
/*describe("The 'toBe' matcher compares with ===", function() {
    it("and has a positive case", function() {
        expect(true).toBe(true);
    });
    it("and can have a negative case", function() {
        expect(false).not.toBe(true);
    });
});*/

describe("isEmpty", () => {
    let obj1 = {'message':'sunyaleykum dunya'}
    let obj2 = {}
    let arr1 = ['seviyorum', 'Türkiye']
    let arr2 = []
    it("checks if an object has no items", () => {
        expect(help.isEmpty(obj1)).toBe(false)
        expect(help.isEmpty(obj2)).toBe(true)
        console.log('✅ Test passed: empty object');
    })

    it("checks if an array has no items", () => {
        expect(help.isEmpty(arr1)).toBe(false)
        expect(help.isEmpty(arr2)).toBe(true)
        console.log('✅ Test passed: empty array');
    })
})

describe("remove", ()=>{
    it("if given [1,2,3] and 3 as arguments, makes [1,2] (in-place)", () => {
        let arr = [1,2,3]
        help.remove(arr,3)
        expect(arr).toEqual([1,2])
        console.log('✅ Test passed: Succesfully removes item from array');
    })

    it("returns immediately and does nothing if given an empty array", ()=> {
        let arr = []
        help.remove(arr,3)
        expect(arr).toEqual([])
        console.log('✅ Test passed: Succesfully returns if given empty array');
    })
})