const Square = require('../lib/square');

test('If shows as Square', () => {
    const testColor = 'red';
    const testText ='Yer';
    const testTextColor = 'white';
    const mySquare = new Square(testColor, testText, testTextColor);

    expect(mySquare.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="500" cy="500" fill="${testColor}" />
    <text fill="${testTextColor}" font-size="75" x="172" y="250">${testText}</text>
    </svg>`)
})