# file-downloadr :small_red_triangle_down:

A file downloader package top of request :zap:

## Features

- Support Promise and async/ await :fire:
- Capture timeout errors :zap:

## Usage

```javascript
try {
  download(
    "http://example/big-file.zip",
    "/home/dummy/downloads/big-file.zip",
    options
  );
} catch (e) {
  console.log("!! :( ", e);
}
```

Or Promise API

```javascript
download(
  "http://example/big-file.zip",
  "/home/dummy/downloads/big-file.zip",
  options
)
  .then(res => console.log("File downloaded"))
  .catch(error => console.log("Error downloading file"));
```

## Options

- method :string - http method (GET, POST..etc)
- timeout: number - time out in milli-seconds
