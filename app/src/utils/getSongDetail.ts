import { getSongUrl, getSongLyric } from '@/api/layout';

// 格式化歌词
export const formatLyric = (lyric: string) => {
  const lyricList = lyric.split('\n');
  const arr = lyricList.map((item: string) => {
    const ly = item.split(']');
    return {
      time: ly[0].substr(1),
      words: ly[1]
    };
  });
  return arr;
};

// 根据歌曲id获取歌曲url跟歌词
export default async function(songId: string) {
  // 获取歌曲url
  const songUrl = await getSongUrl({ id: songId });
  // 获取歌曲歌词
  const lyric = await getSongLyric({ id: songId });
  // 获取原文歌词
  const lyc = lyric.lrc && lyric.lrc.lyric ? formatLyric(lyric.lrc.lyric) : [];
  // 获取翻译歌词
  const tlyc = lyric.tlyric && lyric.tlyric.lyric ? formatLyric(lyric.tlyric.lyric) : [];
  return {
    songDetailInfo: songUrl.data[0],
    lyric: lyc,
    tlyric: tlyc
  };
}
