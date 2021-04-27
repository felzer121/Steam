import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  items = [
    {icon: 'assets/fam.png', message: '@⚡frz⚡csgorun.pro net, поэтому я его негром сделал чтоб в двойне был пидорасом', isMessage: false},
    {icon: 'assets/fam.png', message: 'Уххх че ща буит', isMessage: true}
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.items.push( {icon: 'assets/fam.png',
        message: 'Ахахахахах', isMessage: false});
    }, 4000);

  }

}
