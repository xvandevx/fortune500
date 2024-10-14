import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { CompaniesType, CompaniesFields } from '../../types/companies';

@Table({ tableName: 'companies' })
export class Companies extends Model<Companies, CompaniesType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Rank]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Company]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Ticker]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Sector]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Industry]: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Profitable]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Founder_is_CEO]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.FemaleCEO]: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  [CompaniesFields.Growth_in_Jobs]: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  [CompaniesFields.Change_in_Rank]: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Gained_in_Rank]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Dropped_in_Rank]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Newcomer_to_the_Fortune500]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Global500]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Worlds_Most_Admired_Companies]: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  [CompaniesFields.Best_Companies_to_Work_For]: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  [CompaniesFields.Number_of_employees]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.MarketCap_March28_M]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.Revenues_M]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.RevenuePercentChange]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.Profits_M]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.ProfitsPercentChange]: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.Assets_M]: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.CEO]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Country]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.HeadquartersCity]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.HeadquartersState]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.Website]: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  [CompaniesFields.CompanyType]: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  [CompaniesFields.Footnote]: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  [CompaniesFields.MarketCap_Updated_M]: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  [CompaniesFields.Updated]: string;
}
