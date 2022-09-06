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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopPageDto = exports.ToplevelCategoryDto = exports.TopPageAdventugeDto = exports.HhDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class HhDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDto.prototype, "countNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDto.prototype, "juniorSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDto.prototype, "middleSalary", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HhDto.prototype, "seniorSalary", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], HhDto.prototype, "updateAt", void 0);
exports.HhDto = HhDto;
class TopPageAdventugeDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdventugeDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TopPageAdventugeDto.prototype, "description", void 0);
exports.TopPageAdventugeDto = TopPageAdventugeDto;
var ToplevelCategoryDto;
(function (ToplevelCategoryDto) {
    ToplevelCategoryDto[ToplevelCategoryDto["Services"] = 0] = "Services";
    ToplevelCategoryDto[ToplevelCategoryDto["Cources"] = 1] = "Cources";
    ToplevelCategoryDto[ToplevelCategoryDto["Books"] = 2] = "Books";
    ToplevelCategoryDto[ToplevelCategoryDto["Product"] = 3] = "Product";
})(ToplevelCategoryDto = exports.ToplevelCategoryDto || (exports.ToplevelCategoryDto = {}));
class CreateTopPageDto {
}
__decorate([
    (0, class_validator_1.IsEnum)(ToplevelCategoryDto),
    __metadata("design:type", Number)
], CreateTopPageDto.prototype, "firstLevelCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "secondCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "alias", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HhDto),
    __metadata("design:type", HhDto)
], CreateTopPageDto.prototype, "hh", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TopPageAdventugeDto),
    __metadata("design:type", Array)
], CreateTopPageDto.prototype, "advantages", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "seoText", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTopPageDto.prototype, "tagsTitle", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CreateTopPageDto.prototype, "tags", void 0);
exports.CreateTopPageDto = CreateTopPageDto;
//# sourceMappingURL=createTop-Page.dto.js.map