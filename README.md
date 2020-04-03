# threejsTest
Testing repo for creating an interactive threejs web and mobile experience.

## To run this, you'll need a few things:

-[Node.js](https://nodejs.org/en/) (version 13.7 or later)

-That's pretty much it.

## Instructions for running locally:

1. `cd` into a parent directory where you want to install the site
2. `git clone https://github.com/mjones129/threejsTest.git`
3. `cd threejsTest`
4. install dependencies by running `npm install`
5. run the local server `DEBUG=threejsTest:* npm start`
6. access the site by opening a browser and hitting `localhost:3000`


# TODO:

-~~Take the up and down arrow functionality from OrbitControls.js and apply it to a scroll event (onscroll or wheel?)~~

-Apply animated caustics material to objects in the scene

[Caustics Demo](https://threejs.org/examples/#webgl_loader_nodes) | [Caustics Source Code](https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_nodes.html)

-Smooth camera movement on scroll

-Fade up/animate text on load (part of threejs scene, not HTML overlay)

-Use camera.position.y value to trigger animations all along the page

