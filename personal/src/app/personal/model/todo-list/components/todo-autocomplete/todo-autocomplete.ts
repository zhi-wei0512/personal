import {
  Component,
  forwardRef,
  ElementRef,
  ViewChild,
  Input,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectOption } from '../../entity/option';

/**
 * 可篩選下拉單選控件
 * 原名: techmore-singleselect
 */
@Component({
  selector: 'tm-singleselect',
  templateUrl: './todo-autocomplete.html',
  styleUrls: ['./todo-autocomplete.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleSelectInputComponent),
      multi: true,
    },
  ],
})
export class SingleSelectInputComponent implements ControlValueAccessor {
  @ViewChild('searchInput') inputVal;
  /** 篩選後的可選項 */
  filterList: Array<SelectOption> = [];
  /** 可選項 */
  _options: Array<SelectOption> = [];
  @Input() set options(options: Array<SelectOption>) {
    this._options = options;
    if (this._pendingSelectedValue) {
      this.findOptionByValue(this._pendingSelectedValue);
    }
  }
  get options() {
    return this._options;
  }
  /** 是否禁用控件 */
  @Input() disabled = false;
  /** 控件名 */
  @Input() name: string;
  /** 文字輸入框內的占位符 */
  @Input() placeholder = '請輸入字彙，或從現有字彙中選擇。';
  /** 若不在可選項中，是否將輸入的值包裝並輸出成可選項 */
  @Input() keepAsNewOption = false;
  /** 暫存的所選項值(option value) */
  private _pendingSelectedValue: string;
  /** 所選項(option) */
  _selected: SelectOption;
  set selected(v: SelectOption) {
    this._selected = v;
    this._pendingSelectedValue = undefined;
    this.onChange(this._selected);
    this.triggerDomChangeEvent();
  }
  get selected(): SelectOption {
    return this._selected;
  }
  @Output() selectedChange = new EventEmitter<SelectOption>();

  onChange = (_: any) => {};
  onTouched = (_: any) => {};

  constructor(private elementRef: ElementRef) {}

  writeValue(value: number | string | SelectOption) {
    if (value) {
      const type = typeof value;
      if (type === 'string' || type === 'number') {
        if (this.options && this.options.length > 0) {
          this.findOptionByValue('' + value);
        } else {
          this._pendingSelectedValue = '' + value;
        }
      } else {
        this.selected = value as SelectOption;
      }
    } else if (this.selected) {
      this.selected = undefined;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  findOptionByValue(value: string) {
    const f = this.options.find((option) => option.value === value);
    if (f) {
      this.selected = f;
    } else if (this.keepAsNewOption) {
    } else {
      console.error(
        `formControl [name=${this.name}] ngModel value not inside options.`
      );
    }
  }

  /** 是否已存在可項項 */
  isExistingOption(itemLabel: string): boolean {
    if (this.selected && this.selected.value === itemLabel) {
      return true;
    } else {
      return false;
    }
  }

  /** 篩選可選項 */
  filterOptions(evt) {
    const str = this.inputVal.nativeElement.value;
    if (evt.keyCode !== 13) {
      // 輸入文字
      if (str) {
        // 輸入框內有文字
        this.filterList = this.options.filter((cht) => {
          return cht['label'] && cht['label'].indexOf(str) > -1;
        });

        const find = this.options.find((option) => option.label === str);
        if (!find) {
          // 輸入的文字並不吻合任何可選項
          if (this.keepAsNewOption) {
            // 包裝新值
            this.selected = { label: str, value: null, data: {} };
          } else if (this.selected) {
            // 剔除
            this.selected = undefined;
          }
        } else {
          // 有完全吻合的可選項
          this.selected = find;
        }
      } else {
        // 輸入框內沒有文字
        this.filterList = this.options;
        if (this.selected) {
          this.selected = undefined;
        }
      }
    } else {
      // 按下 ENTER
      // if (!this.isExistingOption(str)) {  // 不存在的
      //   this.selected = { label: str, value: null };
      //   this.filterList = this.options;
      // } else { return; }
    }
  }

  /** 選取可選項 */
  selectItem(item: SelectOption) {
    if (JSON.stringify(this.selected) === JSON.stringify(item.value)) {
      // 重複選取
      this.selected = undefined; // 移除
    } else {
      this.selected = item; // 設定
      this.selectedChange.emit(item);
    }
  }

  @HostListener('document:click', ['$event'])
  handleClick(evt: any) {
    const clickedComponent = evt.target;
    let inside = false;
    if (this.elementRef.nativeElement.contains(clickedComponent)) {
      inside = true;
    }

    if (inside && clickedComponent.localName === 'input') {
      this.filterList = this.options;
    } else {
      this.filterList = [];
    }
  }

  /** 點選日期後要手動觸發原生change事件 */
  triggerDomChangeEvent() {
    let event: Event;
    if (typeof Event === 'function') {
      event = new Event('change', { bubbles: true, cancelable: true });
    } else {
      event = document.createEvent('Event');
      event.initEvent('change', true, true);
    }

    this.inputVal.nativeElement.dispatchEvent(event);
  }
}
