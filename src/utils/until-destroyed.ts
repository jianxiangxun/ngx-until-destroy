import { ChangeDetectorRef, inject, ViewRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

export function destroyed () {
  const destroy$ = new Subject<void>();

  const vf = inject(ChangeDetectorRef) as ViewRef;

  window.requestIdleCallback(() => {
    const fn = () => {
      destroy$.next();
      destroy$.complete();
    }

    if (vf.destroyed) {
      fn();
    } else {
      vf.onDestroy(fn);
    }
  });

  return destroy$;
}


export function untilDestroyed<T>() {
  return takeUntil<T>(destroyed());
}
