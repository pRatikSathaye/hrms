import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imp-info",
  templateUrl: "./imp-info.component.html",
  styleUrls: ["./imp-info.component.css"]
})
export class ImpInfoComponent implements OnInit {
  businessUnit: string;
  function: string;
  supervisorName: string;
  supervisorDesignation: string;
  email: string;
  branch: string;
  workPhone: string;
  workPhoneExtn: string;

  constructor() {}

  ngOnInit() {
    this.businessUnit = "Newt Global India Unit";
    this.function = "COE";
    this.supervisorName = "Kiran Suresh Kulkarni";
    this.supervisorDesignation = "VP - Engineering";
    this.email = "pratikj@newtglobal.com";
    this.branch = "Pune";
    this.workPhone = "9021527091";
    this.workPhoneExtn = "N/A";
  }
}
