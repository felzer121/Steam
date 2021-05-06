import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import Inventory from 'src/app/models/Inventory';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dota-inventory',
  templateUrl: './dota-inventory.component.html',
  styleUrls: ['./dota-inventory.component.scss']
})
export class DotaInventoryComponent implements OnInit {
  private headers: HttpHeaders = new HttpHeaders();
  inventory: Inventory[] = [];
  isAuthenticated$: Observable<boolean>;
  testData: string = '';
  constructor(private http: HttpClient, private securityService: OidcSecurityService) { 
    this.isAuthenticated$ = this.securityService.isAuthenticated$;
  }

  ngOnInit(): void {
    this.isAuthenticated$.pipe(
      switchMap((isAuthorized: boolean) => this.test(isAuthorized))
    )
      .subscribe(
        data => this.testData
      )
  }
  private test = (isAuthenticated: boolean): Observable<string> => {
    this.setHeaders();
    let response = this.http.get<string>("https://localhost:5001/test", { headers: this.headers});
    this.http.get('https://localhost:5001/user/validate', {headers: this.headers}).subscribe(r => console.log(r));

    return response;
  }

  private setHeaders(): any {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');

    const token = this.securityService.getToken();

    console.log(token);
    if (token !== '') {
        const tokenValue = 'Bearer ' + token;
        this.headers = this.headers.append('Authorization', tokenValue);
    }
  }
}
