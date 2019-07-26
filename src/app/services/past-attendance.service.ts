import { Injectable } from "@angular/core";
import { PastAttendance } from "../models/past-attendance.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PastAttendanceService {
  attendanceUpdated = new Subject<PastAttendance[]>();
  pastAttendanceData: PastAttendance[] = [];

  addPastAttendance(pastAttendace: PastAttendance) {
    this.pastAttendanceData.push(pastAttendace);
    this.attendanceUpdated.next(this.pastAttendanceData.slice());
  }
}
