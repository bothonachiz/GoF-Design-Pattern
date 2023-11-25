import { HourFlexPackage } from './hourFlexPackage';

describe('HourFlexPackage', () => {
  it('should always return total hours * 50 for variable package', () => {
    // given
    const totalHours = 10;
    const hourFlex = new HourFlexPackage();

    // when
    const packagePrice = hourFlex.monthlyBill(totalHours);

    // then
    expect(packagePrice).toBe(500);
  });
});
