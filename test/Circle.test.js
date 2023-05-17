const Circle = require("../lib/circle");

test('If shows as Circle', () => {
    const testColor = 'blue';
    const testText ='Lol';
    const testTextColor = 'white';
    const myCircle = new Circle(testColor, testText, testTextColor);

    expect(myCircle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" fill="${testColor}" />
    <text fill="${testTextColor}" font-size="75" x="172" y="250">${testText}</text>
    </svg>`)
})