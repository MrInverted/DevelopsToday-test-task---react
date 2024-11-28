interface IAllResponse {
  success: boolean;
  data: IAllData[];
}

interface IOneResponse {
  success: boolean;
  data: IOneData;
}

interface IAllData {
  countryCode: string;
  name: string;
}

interface IOneData {
  flagUrl: string;
  officialName: string;
  borders: Border[];
  population: Population[];
}

interface IBorder {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: any;
}

interface IPopulation {
  year: number;
  value: number;
}