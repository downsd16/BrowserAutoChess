import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class CanvasComponent {
  tiltAngle: number = 0;
  vertOffset: number = 0;

  cardNames: Array<String> = [
    'Joe',
    'Jim',
    'Jane',
    'Jill',
    'Jack',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardNames, event.previousIndex, event.currentIndex);
  }

  getSliderStyle(): any {
    return {
      transform: `rotate(${this.tiltAngle}deg) translateY(${this.vertOffset}px)`,
    };
  }

  addCard() {
    if (this.cardNames.length >= 10) {
      return;
    }
    this.cardNames.push('Jerry');
  }
}
