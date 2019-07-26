import { Component, OnInit } from "@angular/core";
import { LeaveRequest } from "../models/leave-request.model";
import { LeavesService } from "../services/leaves.service";

@Component({
  selector: "app-approve-leave-request",
  templateUrl: "./approve-leave-request.component.html",
  styleUrls: ["./approve-leave-request.component.css"]
})
export class ApproveLeaveRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  constructor(private leavesService: LeavesService) {}

  ngOnInit() {
    this.leaveRequests = this.leavesService.getLeaves();
  }

  approveRequest(request: LeaveRequest) {
    request.status = "approved";
    console.log("Request Approved ");
  }

  denyRequest(request: LeaveRequest) {
    request.status = "denied";
    console.log("Request Denied");
  }
}
