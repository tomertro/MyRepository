import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/application-service';
import { Observable, of, from } from 'rxjs';
// The @Injectable() decorator marks it as a service that can be injected, 
//but Angular can't actually inject it anywhere until you configure an Angular dependency 
//injector with a provider of that service
@Injectable({
    // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class PersonalDetailsService {
  constructor(private appService:ApplicationService) { }

  getPersonalDetails():Observable<PersonalDeatiles>{
       const result =  this.appService.readFile('PersonalDetails.json') ;
       return from(result);
       
  }

}