class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
          this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
  }

  async search(query) {
    const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB2doCnbR_LC1Xr2k8cshP7H_cCa6IEuGA&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
          this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeFetch;
