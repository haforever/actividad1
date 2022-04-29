import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage implements OnInit, OnDestroy{

  constructor() { }

  ngOnInit() {
    console.log('este es el primer paso');
  }
  public ionViewWillEnter(): void{
  console.log('este es el segundo paso');
}

  public ionViewDidEnter(): void{
    console.log('este es el tercero paso');
  }

  public ionViewWillLeave(): void{
    console.log('este es el cuarto paso');
  }

  public ionViewDidLeave(): void{
    console.log('este es el quinto paso');
  }

  ngOnDestroy() {
    console.log('este es el sexto paso');

  }
}
