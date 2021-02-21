import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ])
    ])
  ]);