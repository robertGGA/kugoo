import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ku-ask-manager-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ask-manager-dialog.component.html',
  styleUrls: ['./ask-manager-dialog.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AskManagerDialogComponent {

}
