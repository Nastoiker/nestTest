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
exports.TopPageController = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const createTop_Page_dto_1 = require("./dto/createTop-Page.dto");
const top_page_dto_1 = require("./dto/top-page.dto");
const top_page_contants_1 = require("./top-page.contants");
const top_page_service_1 = require("./top-page.service");
let TopPageController = class TopPageController {
    constructor(topPageService, schedulerRegistry) {
        this.topPageService = topPageService;
        this.schedulerRegistry = schedulerRegistry;
    }
    async create(dto) {
        return this.topPageService.createTopPage(dto);
    }
    async get(id) {
        const topPageGet = await this.topPageService.getById(id);
        if (!topPageGet)
            throw new common_1.NotFoundException(top_page_contants_1.TOPPAGE_NOFOUND_ERROR);
        return topPageGet;
    }
    async getByAlias(alias) {
        const topPageGetByAlias = await this.topPageService.findByAlias(alias);
        if (!topPageGetByAlias)
            throw new common_1.NotFoundException(top_page_contants_1.TOPPAGE_NOFOUND_ERROR);
        return topPageGetByAlias;
    }
    async delete(id) {
        const topPageDelete = await this.topPageService.deleteById(id);
        if (!topPageDelete)
            throw new common_1.NotFoundException(top_page_contants_1.TOPPAGE_NOFOUND_ERROR);
    }
    async patch(id, dto) {
        const topPageUpdate = await this.topPageService.UpdateById(id, dto);
        if (!topPageUpdate)
            throw new common_1.NotFoundException(top_page_contants_1.TOPPAGE_NOFOUND_ERROR);
        return topPageUpdate;
    }
    async find({ firstCategory }) {
        return this.topPageService.findByCategory(firstCategory);
    }
    async test() {
        const job = this.schedulerRegistry.getCronJob('test');
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTop_Page_dto_1.CreateTopPageDto]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('byAlias/:alias'),
    __param(0, (0, common_1.Param)('alias')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "getByAlias", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createTop_Page_dto_1.CreateTopPageDto]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "patch", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('find'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [top_page_dto_1.FindTopPageDto]),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "find", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT, { name: 'test' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TopPageController.prototype, "test", null);
TopPageController = __decorate([
    (0, common_1.Controller)('top-page'),
    __metadata("design:paramtypes", [top_page_service_1.TopPageService,
        schedule_1.SchedulerRegistry])
], TopPageController);
exports.TopPageController = TopPageController;
//# sourceMappingURL=top-page.controller.js.map