import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { EmailDialogComponent } from "@app/public/components/modals/email-dialog/email-dialog.component";
import { emailRegex } from "@app/utils/regex.helper";
import { DialogService } from "@core/services/dialog.service";
import { ButtonComponent } from "@shared/components/ui/button/button.component";
import { DownloadLinkComponent } from "@shared/components/ui/download-link/download-link.component";
import { IconComponent } from "@shared/components/ui/icon/icon.component";

export interface LinksButtonInterface {
	link: string,
	iconName: string,
	title: string,
	count: number
}

@Component({
	selector: "ku-footer",
	standalone: true,
	imports: [CommonModule, ButtonComponent, ReactiveFormsModule, IconComponent, DownloadLinkComponent, RouterLink],
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	emailControl: FormControl<string | null>;

	links: LinksButtonInterface[] = [{
		link: "/", iconName: "vk", title: "Вконтакте", count: 3120
	}, {
		link: "/",
		iconName: "inst",
		title: "Instagram",
		count: 10320,
	}, {
		link: "/",
		iconName: "telegram",
		title: "Telegram",
		count: 3200,
	},
	{
		link: "/",
		iconName: "youtube",
		title: "Youtube",
		count: 3921,
	}];

	constructor(private dialogService: DialogService) {
		this.emailControl = new FormControl<string | null>(null, [Validators.pattern(emailRegex), Validators.required]);
	}

	onSubmitEmail(): void {
		this.dialogService.open(EmailDialogComponent, { data: this.emailControl.value });
	}
}
