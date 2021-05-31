import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flop-game',
  templateUrl: './flop-game.component.html',
  styleUrls: ['./flop-game.component.scss'],
})
export class FlopGameComponent implements OnInit {
  card = [
    { label: '梅花1', value: '1', check: false },
    { label: '梅花1', value: '1', check: false },
    { label: '梅花2', value: '2', check: false },
    { label: '梅花2', value: '2', check: false },
    { label: '梅花3', value: '3', check: false },
    { label: '梅花3', value: '3', check: false },
    { label: '梅花4', value: '4', check: false },
    { label: '梅花4', value: '4', check: false },
    { label: '梅花5', value: '5', check: false },
    { label: '梅花5', value: '5', check: false },
    { label: '梅花6', value: '6', check: false },
    { label: '梅花6', value: '6', check: false },
    { label: '梅花7', value: '7', check: false },
    { label: '梅花7', value: '7', check: false },
    { label: '梅花8', value: '8', check: false },
    { label: '梅花8', value: '8', check: false },
  ];

  showCard: boolean = false;

  hasFlippedCard = false;
  lockBoard = false;

  firstCard: any = {};
  secondCard: any = {};
  typeCard: boolean = true;
  constructor() {}
  cards;
  //1.翻開依樣 true && 取消監聽
  //2. 翻開不一樣 false && 繼續監聽
  ngOnInit(): void {
    this.cards = document.querySelectorAll('.memory-card');
    console.log(this.cards)
    this.cards.forEach(card => card.addEventListener('click',  this.flipCard(card)));
  }

  flipCard(card) {
    console.log('觸發')
    // 剛剛沒配對成功的話，就把牌蓋起來
    if (this.lockBoard) return;

    // 避免翻同一張牌當做第二張
    if (this === this.firstCard) return;

    card.setAttribute("class",'flip');


    if (!this.hasFlippedCard) {
      this.hasFlippedCard = true;
      this.firstCard = this; // this => the clicked card
      return;
    }

    this.secondCard = this;

    this.checkForMatch();
  }

  checkForMatch() {
    // 如果牌組配對成功 => isMatch
    // 就不可以再點擊那組牌 => disableCards()
    // 配對錯誤就把該牌組蓋起來 => unflipCards()
    let isMatch =
      this.firstCard.dataset.framework === this.secondCard.dataset.framework;
    isMatch ? this.disableCards() : this.unflipCards();
  }

  disableCards() {
    // 移除監聽事件，釋放記憶體
    this.firstCard.removeEventListener('click', this.flipCard);
    this.secondCard.removeEventListener('click', this.flipCard);

    this.resetBoard();
  }

  unflipCards() {
    this.lockBoard = true;

    // 把牌蓋起來
    setTimeout(() => {
      this.firstCard.classList.remove('flip');
      this.secondCard.classList.remove('flip');
      this.resetBoard();
    }, 1500);
  }
  resetBoard() {
    [this.hasFlippedCard, this.lockBoard] = [false, false];
    [this.firstCard, this.secondCard] = [null, null];
  }
}
