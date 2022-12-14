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
Object.defineProperty(exports, '__esModule', { value: true });
exports.createReviewDto = void 0;
const class_validator_1 = require('class-validator');
class createReviewDto {}
__decorate(
	[(0, class_validator_1.IsString)(), __metadata('design:type', String)],
	createReviewDto.prototype,
	'name',
	void 0,
);
__decorate(
	[(0, class_validator_1.IsString)(), __metadata('design:type', String)],
	createReviewDto.prototype,
	'title',
	void 0,
);
__decorate(
	[(0, class_validator_1.IsString)(), __metadata('design:type', String)],
	createReviewDto.prototype,
	'description',
	void 0,
);
__decorate(
	[
		(0, class_validator_1.Max)(5, { message: 'Рейтинг не может быть более 5' }),
		(0, class_validator_1.Min)(1, { message: 'Рейтинг не может быть менее 1' }),
		(0, class_validator_1.IsNumber)(),
		__metadata('design:type', Number),
	],
	createReviewDto.prototype,
	'rating',
	void 0,
);
__decorate(
	[(0, class_validator_1.IsString)(), __metadata('design:type', String)],
	createReviewDto.prototype,
	'productId',
	void 0,
);
exports.createReviewDto = createReviewDto;
//# sourceMappingURL=create-review.dto.js.map
