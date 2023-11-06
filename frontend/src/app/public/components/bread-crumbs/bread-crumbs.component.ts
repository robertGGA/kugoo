import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "ku-bread-crumbs",
	templateUrl: "./bread-crumbs.component.html",
	styleUrls: ["./bread-crumbs.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadCrumbsComponent {
	private router = inject(Router);

	get route(): string[] {
		const urls = this.router.url.split("/");
		urls.shift();
		urls.unshift("main");

		return urls;
	}

	validUrl(url: string): string {
		if (url === "main") {
			return "";
		}
		const urlIndex = this.route.indexOf(url);
		// Starts from second index for ignore main route
		return this.route.slice(1, urlIndex + 1).join("/");
	}
}
