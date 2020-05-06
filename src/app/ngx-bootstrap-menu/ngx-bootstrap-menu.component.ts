import { Component, Input } from "@angular/core";
import { MenuItem } from '../models/menuitem.model';

@Component({
  selector: "app-ngx-bootstrap-menu",
  templateUrl: "./ngx-bootstrap-menu.component.html",
  styleUrls: ["./ngx-bootstrap-menu.component.css"],
})
export class NgxBootstrapMenuComponent {
    @Input("menu") menu:MenuItem[];


}
