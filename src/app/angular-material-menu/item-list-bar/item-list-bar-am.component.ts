import { Component, Input } from "@angular/core";

@Component({
  selector: "app-item-list-bar-am",
  templateUrl: "./item-list-bar-am.component.html",
  styleUrls: ["./item-list-bar-am.component.css"],
})
export class ItemListBarAMComponent {
  @Input("menuitem") menuitem;
  style;
  styleLink;
  ngOnInit(): void {
    this.style = {
      "background-color": `rgb(155,155,155,${this.menuitem.opacity/10})`,
    };
    this.styleLink = {
      "background-color": `rgb(155,155,155,${this.menuitem.opacity+1/10})`,
    };
  }
}
