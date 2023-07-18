import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ku-dropdown-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-option.component.html',
  styleUrls: ['./dropdown-option.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent {

}
