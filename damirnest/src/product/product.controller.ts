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
import { InjectModel } from 'nestjs-typegoose';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IdValidationpipe } from 'src/pipes/idValidation.pipe';
import { createProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductByIdNotFount, ProductIdNotFoundForUpd } from './product.constants';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: createProductDto) {
		return this.productService.create(dto);
	}
	@Get(':id')
	async get(@Param('id', IdValidationpipe) id: string) {
		const product = await this.productService.deleteById(id);
		if (!product) {
			throw new NotFoundException(ProductByIdNotFount);
		}
		return product;
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationpipe) id: string) {
		const deletedProduct = await this.productService.deleteById(id);
		if (!deletedProduct) {
			throw new NotFoundException(ProductByIdNotFount);
		}
	}
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationpipe) id: string, @Body() dto: ProductModel) {
		const UpdatedProduct = await this.productService.updateById(id, dto);
		if (!UpdatedProduct) {
			throw new NotFoundException(ProductIdNotFoundForUpd);
		}
		return UpdatedProduct;
	}
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		return this.productService.findWithReview(dto);
	}
}
