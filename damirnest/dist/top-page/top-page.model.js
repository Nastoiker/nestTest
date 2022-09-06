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
exports.TopPageModel = exports.ToplevelCategory = exports.TopPageAdventuge = exports.HhData = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class HhData {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "countNumber", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "juniorSalary", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "middleSalary", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "seniorSalary", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], HhData.prototype, "updateAt", void 0);
exports.HhData = HhData;
class TopPageAdventuge {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageAdventuge.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageAdventuge.prototype, "description", void 0);
exports.TopPageAdventuge = TopPageAdventuge;
var ToplevelCategory;
(function (ToplevelCategory) {
    ToplevelCategory[ToplevelCategory["Services"] = 0] = "Services";
    ToplevelCategory[ToplevelCategory["Cources"] = 1] = "Cources";
    ToplevelCategory[ToplevelCategory["Books"] = 2] = "Books";
    ToplevelCategory[ToplevelCategory["Product"] = 3] = "Product";
})(ToplevelCategory = exports.ToplevelCategory || (exports.ToplevelCategory = {}));
class TopPageModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)({ enum: ToplevelCategory }),
    __metadata("design:type", Number)
], TopPageModel.prototype, "firstLevelCategory", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "secondCategory", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "alias", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => HhData }),
    __metadata("design:type", HhData)
], TopPageModel.prototype, "hh", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [TopPageAdventuge] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "advantages", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "seoText", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "tagsTitle", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "tags", void 0);
exports.TopPageModel = TopPageModel;
//# sourceMappingURL=top-page.model.js.map