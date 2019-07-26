const leaveTypesMapping = {
  casual: "Casual",
  "without-pay": "Without Pay",
  compensatory: "Compensatory",
  paternity: "Paternity",
  earned: "Earned"
};
export class LeaveRequest {
  type: string;
  fromDate: Date;
  toDate: Date;
  status?: string;

  constructor(type: string, fromDate: Date, toDate: Date) {
    this.type = type;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.status = "pending";
  }

  formatDate(date: Date): string {
    return date.toDateString();
  }

  getType(): string {
    console.log("type", leaveTypesMapping[this.type], this.type);
    return leaveTypesMapping[this.type];
  }

  getNumberOfDays(): number {
    let diff =
      Date.parse(this.toDate.toDateString()) -
      Date.parse(this.fromDate.toDateString());
    console.log("diff", diff);
    return Math.floor(diff / 86400000);
  }
}
