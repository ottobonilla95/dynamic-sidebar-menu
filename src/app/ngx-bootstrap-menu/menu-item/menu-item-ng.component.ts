import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "../../models/menuItem.model";

@Component({
  selector: "app-menu-item-ng",
  templateUrl: "./menu-item-ng.component.html",
  styleUrls: ["./menu-item-ng.component.css"],
})
export class MenuItemNGComponent implements OnInit {
  @Input("menuItem") menuItem: MenuItem;

  icon;
  hasChildrens = false;
  opacity: number;
  backgroundColor: string;
  active: boolean;
  styleLink;
  style;
  ngOnInit() {
    this.opacity = 0 + this.menuItem.opacity / 20;
    this.backgroundColor = "rgba(0, 0, 0, " + this.opacity + ")";

    this.style = {
      "background-color": `rgb(155,155,155,${this.menuItem.opacity/10})`,
    };

    this.styleLink = {
      "background-color": `rgb(155,155,155,${this.opacity+0.1})`,
    };

    if (this.menuItem.children.length > 0) {
      this.hasChildrens = true;
    }
  }
  onClick() {
    this.active = true;
  }
}
