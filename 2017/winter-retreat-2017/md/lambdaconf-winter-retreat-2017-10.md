# [Guide: Daniel Spiewak](https://github.com/lambdaconf/winter-retreat-2017/issues/10)

> state: **open** opened by: **djspiewak** on: **9/28/2016**

Hi, I&#x27;m Daniel Spiewak.  I… do a lot of Scala stuff.  I&#x27;ve been using Scala for almost exactly 10 years now, and have been on my FP journey for almost exactly as long.  Along the way I&#x27;ve worked in academia, learned a bunch of other random languages, pioneered algorithms and data structures, and acquired far more knowledge than I ever wanted on the topic of achieving performance on the JVM.

In more recent years, I&#x27;ve been strongly interested by the problem of building scalable abstractions.  In my view, an abstraction that imposes a serious performance cost (for some problem-specific definition of &quot;serious&quot;) is not a useful abstraction.  Interesting, maybe, but not useful.  But at the same time, higher-order abstractions are incredibly helpful in structuring reasonable software for solving complex problems.  My interest is in having my cake and eating it too.  I&#x27;m never happier than when I&#x27;m writing incredibly messy, ugly, imperative code that supports a pure, lawful and safe abstraction with extremely high performance.

In less recent years, I&#x27;ve worked extensively in distributed systems at scale, parsing algorithms, compiler design, type theory, theory of computation, attribute grammars, distributed real-time optimistic concurrency, database design and implementation, stochastic modeling and optimization of video games, functional data structures, and even UI design and framework implementation.  I&#x27;m still interested in basically all of these things, I&#x27;m just not working on them as much of late.

I&#x27;m happy to present on any of these topics, or other things that I&#x27;ve completely forgotten about.  Off the complete top of my head, some ideas that might be cool:
- **Functional Concurrency**.  A deep dive into the &#x60;Task&#x60; monad&#x27;s motivation and implementation, with a taste of all the amazing things we can build on top of this primitive.
- **Parsing with Derivatives**.  Derivative parsing has had a (well deserved!) resurgence of interest lately, coinciding with the discovery that it is in fact O(n^3) with low constant factors, making it easily the simplest and most elegant practical generalized parsing algorithm.
- **Ideal Functional Streaming**.  Describing a pie-in-the-sky ideal pure functional abstraction for performing streaming computation and modeling real-world distributed systems in a lawful and tractable fashion.

Or, you know… other stuff.

**Please post your suggestions for me below! Vote on ideas by using the thumbs up / thumbs down emojis. Thanks in advance for all of your feedback, and I look forward to being a guide at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**ShaneDelmore**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-250375767) on: **9/29/2016**

Task, parsing, Emm, FS2, general good practices for code organization in FP apps for those coming from an OO background. 

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-254014301) on: **10/15/2016**

Ideal Functional Streaming or Parsing with Derivatives.

Or ideally, both. That is, show the development of a simple (not production) streaming library which is then used to implement parsing with derivatives.

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-254014315) on: **10/15/2016**

However I suspect Task might have broader appeal. 😄 

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-254105653) on: **10/17/2016**

Functional Concurrency or Ideal Functional Streaming :D

---
> from: [**dcsobral**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-255655992) on: **10/24/2016**

I&#x27;m a sucker for parsers, so sign me in for that! :)

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-258037439) on: **11/3/2016**

Parsers would be awesome! I would definitely attend that.

---
> from: [**djspiewak**](https://github.com/lambdaconf/winter-retreat-2017/issues/10#issuecomment-269713045) on: **12/30/2016**

## Primary: Functional Async on the JVM

In this talk, we will take a clean-slate approach to designing a reasonable abstraction for async and parallel functional programming in Scala.  We will examine some of the formal and informal foundations for such abstractions, and pay special attention to the unique and fundamental constraints imposed on us by the JVM.  We&#x27;ll look at not only how to derive and implement this stuff ourselves, from scratch, for fun and profit, but also how our unicorn solution compares to the various solutions available in Scala today.

Bring a laptop!  If you enjoy following along as your &quot;speaker&quot; stumbles through live-coding and things that don&#x27;t compile because he forgot punctuation, you&#x27;re in for a treat.  Alternatively, that laptop works just as well as a means of distraction from the disaster you accidentally walked into.

**Languages**: Scala, with a *touch* of Haskell and Scheme

## Secondary: Fun with Parsing

This talk will take a step back and look at parsing as an abstract field.  We will walk through the conceptual weeds that lead us to various algorithms and implementations, ideas both good and bad, until we finally find ourselves rethinking things with an exciting new frontier algorithm: derivative parsing.  This talk is less about functional programming and more about &quot;cool algorithms and shiny fun problems&quot;.

We&#x27;re going to cover a lot of conceptual ground here.  If it works the way I hope, you should all come away with a pretty solid understanding of *every* parsing algorithm in existence.  If it doesn&#x27;t work, uh… you may just come away very very confused through no fault of your own.  Which will it be?  Let&#x27;s find out together!

**Languages**: Whiteboard
