// import { FormBuilder, FormGroup } from '@angular/forms';
// import { EventEmitter, Inject, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
// // import { AutoValidateDirective } from '@techmore/es-ngx-auto-validate';
// import { DOCUMENT } from '@angular/common';
// // import { PageScrollService } from 'ngx-page-scroll-core';


// export abstract class TmReactForm<T> implements OnChanges {
//   // @ViewChildren(AutoValidateDirective) autoValidators: QueryList<AutoValidateDirective>;
//   @Input() detail: T;
//   formGroup: FormGroup;
//   @Output() onSubmit = new EventEmitter<T>();

//   constructor(
//     protected fb: FormBuilder,
//     // protected pageScrollService: PageScrollService,
//     @Inject(DOCUMENT) protected document: Document,
//   ) {
//     this.initFormGroup();
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if ('detail' in changes) {
//       // data module to form module
//       this.formGroup.reset();
//       const formData = this.transformToFormData(this.detail);
//       this.transformToFormDataHandler(formData);
//       this.formGroup.patchValue(formData);
//       this.formGroup.markAsPristine();
//     }
//   }

//   submit(): void {
//     this.formGroup.valid ? this.onSubmit.emit(this.transformToBean(this.formGroup.value)) : this.formInvalidHandler();

//     // this.onSubmit.emit(null);
//   }

//   markAsPristine() {
//     this.formGroup.markAsPristine();
//   }

//   markAsUntouched() {
//     this.formGroup.markAsUntouched();
//   }

//   /** init formGroup */
//   abstract initFormGroup(): void;
//   /** form module to data module */
//   abstract transformToBean(formData: any): T;
//   /** data module to form module */
//   abstract transformToFormData(data: T): any;

//   /** after transformToFormData handler */
//   transformToFormDataHandler(formData: any): void {
//   }

//   /** after submit invalid */
//   formInvalidHandler(): void {
//     // this.autoValidators.forEach(autoValidator => autoValidator.checkError());
//     // const errorEl = this.document.querySelector('form .validate-error');
//     // if (errorEl) {
//     //   this.pageScrollService.scroll({
//     //     document: this.document,
//     //     scrollTarget: errorEl.closest('.form-group') as HTMLElement,
//     //   });
//     // }
//   }
// }
