import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { untilDestroyed } from 'src/utils/until-destroyed';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  count = 0;

  counter$ = timer(0, 1000).pipe(untilDestroyed());

  ngOnInit(): void {
    this.router.navigate(['/home'])
    this.counter$.subscribe((item) => {
      this.count = item;
      console.log('redirect', item)
    });
  }

}
