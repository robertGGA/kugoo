import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/components/ui/icon/icon.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';

@Component({
	selector: 'ku-header',
	standalone: true,
	imports: [CommonModule, IconComponent, ButtonComponent, ClickOutsideDirective],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	click() {
		console.log('hi i opened')
	}
}
