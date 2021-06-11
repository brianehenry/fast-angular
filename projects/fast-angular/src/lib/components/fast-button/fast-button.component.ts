import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-fast-button',
  templateUrl: './fast-button.component.html',
  styleUrls: ['./fast-button.component.scss']
})
export class FastButtonComponent implements OnInit {
  @Input() appearance: string = 'neutral';
  @Input() name: string|undefined = undefined;
  @Input() type: 'submit'|'reset'|'button'|undefined = undefined;
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent): void {
    //this.click.emit(event);
  }
}
