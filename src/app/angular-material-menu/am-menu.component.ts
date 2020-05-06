import { Component, Input } from "@angular/core";
import { MenuItem } from "../models/menuitem.model";

@Component({
  selector: "app-angular-material-menu",
  templateUrl: "./am-menu.component.html",
  styleUrls: ["./am-menu.component.css"],
})
export class AngularMaterialMenuComponent {

  @Input("menu") menu:MenuItem[];

  ngOnInit(): void {

    console.log(this.menu);
    
  }

 
}
