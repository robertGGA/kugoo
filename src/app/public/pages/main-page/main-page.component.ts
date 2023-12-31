import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ServiceCardTypes } from "@app/public/pages/main-page/components/service-card/service-card.types";
import { PreviewCardTypes } from "@shared/components/ui/preview-card/preview-card.types";

@Component({
	selector: "ku-main-page",
	templateUrl: "./main-page.component.html",
	styleUrls: ["./main-page.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
	cardData: PreviewCardTypes[] = [
		{
			id: "1",
			image: "",
			discount: 1000,
			price: 2000,
			specs: {
				speed: 15, power: 1.2, accum: 300, time: 5
			},
			isNew: false,
			name: "Kogoo G-Max",
		},
		{
			id: "7",
			image: "",
			discount: 1000,
			price: 2000,
			specs: {
				speed: 15, power: 1.2, accum: 300, time: 5
			},
			isNew: false,
			name: "Kogoo G-Max",
		},
		{
			id: "2",
			image: "",
			discount: 1000,
			price: 2000,
			specs: {
				speed: 15, power: 1.2, accum: 300, time: 5
			},
			isNew: true,
			name: "Kogoo ES3",
		},
		{
			id: "3",
			image: "",
			discount: 1000,
			price: 2000,
			specs: {
				speed: 15, power: 1.2, accum: 300, time: 5
			},
			name: "Kogoo HX Pro",
		},
		{
			id: "4",
			image: "",
			discount: 1000,
			price: 2000,
			specs: {
				speed: 15, power: 1.2, accum: 300, time: 5
			},
			name: "Kogoo G-Max",
		}
	];

	get serviceCards(): Array<ServiceCardTypes> {
		return [
			{
				title: "Подбор модели электросамоката",
				description: "Пройдите тест и выберите электросамокат по своим критериям",
				link: "/",
				image: "assets/service-card/img.png",
			},
			{
				title: "Сервисное обслуживание",
				description: "Крупнейший сервисный центр в России для продуктов Kugoo",
				link: "/",
				image: "assets/service-card/woman.png",
			}
		];
	}
}
