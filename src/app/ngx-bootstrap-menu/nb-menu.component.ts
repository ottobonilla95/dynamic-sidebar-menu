import { Component, Input } from "@angular/core";
import { MenuItem } from '../models/menuitem.model';

@Component({
  selector: "app-ngx-bootstrap-menu",
  templateUrl: "./nb-menu.component.html",
  styleUrls: ["./nb-menu.component.css"],
})
export class NgxBootstrapMenuComponent {
    @Input("menu") menu:MenuItem[];


}
