/** 取得指定[日期],[起迄站間]之時刻表資料 */
export class RailODDailyTimetable {
  /**行駛日期:格式: yyyy:MM:dd */
  trainDate: String;
  /**  車次資料*/
  DailyTrainInfo: RailDailyTrainInfo;
  /** 起站停靠時間資料*/
  OriginStopTime: RailStopTime;
  /** 迄站停靠時間資料*/
  DestinationStopTime: RailStopTime;
  /**資料更新日期時間:ISO8601格式:yyyy-MM-ddTHH:mm:sszzz */
  UpdateTime: Date;
  /**資料版本編號 */
  VersionID: number;
}
export class RailStopTime {
  /** 跑法站序(由1開始) */
  StopSequence: number;
  /** 車站代碼 */
  StationID: String;
  /** 車站名稱 */
  StationName: String;
  /** 到站時間:格式(HH:mm:ss) */
  ArrivalTime: Date;
  /** 離站時間(格式: HH:mm:ss)   */
  DepartureTime: Date;
}

export class RailDailyTrainInfo {
  /**離車次代碼 */
  TrainNo: String;
  /**行駛方向 : [0:'南下',1:'北上'] */
  Direction: number;
  /**列車起點車站代號 */
  StartingStationID: String;
  /**列車起點車站名稱 */
  StartingStationName: String;
  /**列車終點車站代號 */
  EndingStationID: String;
  /**列車終點車站名稱 */
  EndingStationName: String;
  /**附註說明) */
  Note: any;
}
