import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { untilDestroyed } from 'src/utils/until-destroyed';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  count = 0;

  counter$ = timer(0, 1000).pipe(untilDestroyed());

  ngOnInit(): void {
    this.counter$.subscribe((item) => {
      this.count = item;
      console.log('profile', item)
    })
  }

}
