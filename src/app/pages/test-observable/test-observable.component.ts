import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.scss'],
})
export class TestObservableComponent {
  observable: Observable<any>;

  constructor() {
    this.observable = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    this.observable.subscribe((value) => console.log(value));
  }
}
