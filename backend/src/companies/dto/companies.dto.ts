import { CompaniesType, CompaniesFields } from '../../../types/companies';

export class CompaniesDto implements CompaniesType {
  readonly [CompaniesFields.Rank]: string;
  readonly [CompaniesFields.Company]: string;
  readonly [CompaniesFields.Ticker]: string;
  readonly [CompaniesFields.Sector]: string;
  readonly [CompaniesFields.Industry]: string;
  readonly [CompaniesFields.Profitable]: boolean;
  readonly [CompaniesFields.Founder_is_CEO]: boolean;
  readonly [CompaniesFields.FemaleCEO]: boolean;
  readonly [CompaniesFields.Growth_in_Jobs]: number;
  readonly [CompaniesFields.Change_in_Rank]: number;
  readonly [CompaniesFields.Gained_in_Rank]: boolean;
  readonly [CompaniesFields.Dropped_in_Rank]: boolean;
  readonly [CompaniesFields.Newcomer_to_the_Fortune500]: boolean;
  readonly [CompaniesFields.Global500]: boolean;
  readonly [CompaniesFields.Worlds_Most_Admired_Companies]: boolean;
  readonly [CompaniesFields.Best_Companies_to_Work_For]: boolean;
  readonly [CompaniesFields.Number_of_employees]: number;
  readonly [CompaniesFields.MarketCap_March28_M]: number;
  readonly [CompaniesFields.Revenues_M]: number;
  readonly [CompaniesFields.RevenuePercentChange]: number;
  readonly [CompaniesFields.Profits_M]: number;
  readonly [CompaniesFields.ProfitsPercentChange]: number;
  readonly [CompaniesFields.Assets_M]: number;
  readonly [CompaniesFields.CEO]: string;
  readonly [CompaniesFields.Country]: string;
  readonly [CompaniesFields.HeadquartersCity]: string;
  readonly [CompaniesFields.HeadquartersState]: string;
  readonly [CompaniesFields.Website]: string;
  readonly [CompaniesFields.CompanyType]: string;
  readonly [CompaniesFields.Footnote]: string;
  readonly [CompaniesFields.MarketCap_Updated_M]: number;
  readonly [CompaniesFields.Updated]: string;
}
