import {Pipe, PipeTransform} from '@angular/core';
// 导入pipe和pipetransform管道需要的

@Pipe({
  name: 'ljPipe'
})// 管道装饰器，名字叫ljPipe
export class ExponentialStrength implements PipeTransform {
  transform(value: number, exponent: string): number {
    // 接受两个参数一个数值，一个字符串exponent指数；
    const exp = parseFloat(exponent);
    // paresFloat接受一个字符串，转换为数字，只返回第一个数字，如果第一个字符不能被转换就返回NAN
    return Math.pow(value, isNaN(exp) ? 1 : exp);
    // 判断exponent返回是不是NAN，是就用1不是就exp；Math.pow返回第一个参数的第二个参数次幂
    // Math.pow(x,y)就是x的y次幂
  }
}
