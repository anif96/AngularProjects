import { Component, OnInit } from '@angular/core';
import {Plat}  from  '../plat' ;
@Component({
  selector: 'app-plats-list',
  templateUrl: './plats-list.component.html',
  styleUrls: ['./plats-list.component.scss']
})
export class PlatsListComponent implements OnInit {
  public plats: Plat[] =[
     new Plat('bobotie','https://assets.afrikmag.com/uploads/2017/04/bobotie11web.jpg','Le bobotie est un plat orginaire de l’Afrique du Sud. Il désigne un gratin à base de viande hachée épicée, d’œuf et de pain imbibé de lait.'),
     new Plat('soya','https://assets.afrikmag.com/uploads/2017/04/soya-recette-cameroun-jewanda-11.jpg','Le soya est un plat de viandes grillées très populaire que l’on trouve au Cameroun, au Nigeria ou au Ghana. La viande est assaisonnée avec un mélange d’épices (paprika, gingembre, cayenne, etc.)'),
     new Plat('alloco','https://assets.afrikmag.com/uploads/2017/04/alloco1.jpg','Ce plat désigne de la banane plantain frite. Il se mange avec des œufs, du poisson et toute sortes de viande.'),
     

  ] ;

  

  constructor() { }

  ngOnInit(): void {
  }

}
