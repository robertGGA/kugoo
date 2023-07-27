import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/ui/button/button.component';

@Component({
	selector: 'ku-footer',
	standalone: true,
	imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
	emailControl = new FormControl('');

	onSubmitEmail(): void {
		console.log(this.emailControl.value);
	}

}
