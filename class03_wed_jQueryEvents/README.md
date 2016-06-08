# Class 02: jQuery &amp; Events

## Workload discussion

## Code Review
- Sandbox: 15 mins whole class
- Blog App: 15 mins
- Port App: 10 mins

# Yay, events with jQuery!

## Objectives
- Execute event bindings with jQuery ‘on’
- Comprehend when delegation is appropriate; able to configure event bindings using it
- Build dynamic jQuery selector strings
- Use $(document).ready()
- Familiar with [data-* attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) in HTML
- Integrate icon fonts

## Key Concepts
- Connect the concept of events with the DOM
- Understand common browser events
- With jQuery, event listeners should be registered with `.on()`
- Many DOM objects can have events attached
- Events are handled by callback functions
- Understanding ancestry of the DOM, how to traverse to child nodes (grandchild nodes?)
- Tabs are a common page idiom that can be implemented with a little jQuery
- Event handling can be used to override default behavior (like link click, or form submit)
- Chrome Dev Tools can help debug css/js
- Site design includes complimentary good color choices

## Slides

## Mob Coding
Build an app with the following features:
- HTML: Button, 3 &lt;li&gt; elements.
- 'click' event handler that creates a new &lt;li&gt;
- Wrap &lt;li&gt;'s in a &lt;div&gt; and move the 'click' handler to be only on the &lt;div&gt;
- Use delegation to find which &lt;li&gt; was clicked.
- Add an &lt;h2&gt; to the HTML and echo contents of the clicked &lt;li&gt; to that &lt;h2&gt;.

## Know these before lab
You should know these from the reading/sanboxing and/or mob coding:
- How to use .on() directly on specifc DOM elements
- How to use .on() using **event delegation**

## Helpful Resources
 - Event Reference: https://developer.mozilla.org/en-US/docs/Web/Events
 - W3C RFC: http://www.w3.org/TR/DOM-Level-2-Events/events.html
 - jQuery Cheat sheet: http://oscarotero.com/jquery/
 - Color selection help: https://coolors.co
 - Color selection help: http://paletton.com
