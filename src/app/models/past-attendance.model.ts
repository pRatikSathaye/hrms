export class PastAttendance {
  private startDate: number;
  private endDate: number;
  private reason: string;
  private request?: string;

  constructor(startDate: number, endDate: number, reason: string) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.reason = reason;
    this.request = "pending";
  }

  get formattedStartDate() {
    return new Date(this.startDate).toDateString();
  }

  get formattedEndDate() {
    return new Date(this.endDate).toDateString();
  }

  get noOfDays() {
    return (this.endDate - this.startDate) / (1000 * 60 * 60 * 24);
  }
}
