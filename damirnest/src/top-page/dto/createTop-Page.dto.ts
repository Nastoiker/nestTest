import { Type } from 'class-transformer';
import {
	IsArray,
	IsDate,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';

export class HhDto {
	@IsNumber()
	countNumber: number;
	@IsNumber()
	juniorSalary: number;
	@IsNumber()
	middleSalary: number;
	@IsNumber()
	seniorSalary: number;
	@IsDate()
	updateAt: Date;
}
export class TopPageAdventugeDto {
	@IsString()
	title: string;
	@IsString()
	description: string;
}
export enum ToplevelCategoryDto {
	Services,
	Cources,
	Books,
	Product,
}
export class CreateTopPageDto {
	@IsEnum(ToplevelCategoryDto)
	firstLevelCategory: ToplevelCategoryDto;
	@IsString()
	secondCategory: string;
	@IsString()
	alias: string;
	@IsString()
	title: string;
	@IsString()
	category: string;
	@IsOptional()
	@ValidateNested()
	@Type(() => HhDto)
	hh?: HhDto;
	@IsArray()
	@ValidateNested()
	@Type(() => TopPageAdventugeDto)
	advantages: TopPageAdventugeDto[];
	@IsString()
	seoText: string;
	@IsString()
	tagsTitle: string;
	@IsArray()
	@IsString()
	tags: string[];
}
