import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Portfolio } from './entity/portfolio';
import { Article } from './entity/article';
import { Custom } from './entity/custom';
import { Banner } from './entity/banner';

@Injectable()
export class IndexService {
  constructor(private http: HttpClientModule) {}

  getPortfolio(): Observable<Portfolio[]> {
    return timer(110).pipe(
      map((v) => {
        return [
          {
            id: 0,
            title: '再造歷史現場',
            description: '123',
            openStart: 1493568000,
            image: {
              original:
                'http://theme.file.goodays.cc:8100/image/2021-10-25/2aae9dcc-cb87-4607-8c4b-34534138bb69/com-main.jpg',
              name: '640x480-1',
              ext: 'png',
            },
          },
          {
            id: 0,
            title: '國家文化資產網',
            description: '',
            openStart: 1493568000,
            image: {
              original:
                'http://theme.file.goodays.cc:8100/image/2021-10-25/85525e95-51a0-4193-9f66-74958bd55a0d/高屏溪舊鐵橋.png',
              name: '640x480-1',
              ext: 'png',
            },
          },
          {
            id: 0,
            title: '台灣世界遺產',
            description: '',
            openStart: 1493568000,
            image: {
              original:
                'http://theme.file.goodays.cc:8100/image/2021-10-25/0fd2473b-f575-4f6f-9e52-ccd6af41a92a/Image 9.png',
              name: '640x480-1',
              ext: 'png',
            },
          },
        ];
      })
    );
  }

  getArticle(): Observable<Article[]> {
    return timer(110).pipe(
      map((v) => {
        return [
          {
            id: 0,
            title: '第44屆金鼎獎頒獎典禮榮耀登場　攜手出版業邁向下一個里程碑',
            description: '',
            openStart: '2022/03/04',
          },
          {
            id: 0,
            title: '2017 夏 ‧ 塞納河畔的臺灣風',
            description: '',
            openStart: '2022/03/04',
          },
          {
            id: 0,
            title: '異國 ‧ 他鄉 ‧ 不期而遇',
            description: '',
            openStart: '2022/03/04',
          },
          {
            id: 0,
            title: '9月日本東京－驚豔東京禮品展',
            description: '',
            openStart: '2022/03/04',
          },
        ];
      })
    );
  }

  getCustom(): Observable<Custom[]> {
    return timer(110).pipe(
      map((v) => {
        return [
          {
            image:
              'http://theme.file.goodays.cc:8100/image/2021-11-30/19f135d3-5a2b-433c-adf3-1a2158b41a18/logo01.png',
            id: 1,
            url: 'https://nchdb.boch.gov.tw',
            name: '文化資產查詢',
            description: 'Search',
          },
          {
            id: 2,
            image:
              'http://theme.file.goodays.cc:8100/image/2021-11-30/05714056-4b92-4912-ae04-af3d99ea8746/logo02.png',
            url: 'https://nchdb.boch.gov.tw/assets/aboriginalSearch',
            name: '原住民專區',
            description: 'Indigenous',
          },
          {
            id: 3,
            image:
              'http://theme.file.goodays.cc:8100/image/2021-10-12/3af1e80f-dfa0-4a24-ad74-e6dcb7ef2bb6/logo03.png',
            url: 'https://nchdb.boch.gov.tw/law/lawSearch',
            name: '文化資產法規',
            description: 'Law',
          },
          {
            id: 4,
            image:
              'http://theme.file.goodays.cc:8100/image/2021-11-30/515bf303-3147-4fc0-b270-132685f8ae6c/logo06.png',
            url: 'http://tcra.goodays.cc:8100/zh-tw/activity',
            name: '活動訊息',
            description: 'Sing up',
          },
          {
            id: 5,
            image:
              'http://theme.file.goodays.cc:8100/image/2021-11-30/f780c7e7-a108-4d2e-8661-65f63df48f16/logo04.png',
            url: 'https://event.culture.tw/BOCH/portal/Tour/J5401MAction?changePage=0&TourType=01',
            name: '預約導覽',
            description: 'Guided tour',
          },
          {
            id: 6,
            image:
              'http://theme.file.goodays.cc:8100/image/2021-10-12/c5abe3a8-9526-4f19-8abd-3c557a9ab1d2/logo05.png',
            url: 'http://tcra.goodays.cc:8100/zh-tw/PlazaApply',
            name: '場地租借',
            description: 'Space',
          },
        ];
      })
    );
  }

  getBanner(): Observable<Banner> {
    return timer(110).pipe(
      map((v) => {
        return {
          entities: [
            {
              id: 114637,
              image:'http://theme.file.goodays.cc:8100/banner/2021-11-12/faa00820-8f62-463e-9ee1-e3d3fbce9d7a/00001.png',
              name: '臺北賓館',
              description: '臺北賓館',
              keywords: ['官網'],
            },
            {
              id: 114638,
              image:'http://theme.file.goodays.cc:8100/banner/2021-11-12/c264f51f-21d4-4695-a2f8-9b7f7848da5a/00002.png',
              name: '理學堂大書院',
              description: '理學堂大書院',
              keywords: ['官網'],
            },
            {
              id: 114644,
              image:'http://theme.file.goodays.cc:8100/banner/2021-12-01/f5000dda-63e7-44f9-b747-564c0dca96cb/煤記憶.png',
              name: '煤記憶',
              description: '煤記憶',
              keywords: ['園區'],
            },
            {
              id: 114643,
              image:'http://theme.file.goodays.cc:8100/banner/2021-12-01/47849aae-d7a9-4cab-aef1-83805a408efc/繡.png',
              linking:'https://event.culture.tw/BOCH/portal/ArtistSpace/R0502MAction',
              name: '繡復解密特展',
              description: '繡復解密特展',
              keywords: ['園區'],
            },
            {
              id: 114636,
              image:'http://theme.file.goodays.cc:8100/banner/2021-12-01/4fc42c17-1693-4f5f-aec1-90ea3590db10/2110250121441938459001.jpg',
              name: '陣勢登台－鬥陣看鬧熱',
              description: '陣勢登台－鬥陣看鬧熱',
              keywords: ['園區'],
            },
          ],
        };
      })
    );
  }
}
