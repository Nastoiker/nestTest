import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class HhData {
	@prop()
	countNumber: number;
	@prop()
	juniorSalary: number;
	@prop()
	middleSalary: number;
	@prop()
	seniorSalary: number;
	@prop()
	updateAt: Date;
}
export class TopPageAdventuge {
	@prop()
	title: string;
	@prop()
	description: string;
}
export enum ToplevelCategory {
	Services,
	Cources,
	Books,
	Product,
}
export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
	@prop({ enum: ToplevelCategory })
	firstLevelCategory: ToplevelCategory;
	@prop()
	secondCategory: string;
	@prop()
	alias: string;
	@prop()
	title: string;
	@prop()
	category: string;
	@prop({ type: () => HhData })
	hh?: HhData;
	@prop({ type: () => [TopPageAdventuge] })
	advantages: TopPageAdventuge[];
	@prop()
	seoText: string;
	@prop()
	tagsTitle: string;
	@prop({ type: () => [String] })
	tags: string[];
}
