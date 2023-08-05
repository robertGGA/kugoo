import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/components/ui/icon/icon.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { AutocompleteComponent } from '@shared/components/ui/autocomplete/autocomplete.component';
import { DropdownComponent } from '@shared/components/ui/dropdown/dropdown.component';
import { DropdownOptionComponent } from '@shared/components/ui/dropdown-option/dropdown-option.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ku-header',
	standalone: true,
	imports: [CommonModule, IconComponent, ButtonComponent, ClickOutsideDirective, AutocompleteComponent, DropdownComponent, DropdownOptionComponent, RouterLink],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	testOptions: { id: string, name: string }[] =
		[{ id: '0', name: 'Самокаты' }, { id: '1', name: 'Аксессуары' }]

	click() {
		console.log('hi i opened')
	}

	protected readonly DropdownOptionComponent = DropdownOptionComponent;
}
