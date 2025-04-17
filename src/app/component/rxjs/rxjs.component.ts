import { Component, OnInit } from '@angular/core';
import { Observable,of,from, filter,concat, fromEvent ,merge, interval } from 'rxjs';
import { tap,debounceTime, map,take  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  imports: [],
  standalone:true,
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  title = 'rxjs-of-operator-example';
  data: any;
  source1 = of(1, 2);
source3 = of(3, 4);
  
  ngOnInit(): void {
    
// Subscribing to the observable
const observable = of(1, 2, 3, 4, 5);
// observable.subscribe({
//   next: (value) => {
//     console.log('Emitted value:', value);
//     this.data = value; // Assigning the emitted value to a component property
//   },
//   error: (err) => console.error('Error:', err),
//   complete: () => console.log('Observable completed')
// });

    const get6Characters = (string: string) => string.substring(0, 6);

    get6Characters('Buckethead');


// const source = from([1, 2, 3, 4, 5]);
// const filtered = source.pipe(filter(value => value >= 3));

// filtered.subscribe(result => console.log(result));






// const concatenated = concat(this.source1, this.source3);

// concatenated.subscribe((result: any) => console.log(result));


// const input = document.getElementById('input');
// const keyup = fromEvent(this.input, 'keyup').pipe(
//   map((event: any) => event.target.value),
//   debounceTime(300)
// );

// keyup.subscribe(result => console.log(result));


const source1 = interval(1000).pipe(take(3));
const source2 = interval(500).pipe(take(6));
const merged = merge(source1, source2);

merged.subscribe(result => console.log(result));

}







}




