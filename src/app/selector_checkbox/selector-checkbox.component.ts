import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { SizeKey, ToppingKey } from '../../data';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-selector-checkbox',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './selector-checkbox.component.html',
  styleUrl: './selector-checkbox.component.css'
})
export class SelectorCheckboxComponent {
  @Input() topping!: ToppingKey;
  @Input() size!: SizeKey;

  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  clicked() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
