import { ReviewModel } from './review.model';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { createReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from '../decorators/user-email.decorators';
import { IdValidationpipe } from 'src/pipes/idValidation.pipe';
import { TelegramService } from 'src/telegram/telegram.service';

@Controller('review')
export class ReviewController {
	constructor(
		private readonly reviewService: ReviewService,
		private readonly telegram: TelegramService,
	) {}
	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: createReviewDto) {
		return this.reviewService.create(dto);
	}
	@UsePipes(new ValidationPipe())
	@Post('notify')
	async notify(@Body() dto: createReviewDto) {
		const message =
			`Имя: ${dto.name}\n` +
			`Заголовок: ${dto.title}\n` +
			`Описание: ${dto.description}\n` +
			`Рейтинг: ${dto.rating}\n` +
			`Id продукта: ${dto.productId}\n`;
		return this.telegram.sendMessage(message);
	}
	@Get('byProduct/:productId')
	async get(@Param('productId', IdValidationpipe) productId: string, @UserEmail() email: string) {
		return this.reviewService.findProductId(productId);
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationpipe) id: string) {
		const deletedDoc = await this.reviewService.delete(id);
		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}
}
