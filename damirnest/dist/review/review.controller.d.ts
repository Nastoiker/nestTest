import { ReviewModel } from './review.model';
import { createReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { TelegramService } from 'src/telegram/telegram.service';
export declare class ReviewController {
	private readonly reviewService;
	private readonly telegram;
	constructor(reviewService: ReviewService, telegram: TelegramService);
	create(
		dto: createReviewDto,
	): Promise<
		import('@typegoose/typegoose').DocumentType<
			ReviewModel,
			import('@typegoose/typegoose/lib/types').BeAnObject
		>
	>;
	notify(dto: createReviewDto): Promise<void>;
	get(
		productId: string,
		email: string,
	): Promise<
		import('@typegoose/typegoose').DocumentType<
			ReviewModel | null,
			import('@typegoose/typegoose/lib/types').BeAnObject
		>[]
	>;
	delete(id: string): Promise<void>;
}
