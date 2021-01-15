# React Animation On Scroll

React component to animate elements on scroll with [animate.css](https://daneden.github.io/animate.css/).
This library is re-implementation of [dbramwell/react-animate-on-scroll](https://github.com/dbramwell/react-animate-on-scroll).
Re-implemented the old one with react functional components in TypeScript. Also added animate.css@4.0+ support.
Supports server-side rendering and TypeScript.

## [Click to see Demo](https://www.metinarslanturk.com/react-animation-on-scroll)

## Install:

```
npm install react-animation-on-scroll --save
```

or

```
yarn add react-animation-on-scroll
```

**Please be sure to include animate.css (version 4 and higher) in someway in your project**
This can be done in a number of ways, eg:

```
npm install --save animate.css
```

or

```
yarn add animate.css
```

and then importing in your project:

```
import "animate.css/animate.min.css";
```

Or by simply including a link to the file hosted by CDNJS:

```
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
</head>
```

## Most Simple Use:

```
import { AnimationOnScroll } from 'react-animation-on-scroll';
<AnimationOnScroll animateIn="animate__bounceIn">
  <h2>Some Text</h2>
</AnimationOnScroll>
```

## Properties:

**offset** - default 150

The "viewport" is by default 150 pixels from the top and bottom of the screen. When part of an element is within the "viewport", animateIn is triggered. When no part of the element is in the "viewport", animateOut is triggered. This size of the "viewport" can be overridden by setting the offset property.

**animateIn**

Any css animation defined against a class, be it from [animate.css](https://daneden.github.io/animate.css/) or an animation that you have created yourself. The Animation triggers when the element enters the "viewport" (see offset property for more details on this).

**animateOut**

Any css animation defined against a class, be it from [animate.css](https://daneden.github.io/animate.css/) or an animation that you have created yourself. The Animation triggers when the element is leaving the "viewport" (see offset property for more details on this).

**duration** - default 1

Animation duration in seconds.

**initiallyVisible** - default false

Whether the element should be visible to begin with or not. Recomending to set true if you have got server-side rendering.

**delay** - default 0

How long to delay the animation for (in milliseconds) once it enters or leaves the view.

**animateOnce** - default false

Whether the element should only animate once or not.

**style** - default {}

A style object can be assigned to any ScrollAnimation component and will be passed to the rendered dom element. Its probably best to avoid manually setting animationDuration or opacity as the component will modify those attributes.

**scrollableParentSelector**

By default the code checks to see if the element is visible within the window. This can be changed to any other parent element of the ScrollAnimation by adding a css selector pointing to the parent that you wish to use.

**afterAnimatedIn**

Callback function to run once the animateIn animation has completed. Receives the visibility of the element at time of execution.
Example:

```
function(visible) {
  if (visible.inViewport) {
    // Part of the element is in the viewport (the area defined by the offset property)
  } else if (visible.onScreen) {
    // Part of the element is visible on the screen
  } else {
    // Element is no longer visible
  }
}
```

**afterAnimatedOut**

Callback function to run once the animateOut animation has completed. Receives the visibility of the element at time of execution.
Example:

```
function(visible) {
  if (visible.inViewport) {
    // Part of the element is in the viewport (the area defined by the offset property)
  } else if (visible.onScreen) {
    // Part of the element is visible on the screen
  } else {
    // Element is no longer visible
  }
}
```

**animatePreScroll** - default true

By default if a ScrollAnimation is in view as soon as a page loads, then the animation will begin. If you don't want the animation to being until the user scrolls, then set this to false.

Please feel free to contribute or contact from contact@metinarslanturk.com
