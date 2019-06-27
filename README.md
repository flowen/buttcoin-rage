#  Rou Hun's boiler plate

A small starter for static websites. Parcel, PUG, SCSS, PWA, SEO defaults, image-min, 

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd rh-starter/
    yarn dev
    ```

2.  **Open the source code and start editing!**

    Site is now running at `http://localhost:1234`!

#todo
- [ ]  copy plugin to copy robots.txt etc

#some bugs
- [ ]  fix weird url's from pug ([github issue 1](https://github.com/parcel-bundler/parcel/issues/2413) [2](https://github.com/parcel-bundler/parcel/issues/1352))
    - try other directory structure:
        - /src
            - components
                - a component with .js, .scss, .pug
            - pagename
                - a page .pug and includes components
            - static
                - img, svg, audio, video, etc
- [ ]  optimizations from google audit
    - [ ]  https includes for assets (css, js, manifest, icons)
- [ ]  fix service-worker.js (google audit)
    - [ ]  Unable to fetch start URL via service worker.
    - [ ]  Page is not in scope
- [ ]  gzip / brotli doesnt' work??


Currently not using this starter as it has a few too many bugs I don't like to work with.