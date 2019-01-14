import {Injectable} from "@angular/core";
@Injectable()
export class AuthService{
  login(user:string,password:string):boolean{
    if(user==='lj'&&password==='aizuozuo'){
      localStorage.setItem('username',user);
      return true;
    }
    return false;
  }
}
