export interface MhaAPIResponse {
    info:   Info;
    result: Character[];
}

export interface Info {
    currentPage: number;
    count:       number;
    pages:       number;
}

export interface Character {
    id:          string;
    name:        null | string;
    alias:       null | string;
    affiliation: null | string;
    birthday:    null | string;
    bloodtype:   null | string;
    description: null | string;
    fightstyle:  null | string;
    gender:      Gender | null;
    Eye:         null | string;
    hair:        null | string;
    height:      null | string;
    kanji:       null | string;
    occupation:  null | string;
    quirk:       null | string;
    romaji:      null | string;
    status:      null | string;
    teams:       null | string;
    images:      string[];
    epithet:     null | string;
    ages:        Age[] | null;
    family:      Family[] | null;
    custom?:     boolean | null;
}

export interface Age {
    age:  string;
    when: string;
}

export interface Family {
    id:   string;
    name: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}
