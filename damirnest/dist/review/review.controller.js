'use strict';
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d;
		if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
var __metadata =
	(this && this.__metadata) ||
	function (k, v) {
		if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
			return Reflect.metadata(k, v);
	};
var __param =
	(this && this.__param) ||
	function (paramIndex, decorator) {
		return function (target, key) {
			decorator(target, key, paramIndex);
		};
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReviewController = void 0;
const common_1 = require('@nestjs/common');
const create_review_dto_1 = require('./dto/create-review.dto');
const review_service_1 = require('./review.service');
const review_constants_1 = require('./review.constants');
const jwt_guard_1 = require('../auth/guards/jwt.guard');
const user_email_decorators_1 = require('../decorators/user-email.decorators');
const idValidation_pipe_1 = require('../pipes/idValidation.pipe');
const telegram_service_1 = require('../telegram/telegram.service');
let ReviewController = class ReviewController {
	constructor(reviewService, telegram) {
		this.reviewService = reviewService;
		this.telegram = telegram;
	}
	async create(dto) {
		return this.reviewService.create(dto);
	}
	async notify(dto) {
		const message =
			`Имя: ${dto.name}\n` +
			`Заголовок: ${dto.title}\n` +
			`Описание: ${dto.description}\n` +
			`Рейтинг: ${dto.rating}\n` +
			`Id продукта: ${dto.productId}\n`;
		return this.telegram.sendMessage(message);
	}
	async get(productId, email) {
		return this.reviewService.findProductId(productId);
	}
	async delete(id) {
		const deletedDoc = await this.reviewService.delete(id);
		if (!deletedDoc) {
			throw new common_1.HttpException(
				review_constants_1.REVIEW_NOT_FOUND,
				common_1.HttpStatus.NOT_FOUND,
			);
		}
	}
};
__decorate(
	[
		(0, common_1.UsePipes)(new common_1.ValidationPipe()),
		(0, common_1.Post)('create'),
		__param(0, (0, common_1.Body)()),
		__metadata('design:type', Function),
		__metadata('design:paramtypes', [create_review_dto_1.createReviewDto]),
		__metadata('design:returntype', Promise),
	],
	ReviewController.prototype,
	'create',
	null,
);
__decorate(
	[
		(0, common_1.UsePipes)(new common_1.ValidationPipe()),
		(0, common_1.Post)('notify'),
		__param(0, (0, common_1.Body)()),
		__metadata('design:type', Function),
		__metadata('design:paramtypes', [create_review_dto_1.createReviewDto]),
		__metadata('design:returntype', Promise),
	],
	ReviewController.prototype,
	'notify',
	null,
);
__decorate(
	[
		(0, common_1.Get)('byProduct/:productId'),
		__param(0, (0, common_1.Param)('productId', idValidation_pipe_1.IdValidationpipe)),
		__param(1, (0, user_email_decorators_1.UserEmail)()),
		__metadata('design:type', Function),
		__metadata('design:paramtypes', [String, String]),
		__metadata('design:returntype', Promise),
	],
	ReviewController.prototype,
	'get',
	null,
);
__decorate(
	[
		(0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
		(0, common_1.Delete)(':id'),
		__param(0, (0, common_1.Param)('id', idValidation_pipe_1.IdValidationpipe)),
		__metadata('design:type', Function),
		__metadata('design:paramtypes', [String]),
		__metadata('design:returntype', Promise),
	],
	ReviewController.prototype,
	'delete',
	null,
);
ReviewController = __decorate(
	[
		(0, common_1.Controller)('review'),
		__metadata('design:paramtypes', [
			review_service_1.ReviewService,
			telegram_service_1.TelegramService,
		]),
	],
	ReviewController,
);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map
