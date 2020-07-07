// 歌词信息
export interface SongLyric {
  time: string; // 歌词的播放时间
  words: string; // 歌词
}

// 歌曲信息
export interface SongInfo {
  songDetailInfo: object | any; // 歌曲资源(url地址，大笑)
  lyric: SongLyric[]; // 原文歌词
  tlyric: SongLyric[]; // 翻译歌词
  songInfo: any; // 歌曲详细信息(名字，歌手，图片)
}

// 歌曲播放信息
export interface SongPlayStatusType {
  currentTimeShow: string; // 当前时间(显示)，'00:00'
  fullTimeShow: string; // 总时间(显示)，'00:00'
  currentTime: number; // 当前时间(播放)，50
  fullTime: number; // 当前时间(播放)，100
  status: string; // 播放状态play：播放；pause：暂停
  volume: number; // 播放音量0~1
}