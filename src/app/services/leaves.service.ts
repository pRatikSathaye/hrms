import { LeaveRequest } from "../models/leave-request.model";
import { EventEmitter } from "@angular/core";

export class LeavesService {
  leaveApplied = new EventEmitter<LeaveRequest>();
  private leaves: LeaveRequest[] = [
    new LeaveRequest("casual", new Date("03/13/2019"), new Date("03/14/2019")),
    new LeaveRequest(
      "without-pay",
      new Date("01/01/2019"),
      new Date("02/01/2019")
    ),
    new LeaveRequest(
      "compensatory",
      new Date("12/28/2018"),
      new Date("12/31/2018")
    ),
    new LeaveRequest("casual", new Date("11/04/2018"), new Date("12/04/2018"))
  ];

  getLeaves(): LeaveRequest[] {
    return this.leaves.slice();
  }

  addLeaveRequest(leave: LeaveRequest) {
    this.leaves.push(leave);
    this.leaveApplied.emit(leave);
    // this.leaves = this.leaves.slice()
  }
}
