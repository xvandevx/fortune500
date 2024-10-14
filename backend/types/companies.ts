export enum CompaniesFields {
  Rank = 'Rank',
  Company = 'Company',
  Ticker = 'Ticker',
  Sector = 'Sector',
  Industry = 'Industry',
  Profitable = 'Profitable',
  Founder_is_CEO = 'Founder_is_CEO',
  FemaleCEO = 'FemaleCEO',
  Growth_in_Jobs = 'Growth_in_Jobs',
  Change_in_Rank = 'Change_in_Rank',
  Gained_in_Rank = 'Gained_in_Rank',
  Dropped_in_Rank = 'Dropped_in_Rank',
  Newcomer_to_the_Fortune500 = 'Newcomer_to_the_Fortune500',
  Global500 = 'Global500',
  Worlds_Most_Admired_Companies = 'Worlds_Most_Admired_Companies',
  Best_Companies_to_Work_For = 'Best_Companies_to_Work_For',
  Number_of_employees = 'Number_of_employees',
  MarketCap_March28_M = 'MarketCap_March28_M',
  Revenues_M = 'Revenues_M',
  RevenuePercentChange = 'RevenuePercentChange',
  Profits_M = 'Profits_M',
  ProfitsPercentChange = 'ProfitsPercentChange',
  Assets_M = 'Assets_M',
  CEO = 'CEO',
  Country = 'Country',
  HeadquartersCity = 'HeadquartersCity',
  HeadquartersState = 'HeadquartersState',
  Website = 'Website',
  CompanyType = 'CompanyType',
  Footnote = 'Footnote',
  MarketCap_Updated_M = 'MarketCap_Updated_M',
  Updated = 'Updated',
}

export interface CompaniesType {
  [CompaniesFields.Rank]: string;
  [CompaniesFields.Company]: string;
  [CompaniesFields.Ticker]: string;
  [CompaniesFields.Sector]: string;
  [CompaniesFields.Industry]: string;
  [CompaniesFields.Profitable]: boolean;
  [CompaniesFields.Founder_is_CEO]: boolean;
  [CompaniesFields.FemaleCEO]: boolean;
  [CompaniesFields.Growth_in_Jobs]: number;
  [CompaniesFields.Change_in_Rank]: number;
  [CompaniesFields.Gained_in_Rank]: boolean;
  [CompaniesFields.Dropped_in_Rank]: boolean;
  [CompaniesFields.Newcomer_to_the_Fortune500]: boolean;
  [CompaniesFields.Global500]: boolean;
  [CompaniesFields.Worlds_Most_Admired_Companies]: boolean;
  [CompaniesFields.Best_Companies_to_Work_For]: boolean;
  [CompaniesFields.Number_of_employees]: number;
  [CompaniesFields.MarketCap_March28_M]: number;
  [CompaniesFields.Revenues_M]: number;
  [CompaniesFields.RevenuePercentChange]: number;
  [CompaniesFields.Profits_M]: number;
  [CompaniesFields.ProfitsPercentChange]: number;
  [CompaniesFields.Assets_M]: number;
  [CompaniesFields.CEO]: string;
  [CompaniesFields.Country]: string;
  [CompaniesFields.HeadquartersCity]: string;
  [CompaniesFields.HeadquartersState]: string;
  [CompaniesFields.Website]: string;
  [CompaniesFields.CompanyType]: string;
  [CompaniesFields.Footnote]: string;
  [CompaniesFields.MarketCap_Updated_M]: number;
  [CompaniesFields.Updated]: string;
}