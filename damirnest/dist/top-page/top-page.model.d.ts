import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export declare class HhData {
    countNumber: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updateAt: Date;
}
export declare class TopPageAdventuge {
    title: string;
    description: string;
}
export declare enum ToplevelCategory {
    Services = 0,
    Cources = 1,
    Books = 2,
    Product = 3
}
export interface TopPageModel extends Base {
}
export declare class TopPageModel extends TimeStamps {
    firstLevelCategory: ToplevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhData;
    advantages: TopPageAdventuge[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
