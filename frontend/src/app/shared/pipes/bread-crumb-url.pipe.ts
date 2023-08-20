import { Pipe, PipeTransform } from '@angular/core';


interface BreadCrumbsData {
	[n: string]: string
}

const urlDescription: BreadCrumbsData = {
	scooter: 'Электросамокаты',
	catalog: 'Каталог',
	main: 'Главная'
}

@Pipe({
	name: 'breadCrumbUrl',
	standalone: true
})
export class BreadCrumbUrlPipe implements PipeTransform {
	transform(value: string, separator?: string, ...args: unknown[]): string {
		const separatedUrl = value.split(separator ?? ' ');

		return separatedUrl
			.filter(urlItem => urlDescription[urlItem as keyof BreadCrumbsData] || Number(urlItem))
			.map(item => {
				if (Number(item)) {
					return item;
				}
				const urlKey = urlDescription[item as keyof BreadCrumbsData];
				return urlKey + '/'
			}).toString();
	}


}
