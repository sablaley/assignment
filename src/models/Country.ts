export type Country = Readonly<{
  country: string;
}>;

export type Population = Readonly<{
  population: number;
  country:string;
}>;

export type Area = Readonly<{
  country: string;
  area:number;
}>;
