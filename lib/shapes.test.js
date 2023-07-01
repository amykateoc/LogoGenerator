const { Square, Triangle, Circle } = require('./shapes.js');



describe("square", () => {
    test("Should create instance of square", () => {
        const square = new Square()
        expect(typeof square).toEqual("object")
    })

    test("Should render svg for red square element", () => {
        const mySvg = `<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="red" />`
        const square = new Square("red")
        expect(mySvg).toEqual(square.render())
    })
})