import {Component, OnInit} from "@angular/core";

@Component({
  selector: "triio-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor() {
  }

  public ngOnInit(): void {
  }

  hide() {
    this.isNavbarCollapsed = true;
  }

  show() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
