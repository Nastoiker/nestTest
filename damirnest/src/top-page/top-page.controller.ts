import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FindProductDto } from 'src/product/dto/find-product.dto';
import { ProductModel } from 'src/product/product.model';
import { CreateTopPageDto } from './dto/createTop-Page.dto';
import { FindTopPageDto } from './dto/top-page.dto';
import { TOPPAGE_NOFOUND_ERROR } from './top-page.contants';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
	constructor(
		private readonly topPageService: TopPageService,
		private readonly schedulerRegistry: SchedulerRegistry,
	) {}
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateTopPageDto) {
		return this.topPageService.createTopPage(dto);
	}
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id') id: string) {
		const topPageGet = await this.topPageService.getById(id);
		if (!topPageGet) throw new NotFoundException(TOPPAGE_NOFOUND_ERROR);
		return topPageGet;
	}
	@Get('byAlias/:alias')
	async getByAlias(@Param('alias') alias: string) {
		const topPageGetByAlias = await this.topPageService.findByAlias(alias);
		if (!topPageGetByAlias) throw new NotFoundException(TOPPAGE_NOFOUND_ERROR);
		return topPageGetByAlias;
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const topPageDelete = await this.topPageService.deleteById(id);
		if (!topPageDelete) throw new NotFoundException(TOPPAGE_NOFOUND_ERROR);
	}
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateTopPageDto) {
		const topPageUpdate = await this.topPageService.UpdateById(id, dto);
		if (!topPageUpdate) throw new NotFoundException(TOPPAGE_NOFOUND_ERROR);
		return topPageUpdate;
	}
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() { firstCategory }: FindTopPageDto) {
		return this.topPageService.findByCategory(firstCategory);
	}
	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT, { name: 'test' })
	async test() {
		const job = this.schedulerRegistry.getCronJob('test');
	}
}
