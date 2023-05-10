{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // omit: 명시된 것을 제외하고 사용하고 싶을 때 사용
  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'http://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
