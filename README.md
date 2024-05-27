# Scanner
Scanner performs operations on DOM nodes within an HTML document. The primary functionality of the script includes appending actions to images and generating alternative text (alt text) for them.

## Development

To start development mode, please run the following npm command in the command line:

```bash
npm run dev
```

After running this command, you will see a dummy website with Scanner applied.

The playground folder contains dummy web pages that can be used for test-running Scanner functionality.
To test the script for a specific case, you can copy an HTML template to the playground folder and add <script type="module" src="/src/main.ts"></script> at the bottom of the HTML page.
After that, you should add an npm command in package.json:
```npm
    "dev:$webpage-name": "vite --open playground/$webpage-name/index.html"
```

Currently, two web pages are available for development/testing:

```npm
  "dev:health": "vite --open playground/health/index.html",
  "dev:wedding": "vite --open playground/wedding/index.html"
```

## Build

Running ``npm run build`` will create a build version of the Scanner in the ``dist`` folder. 

To add it to your website, you can copy ``scanner.umd.js`` to your project. You will also need to grab ``scanner.css`` from ``dist``.

To initialize Scanner, add ```<script>new Scanner()<script>``` after scripts and styles are included.

```html
<html>
    <head>
        ...
        <link href="./css/scanner.css" rel="stylesheet">
    </head>

    <body>
        ...
        <script src="js/scanner.umd.js"></script>
        <script>
          new Scanner()
        </script>
    </body>
</html>
```


Please write me directly to [nepsha1986@gmail.com](mailto:nepsha1986@gmail.com) if you have any questions.