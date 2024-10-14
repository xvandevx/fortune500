import { Controller, Get, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesDto } from './dto/companies.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly CompaniesService: CompaniesService) {}

  @Get('/')
  async getAll() {
    return await this.CompaniesService.getAll();
  }

  @Get('/id/:id')
  async getById(@Param('id') id: string): Promise<CompaniesDto[]> {
    return await this.CompaniesService.getById(+id);
  }

  @Get('/query/:query')
  async getByQuery(@Param('query') query: string): Promise<CompaniesDto[]> {
    return await this.CompaniesService.getByQuery(query);
  }

  @Get('/importdata')
  async importdata() {
    return await this.CompaniesService.importData();
  }
}
