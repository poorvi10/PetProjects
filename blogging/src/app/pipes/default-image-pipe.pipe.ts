import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImagePipe'
})
export class DefaultImagePipePipe implements PipeTransform {

  transform(value: any, args?: any, forceHttps: boolean=false): any {

    let image:String='';
    if (value) {
      image=value;
    } else {
      image = args;
    }
    if (forceHttps) {
      
    }
    return null;
  }

}


