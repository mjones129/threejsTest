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

## Tristan Update:

Yo!

So I was chatting with GFC Adam about action steps to get this project in front of the lead team and get some feedback on it. GFC is kinda known for moving fast, and I figured the biggest thing standing between us and making these web app projects a reality for GFC is [aphantasia.](https://en.wikipedia.org/wiki/Aphantasia) So I went ahead and threw together a [rough animation](https://youtu.be/GM-NKDObIRY) to help people see what's possible with WebGL.

No interactivity yet, it's just for looks, but hopefully that helps people see the possibilities and applications for this technology. That animation was pitched to the lead creative pastor yesterday (Feb 11), and he really loved the preview. He'll pitch the concept to the rest of the lead team tomorrow (Feb 13) and we'll have a clearer picture of project goals what to expect moving forward.

Basically, this repo is on hold at the moment until we get an official target to aim for. First thoughts were Easter, but it might be too soon to try something. More than likely Christmas 2020 will be a good target for a project like this. Stay tuned!
