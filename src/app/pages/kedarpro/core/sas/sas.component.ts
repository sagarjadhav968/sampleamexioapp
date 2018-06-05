/**
 * Created by: MetaMagic
 * Date: 05/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'sas',
  templateUrl: 'sas.component.html'
})
export class SasComponent implements OnInit{
  sasModel:SasModel;
 
  constructor(private http: HttpClient) {
    this.sasModel=new SasModel();
       }
  ngOnInit(){
  }
 

   
}
export class SasModel{
 }
