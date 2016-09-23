import {Skill} from "./skill.model";
import {Experience} from "./experience.model";
import {Education} from "./education.model";
import {Interest} from "./interest.model";
import {OtherExperience} from "./other-experience.model";
import {ContactInformations} from "./contact-informations.model";

export interface CV{
    name:string;

    description:string;

    pictureUrl:string;

    birthDate:string;

    city:string;

    country:string;

    address:string;

    githubProfileUrl?:string;

    stackOverflowProfileUrl?:string;

    skills:Skill[];

    experiences:Experience[];

    educations:Education[];

    interests:Interest[];

    personalExperiences:OtherExperience[];

    contactInformations:ContactInformations;
}