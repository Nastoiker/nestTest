import { CreateTopPageDto } from './dto/createTop-Page.dto';
import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ToplevelCategory, TopPageModel } from './top-page.model';
import { addDays } from 'date-fns';

@Injectable()
export class TopPageService {
	constructor(
		@InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>,
	) {}
	async createTopPage(dto: CreateTopPageDto) {
		return this.topPageModel.create(dto);
	}
	async getById(id: string): Promise<ModelType<TopPageModel> | null> {
		return this.topPageModel.findById(id);
	}
	async deleteById(id: string) {
		return this.topPageModel.findByIdAndDelete(id);
	}
	async UpdateById(id: string, dto: CreateTopPageDto) {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
	async findByCategory(firstCategory: ToplevelCategory) {
		return this.topPageModel
			.find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 })
			.exec();
	}
	async findByAlias(alias: string) {
		return this.topPageModel.findOne({ alias }).exec();
	}
	async findForHhUpdate(date: Date) {
		return this.topPageModel
			.find({
				firstLevelCategory: 0,
				$or: [
					{ 'hh.updateAt': { $lt: addDays(date, -1) } },
					{ 'hh.updateAt': { $exists: false } },
				],
			})
			.exec();
	}
}
