
### Prepare Project
1. Install nodejs, npm, typescript
   
```bash
brew install node //install command
node -v //check version
npm install -g typescript //install global for your PC (to save disk space)
tsc -v //check version
```
2. Open terminal at root
3. Run below command to download libraries used for development:
```bash
   npm install
```
### Dist Folder
We dont touch the dist folder.
It is automatically generated when we run either below command:
```bash
npm run release //for release mode to github
or
npm run test //for test mode local
```

### Src Folder
Source code of app

```
.
├── application //contain main source code in typescript
│   ├── Environment //define constant for app
│   │   └── index.d.ts
│   ├── core //data object
│   │   ├── datas //reposite
│   │   │   └── todoRepo.ts 
│   │   ├── entities //data POJO
│   │   │   └── todoItem.ts 
│   │   └── use-cases //delete, add, modify POJO, reposite
│   ├── utilities //utility methods
│   │   └── zLog.ts
│   └── views //UI controller, render ui
│       ├── todo //view todo
│       │   ├── todoView.ts  //UI render
│       │   └── todoViewController.ts //Logic
│       └── todoCompleted //view todo completed
│           ├── todoCompletedView.ts  //UI render
│           └── todoCompletedViewController.ts  //Logic
├── assets //images for app
│   ├── imgA.png
│   └── imgB.png
├── index.html  //template for index page
├── index.ts    //main entry point for ts code
├── pages       //sub pages
│   ├── abc.html
│   └── abcde.ts
└── styles.     //styles for pages
    ├── _custom.scss
    └── index.scss
```

### Live view
For debug ts, check css realtime, use below command:
```bash
npm run live
```

### Webpack
Simple Explanation
	https://medium.com/swlh/understand-basic-webpack-from-scratch-6a1976565ae0

- All Scss files in <mark class="hltr-red">styles</mark> folder will be built and copied to dist/styles/style.css
- All Typescript files will be built to js, minify, mangle and copied to dist/js/`[bundle name]`.js
- All Images in <mark class="hltr-red">Assets</mark> folder will be copied to dist/assets
- Index.html will be inject js, css, title then copied to dist/

### Release
1. Run below command to create release version of app
```bash
npm run release
```

2. Copy content inside <mark class="hltr-red">dist</mark> folder to github public reposite 
3. Peace