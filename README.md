# BesTube

Play with the YouTube api. In order to consume the API you will need to register/create your
app on Goolge Dev Console. You can do that by going to https://console.developers.google.com
and in the top right corner there is a dropdown menu, click it and create a new application.

Once the app is created click on `Enable Api` and select `YouTube Data API`. Finally the last
step consists of clicking in the side menu on `Credentials` --> `Create credentials` --> `Api Key`.

Save the new create key in a `.env` file with the format `YOUTUBE_API_KEY=<API_KEY>`.

Hope that helps Melanie:)

### Production

```bash
  $ yarn install
  $ yarn build
  $ yarn start
```

Check `localhost:9000`.

### Development

In development run:

```bash
  $ yarn install
  $ yarn dev
```

Check `localhost:3000`.

### Testing

```
  $ yarn install
  $ yarn test
```
