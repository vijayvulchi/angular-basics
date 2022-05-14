import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-oninit',
  templateUrl: './lifecycle-oninit.component.html',
  styleUrls: ['./lifecycle-oninit.component.css'],
})
export class LifecycleOninitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }
}
