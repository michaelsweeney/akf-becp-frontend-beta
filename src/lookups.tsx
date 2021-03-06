import { HvacTemplate } from "./store/statetypes";

export const states: string[] = [
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

export const climate_zones: string[] = [
  "1A",
  "2A",
  "2B",
  "3A",
  "3B",
  "3C",
  "4A",
  "4B",
  "4C",
  "5A",
  "5B",
  "6A",
  "6B",
  "7A",
  "8A",
];

export const coefficient_cases: string[] = [
  "HighRECost",
  "LowRECost",
  "MidCase",
  "MidCase95by2035",
  "MidCase95by2050",
  "BERDO",
];

export const ashrae_standards: string[] = [
  "DOE_Ref_1980-2004",
  "90.1-2010",
  "90.1-2007",
  "DOE_Ref_Pre-1980",
  "90.1-2016",
  "90.1-2004",
  "90.1-2013",
];

export const building_types: string[] = [
  "SecondarySchool",
  "MediumOffice",
  "PrimarySchool",
  "RetailStripmall",
  "QuickServiceRestaurant",
  "SmallHotel",
  "MidriseApartment",
  "Warehouse",
  "RetailStandalone",
  "SmallOffice",
  "FullServiceRestaurant",
  "LargeOffice",
  "LargeHotel",
  "Hospital",
  "Outpatient",
  "HighriseApartment",
];

export const heating_fuels: string[] = ["Electricity", "Natural Gas", "Steam"];

export const hvac_templates: HvacTemplate[] = [
  {
    tag: "elec_ashp",
    case_name: "Air Source HP",
    heating_fuel: "Electricity",
    heating_cop: 3.2,
  },
  {
    tag: "elec_resistance",
    case_name: "Electric Resistance",
    heating_fuel: "Electricity",
    heating_cop: 1,
  },
  {
    tag: "ng_furnace",
    case_name: "NG Heating",
    heating_fuel: "Natural Gas",
    heating_cop: 0.8,
  },
  {
    tag: "vrf",
    case_name: "VRF",
    heating_fuel: "Electricity",
    heating_cop: 4.45,
  },
  {
    tag: "gshp",
    case_name: "GSHP",
    heating_fuel: "Electricity",
    heating_cop: 4.95,
  },
];

type DataMap = {
  [key: string]: string;
};

export const ref_bldg_to_berdo_type: DataMap = {
  SecondarySchool: "education",
  MediumOffice: "office",
  PrimarySchool: "education",
  RetailStripmall: "retail",
  QuickServiceRestaurant: "food_sales_service",
  SmallHotel: "lodging",
  MidriseApartment: "multifamily_housing",
  Warehouse: "storage",
  RetailStandalone: "retail",
  SmallOffice: "office",
  FullServiceRestaurant: "food_sales_service",
  LargeOffice: "office",
  LargeHotel: "lodging",
  Hospital: "healthcare",
  Outpatient: "healthcare",
  HighriseApartment: "multifamily_housing",
};

export const ref_bldg_to_ll97_type: DataMap = {
  SecondarySchool: "E",
  MediumOffice: "B_norm",
  PrimarySchool: "E",
  RetailStripmall: "B_norm",
  QuickServiceRestaurant: "B_norm",
  SmallHotel: "R1",
  MidriseApartment: "R2",
  Warehouse: "S",
  RetailStandalone: "B_norm",
  SmallOffice: "B_norm",
  FullServiceRestaurant: "B_norm",
  LargeOffice: "B_norm",
  LargeHotel: "B_norm",
  Hospital: "B_health",
  Outpatient: "B_health",
  HighriseApartment: "R2",
};
