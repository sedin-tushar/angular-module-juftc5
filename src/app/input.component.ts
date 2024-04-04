import { Component, Input, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validators,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <input
        [placeholder]="placeholder"
        [formControl]="formControl"
        class="
          w-full
          p-4
          text-lg
          bg-black
          border-2
          border-neutral-800
          rounded-md
          outline-none
          text-white
          focus:border-sky-500
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
        [type]="type"
    >`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  styles: [],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input('placeholder') placeholder: string = '';
  @Input('type') type: string = 'text';
  @Input() required: boolean = false;
  @Input() email: boolean = false;

  formControl!: FormControl;
  onTouched: any;
  onChange: any;

  ngOnInit(): void {
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.email) {
      validators.push(Validators.email);
    }

    this.formControl = new FormControl('', validators);
  }

  writeValue(value: any): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
