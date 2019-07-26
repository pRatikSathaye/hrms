import { Card } from "../models/card.model";

export class CardsService {
  private cardsData: Card[] = [
    new Card(
      "Website",
      "DOJ: 01 Jan, 17 Grade: G4 TL Grade Level: NA Permanent"
    ),
    new Card(
      "Contact",
      "Flat no. 1005, J Wing, JK Hills Park, Lane no. A28, Ganeshnagar, Dhayari, Pune, 411041, MAHARASHTRA, India 9021527091"
    ),
    new Card(
      "Education",
      "MCA-Computers from New Arts, Commerce and Science College, Ahmednagar, University of Pune in 2010 in M.Sc. (Computer Science)"
    ),
    new Card("Experience", "Add"),
    new Card("Personal", "Married Anniversary: 28 Feb, 17"),
    new Card("Emergency", "Pooja Pratik Sathaye O+"),
    new Card("Compensation", "Add"),
    new Card("Benefits", "Add"),
    new Card("Assets", "Add"),
    new Card("Travel", "Add"),
    new Card("Document", "1 Document"),
    new Card("Trainings Attended", "Details")
  ];

  getCards(): Card[] {
    return this.cardsData.slice();
  }
}
