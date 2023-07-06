import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ku-not-found-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {

}
