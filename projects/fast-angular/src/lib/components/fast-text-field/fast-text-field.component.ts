import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ng-fast-text-field',
  templateUrl: './fast-text-field.component.html',
  styleUrls: ['./fast-text-field.component.scss']
})
export class FastTextFieldComponent implements OnInit, ControlValueAccessor {
  @ViewChild('field', { static: true, read: ElementRef }) field: ElementRef | undefined;

  private _value: string = '';

  get value(): string {
    return this._value;
  }

  @Input() set value(value: string) {
    this._value = value;
    this.valueChanged.emit(value);
  }

  @Output() valueChanged = new EventEmitter<string>();

  constructor() { }

  writeValue(obj: any): void {
    //return (this.field as any).writeValue(...arguments);
  }
  registerOnChange(fn: any): void {
    //return (this.field as any).registerOnChange(...arguments);
  }
  registerOnTouched(fn: any): void {
    //return (this.field as any).registerOnTouched(...arguments);
  }

  ngOnInit(): void {
  }

}
