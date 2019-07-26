import { Component, OnInit } from "@angular/core";
import { Card } from "../models/card.model";
import { CardsService } from "../services/cards.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {
  details = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.details = this.cardsService.getCards();
  }
}
