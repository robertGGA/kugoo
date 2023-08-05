export interface PreviewCardTypes {
	id: string,
	image: string | Blob,
	specs?: CardSpecs,
	isNew?: boolean,
	price: number,
	discount?: number,
	name: string
}


export interface CardSpecs {
	accum?: number | string,
	speed?: number,
	power?: number | string,
	time?: number
}
