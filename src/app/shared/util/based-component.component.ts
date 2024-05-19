import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-module',
  template: '<div></div>',
})
export class BaseComponent implements OnDestroy {
  protected destory$ = new Subject<void>();

  constructor() {}

  safeObservable<T = any>(observable: Observable<T>) {
    return observable.pipe(takeUntil(this.destory$));
  }
  // =>Called once, before the instance is destroyed.
  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
    this.onDestroy();
  }
  onDestroy() {
    // =>TODO:called from child component
  }
}
