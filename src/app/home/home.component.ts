import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { destroyed, untilDestroyed } from 'src/utils/until-destroyed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  name = '';
  count = 0;

  logs: string[] = [];

  name$ = new Subject<string>();

  destroy$ = destroyed();

  counter$ = timer(0, 1000).pipe(untilDestroyed());

  ngOnInit(): void {
    this.counter$.subscribe((item) => {
      this.count = item;
      console.log('home', item)
    })
    this.name$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.logs.push(value);
      console.log('name change', value);
    })
  }
}
