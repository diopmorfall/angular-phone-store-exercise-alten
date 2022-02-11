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
      valueMax: 1500,
      valueMin: 300,
      valueAvg: 700,
      returnValueMax: 'pluto',
      returnValueMin: 'pippo',
      returnValueAvg: 'paperino',
    }
  ): string {
    console.log('PIPE!');
    // const { valueMax, valueMin, valueAvg } = args;
    let result = '';

    if (args.valueAvg <= value) {
      result = args.returnValueMax;
    } else if (args.valueMin <= value) {
      result = args.returnValueAvg;
    } else if (args.valueAvg > value) {
      result = args.returnValueMin;
    }
    return result;
  }
}
