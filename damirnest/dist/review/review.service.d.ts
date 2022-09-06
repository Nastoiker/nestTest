import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { createReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
export declare class ReviewService {
	private readonly reviewModel;
	constructor(reviewModel: ModelType<ReviewModel>);
	create(dto: createReviewDto): Promise<DocumentType<ReviewModel>>;
	delete(id: string): Promise<DocumentType<ReviewModel> | null>;
	findProductId(productId: string): Promise<DocumentType<ReviewModel | null>[]>;
	deleteByProductId(productId: string): Promise<import('mongodb').DeleteResult>;
}
