import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { TypegooseModule } from 'nestjs-typegoose';
import { FilesModule } from './files/files.module';
import { TelegramModule } from './telegram/telegram.module';
import { getTelegramConfig } from './configs/telegram.config';
import { HhModule } from './hh/hh.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		ReviewModule,
		ProductModule,
		TopPageModule,
		FilesModule,
		TelegramModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTelegramConfig,
		}),
		HhModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}