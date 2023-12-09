export interface IconBase {
	updateSvg(rawValue: string): void

	removeSvg(): void

	createSvg(rawValue: string): void
}

export type IconSize = number | string;
