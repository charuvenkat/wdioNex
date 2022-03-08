import SkillObj from "./skillobj";
import moment from 'moment';

export default class SkillList {
    constructor(data) {
        this.skills = [];
        for (var item in data) {
            var skill = new SkillObj(data[item]);
            this.skills.push(skill);
        };
    };

    //Get the Current List of Skills
    get getAllSkills() {
        return this.skills;
    };



}