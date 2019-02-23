# [Guide: Chris Allen](https://github.com/lambdaconf/winter-retreat-2017/issues/8)

> state: **open** opened by: **bitemyapp** on: **9/1/2016**

I&#x27;m Chris Allen, an author of Haskell Programming from First Principles, commonly known as the [haskell book](http://haskellbook.com). I&#x27;m an uneducated working programmer that got tired of unnecessary trade-offs between types and expressiveness.

I originally started teaching so that I could spin up coworkers on Haskell, but found teaching itself to be more energizing than writing code.

Past topics I&#x27;ve covered in some way include:
- [lambda calculus, expressions, types, polymorphism, typeclasses, higher kinded types, functor/applicative/monad, foldable/traversable, reader, state, monad transformers, benchmarking and profiling, laziness, IO, and more](http://haskellbook.com)
- [Yesod and Persistent in practice](https://www.youtube.com/watch?v&#x3D;uYXX1t3GrsE) (I use these at work)
- Rank N Types (I gave a talk on this at LC 16 and really enjoyed it)
- [Instance-local functional dependencies](https://github.com/bitemyapp/buttress/blob/master/src/Buttress/Time.hs)
- Practical applications of type families in Haskell (mono-traversable, Persistent, and stripe-haskell come to mind)

Topics I don&#x27;t have much practice teaching with but would be happy to explore with someone include:
- Servant
- GHCJS (e.g. https://github.com/bitemyapp/ghcjs-starter-project )
- Parsing/tagging parts of speech (Such as with [Chatter](https://www.stackage.org/package/chatter))

I am excited to be a guide at the LambdaConf Winter Retreat! I&#x27;m not stuck on anything in this list, so if you have requests, please tell me as soon as possible!

Edit:

### Final talk description

Hello everyone! I&#x27;m known primarily for the book [Haskell Programming from First Principles](http://haskellbook.com) and for some free Haskell tutorials and guides. The material of my presentation at the winter retreat will be based on my upcoming book named [Haskell Almanac](http://lorepub.com/product/cookbook). The content will be focused on intermediate topics which are commonly needed in industry software projects. Think &quot;web applications&quot;, except I may not devote much actual time to a web framework, but rather, the peripheral dependencies of a Haskell web application.

It is safe to assume that you should have the basics of Haskell down to get the full value of this lesson! The first 2/3s or 3/4s of the [Haskell Book](http://haskellbook.com) is a good baseline for what you should know. Remember that merely reading the material isn&#x27;t sufficient, you will need to have done the exercises. If you&#x27;re already using Haskell productively and can sling things like monad transformers without too much comfort, you probably do not need the book although some advanced readers have enjoyed the insights it offers.


### Comments

---
> from: [**bitemyapp**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-245054830) on: **9/6/2016**

Requests so far have been:
- Web apps
- streaming libraries (machines, conduit, pipes)
- event sourcing
- &#x60;Data.ByteString.Lazy&#x60; and &#x60;Builder&#x60;
- &#x60;monad-control&#x60;

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-245148217) on: **9/7/2016**

I&#x27;d also be interested in learning about building web apps. Doing so with Yesod and Persistent, or GHCJS sounds fun!

---
> from: [**rabbitonweb**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-245278795) on: **9/7/2016**

Yeah, Chris :) !! For me you can talk about anything, I&#x27;m all ears :)

---
> from: [**haroldcarr**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-245319252) on: **9/7/2016**

Interested in (in listed order):
- Practical applications of type families in Haskell
- Rank N Types
- Instance-local functional dependencies

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-245675098) on: **9/8/2016**

My vote: Workshop on using both type families and functional dependencies, and showing how different scenarios benefit from either.

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-247581269) on: **9/16/2016**

+1 to @jdegoes 
I would love hearing about the interplay of type classes, open and closed type and data families, associated types, functional dependencies and injectivity annotations. They all look similar, but each of them is tricky in its own way.

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-254106713) on: **10/17/2016**

web apps with event sourcing would be great

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-256136734) on: **10/25/2016**

GHCjs, and functional front-end in general

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-258039296) on: **11/3/2016**

+1 to @haroldcarr 

I second his vote.

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-258153523) on: **11/3/2016**

+1 to lambda calculus, expressions, types, polymorphism, typeclasses, higher kinded types, functor/applicative/monad, foldable/traversable, reader, state, monad transformers, benchmarking and profiling, laziness, IO, and more

---
> from: [**bitemyapp**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-258301813) on: **11/3/2016**

For anyone wanting rank n types: https://www.youtube.com/watch?v&#x3D;k0cZe0LVFI4

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-258436305) on: **11/4/2016**

@bitemyapp Do you have the slides/code from the talk above? The screen isn&#x27;t that observable in the video

---
> from: [**bitemyapp**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-258507186) on: **11/4/2016**

@emptyslot 

https://github.com/bitemyapp/presentations/blob/master/rank_n_types_talk/rankn.pdf

https://github.com/bitemyapp/presentations/blob/master/rank_n_types_talk/tuple.hs

https://github.com/bitemyapp/presentations/blob/master/rank_n_types_talk/ranks.hs

---
> from: [**gilligan**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-259227879) on: **11/8/2016**

&gt; Servant

Personally I would be very interested in developing some small servant project. I would possibly consider the fact that you don&#x27;t know Servant that well as a bonus because that way I could see how you explore new Haskell libraries/frameworks.

So developing a small servant app ideally with some tiny frontend part would be great for me. Maybe not thrilling as some of the fancy topics mentioned here but anyway.. ;)

---
> from: [**alexi21**](https://github.com/lambdaconf/winter-retreat-2017/issues/8#issuecomment-264694212) on: **12/4/2016**

My work is all web applications so anything relating to that would be great.
