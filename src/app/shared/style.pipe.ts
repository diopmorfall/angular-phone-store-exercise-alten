import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'colorPicker' })
export class ColorPicker implements PipeTransform {
  /*transform(value: number, color: number = 799): string {
    return 'paperino';
  }*/

  transform(
    value: number,
    args: {
      valueMax: number;
      valueMin: number;
      valueAvg: number;
      returnValueMax: string;
      returnValueMin: string;
      returnValueAvg: string;
    } = {
      valueMax: 1000,
      valueMin: 100,
      valueAvg: 500,
      returnValueMax: 'big-car',
      returnValueMin: 'small-car',
      returnValueAvg: 'paperino',
    }
  ): string {
    console.log('PIPE!');
    // const { valueMax, valueMin, valueAvg } = args;
    let result = args.returnValueMin;
    if (args.valueAvg > value) {
      result = args.returnValueMax;
    } else if (args.valueAvg < value) {
      result = args.returnValueAvg;
    }
    return result;
  }
}
