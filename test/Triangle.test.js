const Triangle = require('../lib/triangle');

test('If shows as Triangle', () => {
    const testColor = 'greem';
    const testText ='Sup';
    const testTextColor = 'white';
    const myTriangle = new Triangle(testColor, testText, testTextColor);

    expect(myTriangle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,0 0,500 500,500" fill="${testColor}" />
    <text fill="${testTextColor}" font-size="75" x="172" y="250">${testText}</text>
    </svg>`)
})