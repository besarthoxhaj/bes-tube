/* @flow */

export type ApiSearchResult = {
  status: string,
  data: SearchQueryResult,
};

export type SearchQueryResult = {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: Array<SearchResult>
};

export type SearchResult = {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  snippet: {
    channelTitle: string,
    liveBroadcastContent: string,
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        width: number,
      },
      medium: {
        url: string,
        width: number,
        width: number,
      },
      high: {
        url: string,
        width: number,
        width: number,
      },
    }
  },
};
