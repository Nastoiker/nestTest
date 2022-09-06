import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Types, disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { createReviewDto } from '../src/review/dto/create-review.dto';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';
const productId = new Types.ObjectId().toHexString();
const testDto: createReviewDto = {
	name: 'test',
	title: 'Заголовок',
	description: 'Описание тестовое',
	rating: 5,
	productId,
};
const loginDto: AuthDto = {
	login: 'test@gmail.com',
	password: 'test',
};

describe('AppController (e2e)', () => {
	let createAtId: string;
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

	it('/review/create (POST)', async () => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDto)
			.expect(201)
			.then(({ body }: request.Response) => {
				createAtId = body._id;
				expect(createAtId).toBeDefined();
			});
	});
	afterEach(() => (done: () => void) => {
		done();
	});
	it('/review/create (POST) fail', () => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send({ ...testDto, rating: 0 })
			.expect(400);
	});
	afterEach(() => (done: () => void) => {
		done();
	});
	it('/review/byProduct/:productId (GET) succes', async () => {
		return request(app.getHttpServer())
			.get('/review/byProduct/' + productId)
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.length).toBe(1);
			});
	});
	afterEach(() => (done: () => void) => {
		done();
	});
	it('/review/byProduct/:productId (GET) fail', async () => {
		return request(app.getHttpServer())
			.get('/review/byProduct/' + new Types.ObjectId().toHexString())
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.length).toBe(0);
			});
	});
	afterEach(() => (done: () => void) => {
		done();
	});
	it('/review/:id DELETE succes', async () => {
		return request(app.getHttpServer())
			.delete('/review/' + createAtId)
			.set('Authorization', 'Bearer ' + token)
			.expect(200);
	});
	it('/review/:id DELETE fail', async () => {
		return request(app.getHttpServer())
			.delete('/review/' + new Types.ObjectId().toHexString())
			.set('Authorization', 'Bearer ' + token)
			.expect(404, {
				statusCode: 404,
				message: REVIEW_NOT_FOUND,
			});
	});
	afterAll((done) => {
		disconnect();
		done();
	});
});
