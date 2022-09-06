import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export declare class ProductCharactetistrics {
	name: string;
	value: string;
}
export interface ProductModel extends Base {}
export declare class ProductModel extends TimeStamps {
	image: string;
	title: string;
	price: number;
	oldPrice?: number;
	credit: number;
	calculatedRaiting: number;
	description: string;
	advantageSL: string;
	disAdvangates: string;
	categories: string[];
	tags: string[];
	charactetistrics: ProductCharactetistrics[];
}
