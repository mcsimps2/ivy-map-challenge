# Ivy Clinicians Take Home Challenge

## Overview
For this take home challenge, you'll be implementing the ability to select multiple hospitals on a map by dragging your 
mouse over an area to create a rectangular selection. Your final solution should end up looking like the following, where
the hospitals are the blue dots and the map is the grid.

![](https://github.com/mcsimps2/ivy-map-challenge/blob/master/docs/demo.gif)

## Time Requirements
This challenge should take under an hour. Please make note of how long it took you to code your solution. 
You will *NOT* be penalized for taking longer than an hour. Rather, we will use that information to determine if we 
need to narrow the scope of the project.

## Instructions

Go ahead and clone the project. Run the following commands in the project root:

```shell
npm install
npm start
```

You should see the following screen on [http://localhost:3000](http://localhost:3000) containing a random placement
of blue dots.

![](https://github.com/mcsimps2/ivy-map-challenge/blob/master/docs/initial-screen.png)

In the file `components/Map.js`, complete the code so that when you click and drag your mouse across the screen,
it places a rectangle on the map that covers your selected area.  The dots inside the rectangle should change color.  
Only one rectangular selection should be allowed at a time.

When you're finished with your solution, share your code with Matt Simpson. You may do this by creating a **private** repo
on GitHub and adding `mcsimps2` to your repo. *Please do not make your repo public.*

Feel free to use StackOverflow or Google.
