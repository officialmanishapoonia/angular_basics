import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateData, User } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.apiUrl+'/'+id);
  }

  addUser(data:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,data);
  }

  UpdateUser(id:number,data:User):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${id}`,data);
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
}
