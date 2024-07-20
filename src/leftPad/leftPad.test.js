import leftPad from './leftPad';
describe('leftPad', () => {
    it('should do the thing', () => {
        expect(leftPad('hi', 3)).toBe('   hi');
        expect(leftPad('hello', 8)).toBe('        hello');
    });
});
