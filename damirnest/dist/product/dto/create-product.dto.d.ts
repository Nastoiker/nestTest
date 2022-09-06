import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export declare class ProductCharactetistricsDto {
	name: string;
	value: string;
}
export interface createProductDto extends Base {}
export declare class createProductDto extends TimeStamps {
	image: string;
	title: string;
	price: number;
	oldPrice?: number;
	credit: number;
	description: string;
	advantageSL: string;
	disAdvangates: string;
	categories: string[];
	tags: string[];
	charactetistrics: ProductCharactetistricsDto[];
}
