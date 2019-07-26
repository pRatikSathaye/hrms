import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { LeaveRequest } from "../../models/leave-request.model";
import { LeavesService } from "src/app/services/leaves.service";

@Component({
  selector: "app-leave-request",
  templateUrl: "./new-leave-request.component.html",
  styleUrls: ["./new-leave-request.component.css"]
})
export class NewLeaveRequestComponent implements OnInit {
  @Output() leaveApplied = new EventEmitter<LeaveRequest>();
  leaveType: string;
  fromDate: Date;
  toDate: Date;

  constructor(private leavesService: LeavesService) {}

  ngOnInit() {}

  onApplyLeave() {
    const leaveRequest = new LeaveRequest(
      this.leaveType,
      new Date(this.fromDate),
      new Date(this.toDate)
    );
    this.leavesService.addLeaveRequest(leaveRequest);
    // console.log("Values", this.leaveType, this.fromDate, this.toDate);
  }
}
