import { Component, Input } from "@angular/core";
import { MenuItem } from "../models/menuitem.model";

@Component({
  selector: "app-angular-material-menu",
  templateUrl: "./angular-material-menu.component.html",
  styleUrls: ["./angular-material-menu.component.css"],
})
export class AngularMaterialMenuComponent {

  @Input("menu") menu:MenuItem[];

  ngOnInit(): void {

    console.log(this.menu);
    
  }

 
}
