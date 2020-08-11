import { Component, OnInit } from '@angular/core';
import {Plat}  from  '../plat' ;

@Component({
  selector: 'app-plats-details',
  templateUrl: './plats-details.component.html',
  styleUrls: ['./plats-details.component.scss']
})
export class PlatsDetailsComponent implements OnInit {
 public plat  = new Plat('bobotie','https://assets.afrikmag.com/uploads/2017/04/bobotie11web.jpg','Le bobotie est un plat orginaire de l’Afrique du Sud. Il désigne un gratin à base de viande hachée épicée, d’œuf et de pain imbibé de lait.');
  constructor() { }

  ngOnInit(): void {
  }

}
