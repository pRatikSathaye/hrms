export class PastAttendance {
  private startDate: number;
  private endDate: number;
  private reason: string;
  private forMultipleDays: boolean;
  private request?: string;

  constructor(
    startDate: number,
    endDate: number,
    reason: string,
    forMultipleDays: boolean = false
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.reason = reason;
    this.forMultipleDays = forMultipleDays;
    this.request = "pending";
  }

  get formattedStartDate() {
    return new Date(this.startDate).toDateString();
  }

  get formattedEndDate() {
    return new Date(this.endDate).toDateString();
  }

  get noOfDays() {
    return (this.endDate - this.startDate) / (1000 * 60 * 60 * 24) + 1;
  }
}
