import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Modal',
  template: `
    <div *ngIf="isOpen" class="modal">
      <h2>{{ title }}</h2>
      <ng-content></ng-content>
      <button (click)="submit.emit()">{{ actionLabel }}</button>
    </div>
  `,
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() actionLabel: string = '';
  @Output() submit = new EventEmitter<void>();
}
