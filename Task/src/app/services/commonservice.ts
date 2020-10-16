import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class Services{
constructor(private http:HttpClient){}
    getapi(url:any):any{
    return this.http.get(url);
    }
}