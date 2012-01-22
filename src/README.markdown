# Total Destruction HTML5 game engine

## Building

## The Core

## About Layers

Note that only *Layers* can be rendered to screen. The core renderer only accepts objects that
respond to the *render* method and that at least contains all the properties and methods from the
object *Td.Gfx.Layers.Object*.

So to summarize: Layers can render themselves but can also hold other Layers. The
*Td.Gfx.Layers.Container* object, can be used to nest objects. This is a smilair structue as used
in HTML. An HTML element can contain other objects.

## Renderers


# License and credits
Use it and have fun with it! Comments, cakes and hugs are welcome! Just stick to the license!

Copyright 2010 - 2012, Diederick Lawson - Altovista. Released under the FreeBSD license.
