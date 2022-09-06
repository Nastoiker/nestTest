import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export class ProductCharactetistrics {
	@prop()
	name: string;
	@prop()
	value: string;
}
export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
	@prop()
	image: string;
	@prop()
	title: string;
	@prop()
	price: number;
	@prop()
	oldPrice?: number;
	@prop()
	credit: number;
	@prop()
	calculatedRaiting: number;
	@prop()
	description: string;
	@prop()
	advantageSL: string;
	@prop()
	disAdvangates: string;
	@prop({ type: () => [String] })
	categories: string[];
	@prop({ type: () => [String] })
	tags: string[];
	@prop({ type: () => [ProductCharactetistrics], id: false })
	charactetistrics: ProductCharactetistrics[];
}
