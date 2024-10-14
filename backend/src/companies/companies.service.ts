import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Companies } from './companies.model';
import { createReadStream } from 'fs';
import * as csv from 'csv-parser';
import { Op } from 'sequelize';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Companies) private companiesRepository: typeof Companies,
  ) {}

  async getAll() {
    return await this.companiesRepository.findAll();
  }

  async getById(id: number) {
    return await this.companiesRepository.findAll({
      where: { id },
      order: [['id', 'ASC']],
    });
  }

  async getByQuery(query: string) {
    return await this.companiesRepository.findAll({
      where: {
        [Op.or]: [
          {
            Company: {
              [Op.iLike]: `%${query}%`,
            },
          },
          {
            Ticker: {
              [Op.iLike]: `%${query}%`,
            },
          },
        ],
      },
    });
  }

  async importData() {
    createReadStream('fortune1000_2024.csv')
      .pipe(csv())
      .on('data', (data) => {
        this.addItem(data);
      })
      .on('error', (error) => {
        console.log('error', error);
      });
  }

  async addItem(data) {
    try {
      await this.companiesRepository.create({
        Rank: data.Rank,
        Company: data.Company,
        Ticker: data.Ticker,
        Sector: data.Sector,
        Industry: data.Industry,
        Profitable: data.Profitable === 'yes',
        Founder_is_CEO: data.Founder_is_CEO === 'yes',
        FemaleCEO: data.FemaleCEO === 'yes',
        Growth_in_Jobs: 0,
        Change_in_Rank: 0,
        Gained_in_Rank: data.Gained_in_Rank === 'yes',
        Dropped_in_Rank: data.Dropped_in_Rank === 'yes',
        Newcomer_to_the_Fortune500: data.Newcomer_to_the_Fortune500 === 'yes',
        Global500: data.Global500 === 'yes',
        Worlds_Most_Admired_Companies:
          data.Worlds_Most_Admired_Companies === 'yes',
        Best_Companies_to_Work_For: data.Best_Companies_to_Work_For === 'yes',
        Number_of_employees: parseInt(data.Number_of_employees),
        MarketCap_March28_M: +data.MarketCap_March28_M,
        Revenues_M: +data.Revenues_M,
        RevenuePercentChange: +data.RevenuePercentChange,
        Profits_M: +data.Profits_M,
        ProfitsPercentChange: +data.ProfitsPercentChange,
        Assets_M: +data.Assets_M,
        CEO: data.CEO,
        Country: data.Country,
        HeadquartersCity: data.HeadquartersCity,
        HeadquartersState: data.HeadquartersState,
        Website: data.Website,
        CompanyType: data.CompanyType,
        Footnote: data.Footnote,
        MarketCap_Updated_M: +data.MarketCap_Updated_M,
        Updated: data.Updated,
      });
    } catch (error) {
      console.log('add error', error);
    }
  }
}
