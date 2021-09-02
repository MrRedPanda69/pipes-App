import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, mayus: boolean = true): string | any {
        return (mayus) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
    
}