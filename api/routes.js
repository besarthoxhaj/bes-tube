'use strict';

const path = require('path');
const google = require('googleapis');
const ytdl = require('ytdl-core');
const fs = require('fs');

const data = require('../data');
const BASE_PATH = `${process.cwd()}/_videos`;

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
});

module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './build',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/video/{param*}',
    handler: (req, res) => {
      return ;
    }
  },
  {
    method: 'GET',
    path: '/test/{param*}',
    handler: {
      directory: {
        path: './tests/_snapshots',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'POST',
    path: '/api/download',
    handler: (req, res) => {

      let payload = req.payload;

      if(typeof req.payload === 'string') {
        payload = JSON.parse(payload);
      }

      ytdl(
        `http://www.youtube.com/watch?v=${payload['videoId']}`
      ).pipe(
        fs.createWriteStream(`${BASE_PATH}/${payload['videoId']}.mp4`)
      );

      return res({
        status: 'success',
        data: {},
      });
    }
  },
  {
    method: 'POST',
    path: '/api/search',
    handler: (req, res) => {

      let payload = req.payload;

      if(typeof req.payload === 'string') {
        payload = JSON.parse(payload);
      }

      // if(process.env.NODE_ENV === 'test') {
      //   return res(data[`GET.SEARCH.${payload['text'].toUpperCase()}`]);
      // }

      youtube.search.list({
        part: 'snippet',
        q: payload['text'],
      }, (err, data) => {

        if(err) {
          return res({
            status: 'error',
            data: err,
          }).code(400);
        }

        return res({
          status: 'success',
          data: data,
        });
      });
    }
  },
  {
    method: 'GET',
    path: '/api/library',
    handler: (req, res) => {
      return res(data['GET.LIBRARY.ALL']);
    }
  }
];
