import {Component} from "@angular/core";
import {CVService} from "../service/cv.service";

@Component({
    moduleId: module.id,
    selector: "profile",
    template: `<h1>{{name}}</h1>`,
    styleUrls: ["profile.component.css"]
})
export class ProfileComponent {

    name:string;

    constructor(private cvService:CVService){
        cvService.getCV().subscribe(cv => this.name = cv.name);
    }
}