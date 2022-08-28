import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards';

  cards: Card[] = [];

  card: Card = {
    id: '',
    cardNumber: '',
    expiryMonth: '',
    cardholderName: '',
    cvc: ''
  }

  constructor(private cardService: CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAllCards()
    .subscribe(
      response => {
        this.cards = response;
        this.card = {
          id: '',
          cardNumber: '',
          expiryMonth: '',
          cardholderName: '',
          cvc: ''
        };
      }
    );
  }

  onSubmit (){

    if (this.card.id === '') {
      this.cardService.addCard(this.card)
      .subscribe(
        response => {
          this.getAllCards();
          this.card = {
            id: '',
            cardNumber: '',
            expiryMonth: '',
            cardholderName: '',
            cvc: ''
          };
        }
      );
    } else {
      this.updateCard(this.card);
    }

  }

  deleteCard(id: string){
    this.cardService.deleteCard(id)
    .subscribe (
      response => {
        this.getAllCards();
      }
    );
  }

  populateForm(card: Card) {
    this.card = card;
  }

  updateCard(card: Card) {
    this.cardService.updateCard(card)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }
}
