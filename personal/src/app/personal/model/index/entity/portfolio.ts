import { Image } from '../entity/Image';

export class Portfolio {
  /** id */
  id: number;
  /** 名稱 */
  title: string;
  /** 內容-簡述 */
  description: string;
  /** 日期 */
  openStart: number;
  /** 圖片資訊 */
  image: Image;
}
