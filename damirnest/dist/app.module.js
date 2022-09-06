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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppModule = void 0;
const common_1 = require('@nestjs/common');
const app_controller_1 = require('./app.controller');
const app_service_1 = require('./app.service');
const auth_module_1 = require('./auth/auth.module');
const review_module_1 = require('./review/review.module');
const product_module_1 = require('./product/product.module');
const top_page_module_1 = require('./top-page/top-page.module');
const config_1 = require('@nestjs/config');
const mongo_config_1 = require('./configs/mongo.config');
const nestjs_typegoose_1 = require('nestjs-typegoose');
const files_module_1 = require('./files/files.module');
const telegram_module_1 = require('./telegram/telegram.module');
const telegram_config_1 = require('./configs/telegram.config');
const hh_module_1 = require('./hh/hh.module');
const schedule_1 = require('@nestjs/schedule');
let AppModule = class AppModule {};
AppModule = __decorate(
	[
		(0, common_1.Module)({
			imports: [
				schedule_1.ScheduleModule.forRoot(),
				config_1.ConfigModule.forRoot(),
				nestjs_typegoose_1.TypegooseModule.forRootAsync({
					imports: [config_1.ConfigModule],
					inject: [config_1.ConfigService],
					useFactory: mongo_config_1.getMongoConfig,
				}),
				auth_module_1.AuthModule,
				review_module_1.ReviewModule,
				product_module_1.ProductModule,
				top_page_module_1.TopPageModule,
				files_module_1.FilesModule,
				telegram_module_1.TelegramModule.forRootAsync({
					imports: [config_1.ConfigModule],
					inject: [config_1.ConfigService],
					useFactory: telegram_config_1.getTelegramConfig,
				}),
				hh_module_1.HhModule,
			],
			controllers: [app_controller_1.AppController],
			providers: [app_service_1.AppService],
		}),
	],
	AppModule,
);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
