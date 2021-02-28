[![deploy github pages](https://github.com/drumath2237/babylonjs-editor-webxr-app/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/drumath2237/babylonjs-editor-webxr-app/actions/workflows/deploy-gh-pages.yml)

# BabylonJs Editor WebXR App

## About

BabylonJs EditorでWebXR対応アプリを作るサンプルプロジェクトです。

BabylonJs EditorはUnityのようなGUIエディタ上でシーンを構築し、VSCodeを用いでデバッグできるようなエコシステムを持つプラットフォームです。これを使うことで、開発者は目で確認しながらXR空間を創ることができるだけでなく、pushするだけでWebpackビルドが走り、GitHub PagesによってクロスデバイスなXRアプリがインストール不要で実行できるようになります。

なお本プロジェクトはまだ試行段階にあるため、動作が安定しないことがあります。

## Environment

|Env||
|:--:|:--:|
|BabylonJs Editor|4.0.0(Preview)|
|ビルドシステム|Webpack4|
|Tested Devices|Oculus Quest2, NEXUS 5X|
|Tested Browser|Firefox Reality, Oculus Browser, Chrome for Android, WebXR API Emulator|

## Setup

リポジトリをクローンし、BabylonJs EditorでOpen Workspaceから`workspace.editorworkspace`を指定することでプロジェクトを開くことができます。

**※現時点ではエディタでビルドしたときに`/src/scenes/scene/index.ts`が書き変わってしまうことによりパフォーマンスが極端に低下してしまいます。
WebXRデバイスでデバッグする際はshell上でビルドするようにしてください。**

## Build & Run

### Using BabylonJs Editor

Buildボタンを押した後にPlayボタンを押すことで実行できます。

### Using Terminal

```bash
# build in terminal
npm run build:ci

# run in browser
npm run webserver
```

## Contact

何かございましたら、[こちらのTwitter](https://twitter.com/ninisan_drumath)までご連絡お願いします。
