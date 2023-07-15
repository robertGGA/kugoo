import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/components/ui/icon/icon.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { AutocompleteComponent } from '@shared/components/ui/autocomplete/autocomplete.component';

@Component({
	selector: 'ku-header',
	standalone: true,
	imports: [CommonModule, IconComponent, ButtonComponent, ClickOutsideDirective, AutocompleteComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	click() {
		console.log('hi i opened')
	}
}
