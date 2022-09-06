import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { createReviewDto } from '../src/review/dto/create-review.dto';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';

const loginDto: AuthDto = {
	login: 'test@gmail.com',
	password: 'test',
};

describe('AuthController (e2e)', () => {
	let loginToken: string;
	let token: string;
	let app: INestApplication;
	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
		const { body } = await request(app.getHttpServer()).post('/auth/login').send(loginDto);
		token = body.accesToken;
	});

	it('/auth/login (POST) succes', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {
				loginToken = body.accesToken;
				expect(loginToken).toBeDefined();
			});
		afterEach(() => (done: () => void) => {
			done();
		});
	});
	it('/auth/login (POST) fail password', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: 'test1' })
			.expect(401, {
				statusCode: 401,
				message: 'Ошибка авторизации',
				error: 'Unauthorized',
			});
	});
	it('/auth/login (POST) fail login', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: 'test1' })
			.expect(401, {
				statusCode: 401,
				message: 'пользователь не найден',
				error: 'Unauthorized',
			});
	});

	afterAll((done) => {
		disconnect();
		done();
	});
});
