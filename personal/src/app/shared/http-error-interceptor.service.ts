// import { Injectable, Injector } from '@angular/core';
// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// // import { GlobalComponentService } from '@techmore/global';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpErrorInterceptorService implements HttpInterceptor {
//   /** 正在踢人把頁面轉回login中 */
//   isKickingOut = false;

//   constructor(
//     private injector: Injector,
//     // private globalComponentService: GlobalComponentService
//   ) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const router = this.injector.get(Router);

//     // @ts-ignore
//     return next.handle(req).pipe(catchError(err => {
//       if (err instanceof HttpErrorResponse) {
//         const data = err.error;
//         switch (err.status) {
//           case 500:
//             if (data instanceof Blob) {
//               const reader = new FileReader();
//               reader.onload = () => {
//                 const result = JSON.parse(reader.result.toString());
//                 // this.globalComponentService.openErrorAlert(`${result.message}，錯誤代碼:${result.code}，時間:${result.time}`, {title: '錯誤訊息'});
//               };
//               reader.readAsText(data);
//             } else {
//               // this.globalComponentService.openErrorAlert(`${data.message}，錯誤代碼:${data.code}，時間:${data.time}`, {title: '錯誤訊息'});
//             }
//             break;
//           case 611:
//           case 401:
//           case 403:
//           case 612:
//           case 606:
//             // 已經在 AuthorizationTokenService 處理了，這裡就直接跳過
//             break;
//           case 404:
//             // this.globalComponentService.openErrorAlert('找不到資源', {title: '錯誤訊息'});
//             break;
//           case 700:
//             if (data instanceof Blob) {
//               const reader = new FileReader();
//               reader.onload = () => {
//                 const result = JSON.parse(reader.result.toString());
//                 // this.globalComponentService.openErrorAlert(`${result.message}，錯誤代碼:${result.code}，時間:${result.time}`, {title: '錯誤訊息'});
//               };
//               reader.readAsText(data);
//             } else {
//               // this.globalComponentService.openErrorAlert(`${data.message}，錯誤代碼:${data.code}，時間:${data.time}`, {title: '錯誤訊息'});
//             }
//             break;
//           case 400:
//             let message = data.message;
//             if (message === '非有效的JWT字串') {
//               if (this.isKickingOut) { break; }
//               this.isKickingOut = true;
//               // this.globalComponentService.openErrorAlert(`${message}，錯誤代碼:${data.code}`);
//               localStorage.removeItem('Authorization');
//               localStorage.removeItem('jwt-payload');
//               localStorage.removeItem('refreshToken');
//               router.navigateByUrl('/login');
//               this.isKickingOut = false;
//               break;
//             }
//             if (data.fieldErrors) {
//               message = data.fieldErrors.map(fe => {
//                 const labelHTMLElement = document.querySelector(`label[for="${fe.field}"]`) as HTMLElement;
//                 let fieldName = '';
//                 if (labelHTMLElement && labelHTMLElement.innerHTML) {
//                   fieldName = labelHTMLElement.innerHTML;
//                 } else {
//                   fieldName = fe.field;
//                 }

//                 fieldName = fieldName.replace('*', '');
//                 return `"${fieldName}" ${fe.message}`;
//               }).join('、');
//             }
//             // this.globalComponentService.openErrorAlert(`${message}，錯誤代碼:${data.code}`, {title: '錯誤訊息'});
//             break;
//           default:
//             // this.globalComponentService.openErrorAlert(data.message, {title: '錯誤訊息'});
//             break;
//         }
//       }
//       throw err;
//     }));
//   }
// }
