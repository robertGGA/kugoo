import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { emailRegex } from '@app/utils/regex.helper';

@Component({
	selector: 'ku-footer',
	standalone: true,
	imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	emailControl: FormControl<string | null>;

	constructor() {
		this.emailControl = new FormControl<string | null>(null, [Validators.pattern(emailRegex), Validators.required]);
	}

	onSubmitEmail(): void {
		console.log(this.emailControl.errors);
	}

}
