import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/ui/header/header.component';

@Component({
	selector: 'ku-main-page',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
