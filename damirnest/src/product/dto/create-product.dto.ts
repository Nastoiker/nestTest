import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
export class ProductCharactetistricsDto {
	@IsString()
	name: string;
	@IsString()
	value: string;
}
export interface createProductDto extends Base {}
export class createProductDto extends TimeStamps {
	@IsString()
	image: string;
	@IsString()
	title: string;
	@IsNumber()
	price: number;
	@IsOptional()
	@IsNumber()
	oldPrice?: number;
	@IsNumber()
	credit: number;
	@IsString()
	description: string;
	@IsString()
	advantageSL: string;
	@IsString()
	disAdvangates: string;
	@IsArray()
	@IsString({ each: true })
	categories: string[];
	@IsString()
	@IsArray()
	tags: string[];
	@IsArray()
	@ValidateNested()
	@Type(() => ProductCharactetistricsDto)
	charactetistrics: ProductCharactetistricsDto[];
}
