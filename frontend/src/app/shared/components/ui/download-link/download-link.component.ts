import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
	selector: "ku-download-link",
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: "./download-link.component.html",
	styleUrls: ["./download-link.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadLinkComponent {
	@Input() isSmall = false;
	@Input() link: string | null = null;
}
