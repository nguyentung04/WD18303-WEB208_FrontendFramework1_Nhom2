import { Iskill } from "./skill";
export interface IuserInfo {
    id: string,
    img: string,
    fullname: string,
    birthday: string,
    address: string,
    email: string,
    phone: string,
}
export interface Icv {
    id: string,
    img: string,
    fullname: string,
    birthday: string,
    address: string,
    email: string,
    phone: string,
    nameRecruitment: string;
    educations: string;
    languages: string;
    experiences: string;
    skills: string;
    activities: string;
    certificates: string;
    infos: string;
    specializeds: string;
    start_year: number;
    end_year: number;
    graduation_Type: string;
    vacancies:string;
    describe:string;
}

