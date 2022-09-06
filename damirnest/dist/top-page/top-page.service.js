"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const top_page_model_1 = require("./top-page.model");
const date_fns_1 = require("date-fns");
let TopPageService = class TopPageService {
    constructor(topPageModel) {
        this.topPageModel = topPageModel;
    }
    async createTopPage(dto) {
        return this.topPageModel.create(dto);
    }
    async getById(id) {
        return this.topPageModel.findById(id);
    }
    async deleteById(id) {
        return this.topPageModel.findByIdAndDelete(id);
    }
    async UpdateById(id, dto) {
        return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async findByCategory(firstCategory) {
        return this.topPageModel
            .find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 })
            .exec();
    }
    async findByAlias(alias) {
        return this.topPageModel.findOne({ alias }).exec();
    }
    async findForHhUpdate(date) {
        return this.topPageModel
            .find({
            firstLevelCategory: 0,
            $or: [
                { 'hh.updateAt': { $lt: (0, date_fns_1.addDays)(date, -1) } },
                { 'hh.updateAt': { $exists: false } },
            ],
        })
            .exec();
    }
};
TopPageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(top_page_model_1.TopPageModel)),
    __metadata("design:paramtypes", [Object])
], TopPageService);
exports.TopPageService = TopPageService;
//# sourceMappingURL=top-page.service.js.map