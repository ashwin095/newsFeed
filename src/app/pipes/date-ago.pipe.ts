import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29)
            return 'Just now';
        const intervals = {
            'YEAR': 31536000,
            'MONTH': 2592000,
            'WEEK': 604800,
            'DAY': 86400,
            'HOUR': 3600,
            'MINUTE': 60,
            'SECOND': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + i + ' AGO'; 
                } else {
                    return counter + ' ' + i + 'S AHO';
                }
        }
    }
    return value;
}

}
