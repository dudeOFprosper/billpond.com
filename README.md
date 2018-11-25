# billpond.com

Link to website here: https://dudeofprosper.github.io/billpond.com/

This is the repository for my personal website! The structure of the repository was based on the [create-react-app](https://github.com/facebook/create-react-app). The main goal of the site is to give myself somewhere to play with different code practices and host my resume online!

It is built with: 
* React
    * Helps breakup the website into smaller sections, making debugging and organization much easier overall.
* Aphrodite
    * Aphrodite may not be the most perfect fit for the type of site I am building, but I wanted to try something new!

Stucture of the repo: 
- **/src folder**: Top layer for all of the code itself
    * **Components folder**: List of react components that are used within the app. Right now, they are all used in App.js
    * **Images folder**: folder to hold all of the image files for the site
    * **StyleObjects folder**: Whenever we need to include a style object in more than one component, we can add it here. As of now, only globalStyles object is needed to be included in multiple locations.

    - **App.js**: Top Component for the whole website. Includes a bunch of components from /components to make the site what is is!
    - **App.test.js**: Test file for App.js
    - **index.css**: General CSS for the site. Useful for adding rules that certainly need to hold true for the whole webpage.
    - **index.js**: Entry point for the React app.

Music that helped create this website: 
* [S Carey](https://open.spotify.com/artist/2LSJrlndCuTpdEluvYHc2E)
* [Sufjan Stevens](https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c)
* [Volcano Choir](https://open.spotify.com/artist/6gAtOqhriLzOzb3Qqmg5kO)
