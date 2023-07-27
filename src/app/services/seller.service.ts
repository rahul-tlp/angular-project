import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false) 
  constructor(private http:HttpClient) { }
  userSignUp(data:any) {  
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}
    ).subscribe((result)=> {
      this.isSellerLoggedIn.next(true); 
      console.warn(result);
    });
    
    return false; 
  }
}