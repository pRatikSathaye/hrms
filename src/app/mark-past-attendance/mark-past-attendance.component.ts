import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PastAttendanceService } from "../services/past-attendance.service";
import { PastAttendance } from "../models/past-attendance.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-mark-past-attendance",
  templateUrl: "./mark-past-attendance.component.html",
  styleUrls: ["./mark-past-attendance.component.css"]
})
export class MarkPastAttendanceComponent implements OnInit, OnDestroy {
  daysSelected: number = 0;
  attendances: PastAttendance[] = [];
  subscription: Subscription;
  forMultipleDays: boolean = false;

  constructor(private attendanceService: PastAttendanceService) {}

  ngOnInit() {
    this.subscription = this.attendanceService.attendanceUpdated.subscribe(
      (abc: PastAttendance[]) => {
        this.attendances = abc;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // ACTIONS
  onSubmit(form: NgForm) {
    let startDate = new Date(form.value.startDate).getTime();
    let endDate = new Date(form.value.endDate).getTime();
    if (!this.forMultipleDays) {
      endDate = startDate;
    }
    let diff = endDate - startDate;
    let numberOfDays = diff / (1000 * 60 * 60 * 24) + 1;
    this.daysSelected = numberOfDays;
    let reason = form.value.reason;
    const pastAttendance = new PastAttendance(
      startDate,
      endDate,
      reason,
      this.forMultipleDays
    );
    this.attendanceService.addPastAttendance(pastAttendance);
    form.reset();
  }
}
