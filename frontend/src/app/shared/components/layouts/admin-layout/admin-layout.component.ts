import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'ku-admin-layout',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {

}
