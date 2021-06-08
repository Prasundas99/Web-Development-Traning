import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';


@Injectable()
export class GithubService {

  private username: string = "prasundas99";
  private client_id = '817eae476fcd5035749c';
  private client_secret = '7d1d4659a2eb8cfe692ec5e5c42a7823bee1a59b';
  

  constructor(private _http: Http) {
    console.log("Github service ready ...");
    this.username = 'prasundas99';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username: string){
    this.username = username;
  }

}
