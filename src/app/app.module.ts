import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ImpInfoComponent } from "./imp-info/imp-info.component";
import { CardsComponent } from "./cards/cards.component";
import { CardComponent } from "./cards/card/card.component";
import { ProfileComponent } from "./profile/profile.component";
import { IndexComponent } from "./index/index.component";
import { NewLeaveRequestComponent } from "./leaves/new-leave-request/new-leave-request.component";
import { LeavesComponent } from "./leaves/leaves.component";
import { LeavesService } from "./services/leaves.service";
import { HeaderComponent } from "./header/header.component";
import { MarkPastAttendanceComponent } from "./mark-past-attendance/mark-past-attendance.component";
import { ApproveLeaveRequestComponent } from "./approve-leave-request/approve-leave-request.component";

const appRoutes: Route[] = [
  { path: "", component: IndexComponent },
  { path: "profile", component: ProfileComponent },
  { path: "leaves", component: LeavesComponent },
  { path: "new-leave-request", component: NewLeaveRequestComponent },
  { path: "mark-past-attendance", component: MarkPastAttendanceComponent },
  { path: "approve-leave-requests", component: ApproveLeaveRequestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImpInfoComponent,
    CardsComponent,
    CardComponent,
    ProfileComponent,
    IndexComponent,
    NewLeaveRequestComponent,
    LeavesComponent,
    HeaderComponent,
    MarkPastAttendanceComponent,
    ApproveLeaveRequestComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [LeavesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
