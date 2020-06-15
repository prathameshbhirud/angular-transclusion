import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() header: string = 'This is header';
  @Input() footer: string = 'This is footer'

  constructor() { }

  ngOnInit() {
  }

}
