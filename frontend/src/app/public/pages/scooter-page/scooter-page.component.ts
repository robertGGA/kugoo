import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ku-scooter-page',
	templateUrl: './scooter-page.component.html',
	styleUrls: ['./scooter-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScooterPageComponent {
	images: Array<string> = [];
	chooseImage: string = 'assets/preview-images/samokat.png';
	isExists: boolean = true;

	constructor() {
		this.images = [
			'assets/preview-images/small/drone.png',
			'assets/preview-images/small/woman.png',
			'assets/preview-images/small/img_2.png',
			'assets/preview-images/small/img_3.png',
			'assets/preview-images/small/img_4.png',
			'assets/preview-images/small/img_5.png',
			'assets/preview-images/small/img_6.png'
		]
	}

	changeImage(url: string): void {
		this.chooseImage = url;
	}
}
