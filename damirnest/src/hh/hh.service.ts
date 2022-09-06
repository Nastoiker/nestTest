import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HhData } from 'src/top-page/top-page.model';
import { API_URL, NOT_FOUND_CLUSTER_ID, root_API, SALARY_CLUSTER_ID } from './hh.constants';
import { HhResponse } from './hh.model';

@Injectable()
export class HhService {
	private token: string;
	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService,
	) {
		this.token = this.configService.get('HHTOKEN') ?? '';
	}
	async getData(text: string) {
		try {
			const res = await this.httpService
				.get<HhResponse>(root_API + API_URL.VACANCIES, {
					params: {
						text,
						cluster: true,
					},
					headers: {
						'User-Agent': this.configService.get('HH_USER_AGENT') ?? '',
						Authorization: 'Bearer' + this.token,
					},
				})
				.toPromise();
			return this.parseData(res!.data);
		} catch (err) {
			Logger.error(err);
		}
	}
	private parseData(data: HhResponse): HhData {
		const salaryCluster = data.clusters.find((cluster) => cluster.id === SALARY_CLUSTER_ID);
		if (!salaryCluster) {
			throw new Error(NOT_FOUND_CLUSTER_ID);
		}
		const juniorSalary = this.salaryFromString(salaryCluster.items[1].name);
		const middleSalary = this.salaryFromString(
			salaryCluster.items[Math.ceil(salaryCluster.items.length / 2)].name,
		);
		const seniorSalary = this.salaryFromString(
			salaryCluster.items[salaryCluster.items.length - 1].name,
		);
		return {
			countNumber: data.found,
			juniorSalary,
			middleSalary,
			seniorSalary,
			updateAt: new Date(),
		};
	}
	private salaryFromString(s: string): number {
		const numberRegExp = /(\d+)/g;
		const res = s.match(numberRegExp);
		if (!res) {
			return 0;
		}
		return Number(res[0]);
	}
}
