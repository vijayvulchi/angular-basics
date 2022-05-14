import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-onchanges',
  templateUrl: './lifecycle-onchanges.component.html',
  styleUrls: ['./lifecycle-onchanges.component.css'],
})
export class LifecycleOnchangesComponent implements OnInit {
  @Input() prop: number = 0;

  constructor() {}

  ngOnChanges(onchanges: SimpleChange) {
    console.log('on changes: ', onchanges);
  }

  ngOnInit(): void {
    console.log('Child OnInit');
  }
}
