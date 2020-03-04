const add = (a, b) =>  a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
const name = 'Damian';

test(`should add two numbers`, () => {
    const result = add(3, 4);
     expect(result).toBe(7);
});
    
   test(`hello ${name}!`, () => {
        const result = generateGreeting(name);
        expect(result).toBe(`Hello ${name}!`)
});

    test ('should give me the greeting for no name. And you did!', () => {
        const greeting = generateGreeting();
        expect(greeting).toBe('Hello Anonymous!');
});
