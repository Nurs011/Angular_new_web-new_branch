import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {MenPageComponent} from "./men-page/men-page.component";

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<MenPageComponent> {
  canDeactivate(component: MenPageComponent){
    if(component.isDirty){
      return  window.confirm("You have some unsaved changes. Sure you want to leave?")
  }
    return true;
  }
}
