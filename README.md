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

## Known Issues

If a third-party application dynamically inserts a node with 'n' images, we will make 'n' API calls. This issue will be addressed in future versions. We assume that such cases will not occur for now, and improvements can be made later.
It has been noticed that sometimes the API endpoint for receiving random text breaks and does not work. Currently, we do not fill the 'alt' attributes and leave them blank or as they were. There are no error indicators for users; messages are shown in the browser console instead.
Currently, the constructor of the main class does not receive any configuration. In a production-ready library, this feature should be implemented to allow control and customization of Scanner behavior.


***Please check that [https://random-word-api.herokuapp.com/word](https://random-word-api.herokuapp.com/word?nnumber=2) works before checking Scanner functionality***
***Please write me directly to [nepsha1986@gmail.com](mailto:nepsha1986@gmail.com) if you have any questions.***