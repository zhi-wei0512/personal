// import { HttpRequest, HttpHandler, HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injector } from '@angular/core';
// import { Router } from '@angular/router';
// // import { GlobalComponentService } from '@techmore/global';
// import { Subject, Observable, throwError } from 'rxjs';
// import { catchError, switchMap, tap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';
// // import { parseAuthoriztionToken } from '../declaration/utils';
// // import { AuthService } from './auth.service';

// export class AuthorizationTokenService implements HttpInterceptor {
//   /** 是否正在更新存取根 */
//   refreshTokenInProgress = false;
//   tokenRefreshed$ = new Subject();
//   /** 正在踢人把頁面轉回login中 */
//   isKickingOut = false;

//   constructor(
//     private injector: Injector,
//     // private globalComponentService: GlobalComponentService,
//     private http: HttpClient,
//     private router: Router,
//   ) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//     if (!localStorage.getItem('Authorization')) {
//       if (this.isKickingOut) { return; }
//       this.isKickingOut = true;
//       // this.globalComponentService.openErrorAlert(`登入時間過期，請重新登入`, { title: '錯誤訊息'});
//       this.logout();
//       return throwError(new Error(`localStorage without Authorization, request url: ${request.urlWithParams}`));
//     }

//     if (!request.headers.has('Authorization')) {
//       // Handle request
//       request = this.addAuthHeader(request);
//     }

//     // Handle response
//     return next.handle(request).pipe(catchError(error => {
//       return this.handleResponseError(error, request, next);
//     }));
//   }

//   /** 將 API 請求加上 Authorization */
//   private addAuthHeader(request) {
//     return request.clone({
//       setHeaders: {
//         Authorization: 'Bearer ' + localStorage.getItem('Authorization')
//       }
//     });
//   }

//   /** 處理攔截到 ResponseError 的時候 */
//   private handleResponseError(error, request?, next?) {
//     if (!localStorage.getItem('Authorization')) {
//       // 登入時間過期，已被要求重新登入
//       return throwError(error);
//     }

//     if (this.checkRefreshTokenExpiredTime()) {
//       if (this.isKickingOut) { return; }
//       this.isKickingOut = true;
//       // this.globalComponentService.openErrorAlert(`登入時間過期，請重新登入`, { title: '錯誤訊息' });
//       this.logout();
//       return throwError(error);
//     }

//     if (error.status === 612) {
//       if (this.isKickingOut) { return; }
//       this.isKickingOut = true;
//       // this.globalComponentService.openErrorAlert('頁面閒置太久，請重新登入');
//       this.logout();
//       return throwError(error);
//     }
//     // if (error.status === 606) {
//     //   if (this.isKickingOut) { return; }
//     //   this.isKickingOut = true;
//     //   this.globalComponentService.openErrorAlert(`${error.error.message}，錯誤代碼:${error.error.code}，時間:${error.error.time}`);
//     //   this.logout();
//     //   return throwError(error);
//     // }
//     if (error.status === 611 || error.status === 401) {
//       // 尚未過期，更新存取根
//       return this.refreshToken().pipe(
//         switchMap(() => {
//           request = this.addAuthHeader(request);
//           return next.handle(request);
//         }),
//         catchError(e => {
//           if (e.status !== 611) {
//             return this.handleResponseError(e);
//           } else {
//             if (this.isKickingOut) { return; }
//             this.isKickingOut = true;
//             // this.globalComponentService.openErrorAlert(`${error.error.message}，錯誤代碼:${error.error.status}，時間:${error.error.time}`, { title: '錯誤訊息' });
//             this.logout();
//           }
//         }));
//     }
//     return throwError(error);
//   }

//   /** 檢查 更新存取根 到期時間是否在一分鐘內會過期 */
//   private checkRefreshTokenExpiredTime() {
//     const refreshToken = localStorage.getItem('refreshToken');
//     // const refreshInfo = parseAuthoriztionToken(refreshToken);
//     const pareInfo = JSON.parse(refreshInfo);
//     const refreshExp = pareInfo.exp;
//     const nowTime = (Date.now() / 1000) + 60;
//     if (refreshExp < nowTime) {
//       return true;
//     }
//     return false;
//   }

//   /** 更新 存取根 */
//   private refreshToken(): Observable<any> {
//     if (this.refreshTokenInProgress) {
//       return new Observable(observer => {
//         const subc = this.tokenRefreshed$.subscribe(() => {
//           subc.unsubscribe();
//           observer.next();
//           observer.complete();
//         });
//       });
//     } else {
//       this.refreshTokenInProgress = true;

//       return this.http.get(environment.apiHost + '/backend/oauth/token/refresh',
//         { headers: { Authorization: 'Bearer ' + localStorage.getItem('refreshToken') } }
//       ).pipe(
//         tap(((jwtToken) => {
//           this.refreshTokenInProgress = false;
//           const refreshToken = jwtToken['refreshToken'];
//           const accessToken = jwtToken['accessToken'];
//           localStorage.setItem('Authorization', accessToken);
//           localStorage.setItem('refreshToken', refreshToken);
//           // localStorage.setItem('jwt-payload', parseAuthoriztionToken(accessToken));
//           this.tokenRefreshed$.next();
//         })),
//         catchError((err: HttpErrorResponse) => {
//           this.refreshTokenInProgress = false;
//           // this.globalComponentService.openErrorAlert('頁面閒置太久，請重新登入');
//           this.logout();
//           throw err;
//         }));
//     }
//   }

//   private logout() {
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('Authorization');
//     localStorage.removeItem('jwt-payload');
//     this.router.navigateByUrl('/login').then(() => {
//       this.isKickingOut = false;
//     });
//   }
// }
