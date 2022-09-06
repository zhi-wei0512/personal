export class Banner {
  entities: EntitiesBanner[];
}

export class EntitiesBanner {
  /** id */
  id: number;
  /** 名稱 */
  name: string;
  /** 內容-簡述 */
  description: string;
  /** keywords */
  keywords: string[];
  /** 圖片 */
  image: string;
  /**連結 */
  linking?: string;
}
