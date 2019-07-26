import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PastAttendanceService } from "../services/past-attendance.service";
import { PastAttendance } from "../models/past-attendance.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-mark-attendance",
  templateUrl: "./mark-attendance.component.html",
  styleUrls: ["./mark-attendance.component.css"]
})
export class MarkAttendanceComponent implements OnInit, OnDestroy {
  daysSelected: number = 0;
  attendances: PastAttendance[] = [];
  subscription: Subscription;

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
    console.log(form);
    let startDate = new Date(form.value.startDate).getTime();
    let endDate = new Date(form.value.endDate).getTime();
    let diff = endDate - startDate;
    let numberOfDays = diff / (1000 * 60 * 60 * 24);
    console.log("Start and End Date in ms", startDate, endDate, numberOfDays);
    this.daysSelected = numberOfDays;
    let reason = form.value.reason;
    const pastAttendance = new PastAttendance(startDate, endDate, reason);
    console.log("Reason", pastAttendance);
    this.attendanceService.addPastAttendance(pastAttendance);
  }
}
