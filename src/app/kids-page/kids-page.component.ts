import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kids-page',
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.scss']
})
export class KidsPageComponent implements OnInit {
  count: number = 0;
  counting(){
    this.count++;
  }
  @Output() countBuying = new EventEmitter();
  Buying(): void {
    alert('The clothes was buyed');
    this.counting();
  }

  constructor() { }
  ngOnInit(): void {
  }


}
