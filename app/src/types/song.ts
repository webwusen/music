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
