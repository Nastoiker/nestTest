export declare class HhDto {
    countNumber: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updateAt: Date;
}
export declare class TopPageAdventugeDto {
    title: string;
    description: string;
}
export declare enum ToplevelCategoryDto {
    Services = 0,
    Cources = 1,
    Books = 2,
    Product = 3
}
export declare class CreateTopPageDto {
    firstLevelCategory: ToplevelCategoryDto;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhDto;
    advantages: TopPageAdventugeDto[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
