import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LeaveRequest } from "../models/leave-request.model";
import { LeavesService } from "../services/leaves.service";

@Component({
  selector: "app-leaves",
  templateUrl: "./leaves.component.html",
  styleUrls: ["./leaves.component.css"]
})
export class LeavesComponent implements OnInit {
  leaves: LeaveRequest[] = [
    new LeaveRequest("Test", new Date("01/01/2019"), new Date("01/02/2019"))
  ];
  constructor(private router: Router, private leavesService: LeavesService) {}

  ngOnInit() {
    console.log("Initialize", this.leaves);
    this.leaves = this.leavesService.getLeaves();

    this.leavesService.leaveApplied.subscribe((leave: LeaveRequest) => {
      this.router.navigate(["/leaves"]);
    });
  }

  navigateToApplyLeave() {
    this.router.navigate(["new-leave-request"]);
  }
}
