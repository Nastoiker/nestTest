/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from 'src/review/review.model';
import { createProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
export declare class ProductService {
	private readonly productModel;
	constructor(productModel: ModelType<ProductModel>);
	create(dto: createProductDto): Promise<
		import('mongoose').Document<
			import('mongoose').Types.ObjectId,
			import('@typegoose/typegoose/lib/types').BeAnObject,
			ProductModel
		> &
			ProductModel &
			import('@typegoose/typegoose/lib/types').IObjectWithTypegooseFunction & {
				_id: import('mongoose').Types.ObjectId;
			}
	>;
	findById(id: string): Promise<
		| (import('mongoose').Document<
				import('mongoose').Types.ObjectId,
				import('@typegoose/typegoose/lib/types').BeAnObject,
				ProductModel
		  > &
				ProductModel &
				import('@typegoose/typegoose/lib/types').IObjectWithTypegooseFunction & {
					_id: import('mongoose').Types.ObjectId;
				})
		| null
	>;
	deleteById(id: string): Promise<
		| (import('mongoose').Document<
				import('mongoose').Types.ObjectId,
				import('@typegoose/typegoose/lib/types').BeAnObject,
				ProductModel
		  > &
				ProductModel &
				import('@typegoose/typegoose/lib/types').IObjectWithTypegooseFunction & {
					_id: import('mongoose').Types.ObjectId;
				})
		| null
	>;
	updateById(
		id: string,
		dto: createProductDto,
	): Promise<
		| (import('mongoose').Document<
				import('mongoose').Types.ObjectId,
				import('@typegoose/typegoose/lib/types').BeAnObject,
				ProductModel
		  > &
				ProductModel &
				import('@typegoose/typegoose/lib/types').IObjectWithTypegooseFunction & {
					_id: import('mongoose').Types.ObjectId;
				})
		| null
	>;
	findWithReview(dto: FindProductDto): Promise<
		(ProductModel & {
			review: ReviewModel[];
			reviewCount: number;
			reviewAvg: number;
		})[]
	>;
}
