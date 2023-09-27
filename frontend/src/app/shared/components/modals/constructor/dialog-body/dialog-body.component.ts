import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ku-dialog-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogBodyComponent {

}
