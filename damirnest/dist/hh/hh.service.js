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
exports.HhService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const hh_constants_1 = require("./hh.constants");
let HhService = class HhService {
    constructor(configService, httpService) {
        var _a;
        this.configService = configService;
        this.httpService = httpService;
        this.token = (_a = this.configService.get('HHTOKEN')) !== null && _a !== void 0 ? _a : '';
    }
    async getData(text) {
        var _a;
        try {
            const res = await this.httpService
                .get(hh_constants_1.root_API + hh_constants_1.API_URL.VACANCIES, {
                params: {
                    text,
                    cluster: true,
                },
                headers: {
                    'User-Agent': (_a = this.configService.get('HH_USER_AGENT')) !== null && _a !== void 0 ? _a : '',
                    Authorization: 'Bearer' + this.token,
                },
            })
                .toPromise();
            return this.parseData(res.data);
        }
        catch (err) {
            common_1.Logger.error(err);
        }
    }
    parseData(data) {
        const salaryCluster = data.clusters.find((cluster) => cluster.id === hh_constants_1.SALARY_CLUSTER_ID);
        if (!salaryCluster) {
            throw new Error(hh_constants_1.NOT_FOUND_CLUSTER_ID);
        }
        const juniorSalary = this.salaryFromString(salaryCluster.items[1].name);
        const middleSalary = this.salaryFromString(salaryCluster.items[Math.ceil(salaryCluster.items.length / 2)].name);
        const seniorSalary = this.salaryFromString(salaryCluster.items[salaryCluster.items.length - 1].name);
        return {
            countNumber: data.found,
            juniorSalary,
            middleSalary,
            seniorSalary,
            updateAt: new Date(),
        };
    }
    salaryFromString(s) {
        const numberRegExp = /(\d+)/g;
        const res = s.match(numberRegExp);
        if (!res) {
            return 0;
        }
        return Number(res[0]);
    }
};
HhService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], HhService);
exports.HhService = HhService;
//# sourceMappingURL=hh.service.js.map