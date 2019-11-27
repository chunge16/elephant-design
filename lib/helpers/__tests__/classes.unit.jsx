import classes from '../classes';

test('classes', () => {
    expect(classes('a')).toBe('a');
});

describe('classes', () => {
    it('接受 1 个 className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('接受 2 个 className', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });
    it('过滤布尔值为false的数据', () => {
        const result = classes('a', undefined, null);
        expect(result).toEqual('a');
    });
    it('接受各种奇怪值', () => {
        const result = classes(
            'a', undefined, '中文', false, null
        );
        expect(result).toEqual('a 中文');
    });
    it('接受 0 个参数', () => {
        const result = classes();
        expect(result).toEqual('');
    });
});
