#Javascript std objects prototype checker

1. In Chrome, click Bookmarks->Bookmark Manager.
2. You should see a new tab with the bookmarks and folders listed.
3. Select the "Bookmarks Tab" folder on the left.
4. Click the "Organize" link, then "Add Page" in the drop down.
5. You should see two input fields. Type the name of the bookmark you would like (i.e., Prototyper Launcher) in the first field.
6. Paste the javascript code below into the second field.

        javascript: (function () {var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://raw.github.com/nurikk/prototyper/master/prototyper.js');document.body.appendChild(jsCode);}());
