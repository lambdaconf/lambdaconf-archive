# [Guide: John A. De Goes](https://github.com/lambdaconf/winter-retreat-2017/issues/1)

> state: **open** opened by: **jdegoes** on: **8/29/2016**

I&#x27;m John A. De Goes, an advanced functional programmer who currently works with Scala and PureScript, with an occasional bit of Haskell. I love clean solutions, static types, and composing large programs from smaller ones in a way that embraces composable and equational reasoning.

I&#x27;ve written many open source functional libraries, including [purescript-aff](http://github.com/slamdata/purescript-aff), [purescript-io](http://github.com/slamdata/purescript-io), [purescript-mockfree](http://github.com/slamdata/purescript-mockfree), and portions of [Quasar Analytics](http://github.com/quasar-analytics/quasar).

I am happy to present or lead workshops on a wide range of topics, based on demand. Currently, I&#x27;m most interested in the following subjects:
- **Post-Free**. Testing, mocking, analysis, and optimization all benefit from the Free monad approach, but Free itself is just one constrained example of something much more general purpose: a reified model of program computation. If you move beyond Free, you open up the door to modeling parallel and semantic computation, program failure, distributed computation, and many other constructs in a way that provides all the benefits of Free but to more than just purely sequential computation.
- **Incremental UIs**. React and FRP are both examples of new ways of thinking about user-interfaces which are easier to reason about than the alternatives. Yet I think more fundamental and performant than either is a user-interface paradigm built on an incremental model of computation. With type systems like PureScript, we may finally have the ability to express such a model in a type safe way that has an efficient implementation.

I&#x27;m also interested in hacking on a PureScript super-compiler based on partial evaluation, building a web service DSL in Scala or PureScript based on invertible, free applicative parsers, hacking on a Dotty-based FP library for Scala, and working on a dependency or build tool for PureScript based on free arrows or something less powerful.

**If you have ideas for what I should speak on at the Winter Retreat, please post them below! Vote on ideas by using the thumbs up / thumbs down emojis. Thanks in advance for all of your feedback, and I look forward to being a guide at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-244509051) on: **9/2/2016**

OK, I guess I&#x27;m first. I&#x27;d like to hear about incremental UIs. I don&#x27;t know much about that topic at all, but it sounds pretty cool. 

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-245145565) on: **9/7/2016**

PureScript (FP in the browser), Quasar Analytics (I&#x27;m currently working on a lot of data parsing and analytics), and Incremental UIs (again, more FP in the browser, I&#x27;m currently using Reagent) sound interesting to me!

---
> from: [**haroldcarr**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-245320311) on: **9/7/2016**

+1 for Post Free.

---
> from: [**ShaneDelmore**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-247219467) on: **9/15/2016**

A dotty based FP library for Scala would be fun. I would also be interested in working on a web service dsl as I have recently been interested in how I could better use types to build documentation of the types of responses a web service can return. 

I wonder how close Scala could get to the sort of guarantees that can be made in a fully DP web server like https://github.com/arianvp/servis ?

---
> from: [**philotimos**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-248495575) on: **9/21/2016**

I&#x27;d love to hear more about the FP in Quasar, especially after seeing @extempore2&#x27;s posts on Twitter.  I&#x27;d also very interested in exploring Post-Free and how to transition a code base to these patterns, especially after coming across raulraja&#x27;s Run Wild, Run Free presentation [https://speakerdeck.com/raulraja/run-wild-run-free].

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-254110635) on: **10/17/2016**

Post-Free and Quasar Analytics would be great. Looking forward to those topics. 

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-256139996) on: **10/25/2016**

Something on why purescript vs GHCjs or Elm

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-258041570) on: **11/3/2016**

I am voting for incremental UIs. 

---
> from: [**gilligan**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-259238235) on: **11/8/2016**

I&#x27;m interested in purescript.

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-264663441) on: **12/3/2016**

## Primary: Beyond Free Monads

Free monads and free applicatives have proven an incredibly useful tool in repertoire of the functional programmer: they separate concerns, encourage denotational semantics for program specification, allow easy and type-safe mocking of purely functional code, and allow dynamic introspection and optimization.

Despite these benefits, free monads are notoriously constrained: by themselves, they cannot handle parallelism (only sequentiality), and because they provide only a monad, richer structures (such as monads that fail, or monads that support alternation) cannot be expressed without crude hacks that limit composability and expressiveness.

In this session, John A. De Goes shows how the free monad can be deconstructed for its individual features, and then rebuilt using a more powerful technique that enables more extensibility. The resulting structure — no longer technically a &quot;free monad&quot; — allows reification of as few or as many aspects of computation as are necessary to model the problem domain.

After the session, attendees will know how to augment their existing free programs to add parallelism, racing, failure, and other aspects of computation as required by their problem. In addition, through this thorough deconstruction and reconstruction of the free monad, attendees will have a very deep understanding of reified computation and why the free monad has the structure and limitations it does.

**Languages**: Code snippets will be presented in both Scala and PureScript.

**Target Level**: [Ice Skrig](http://lambdaconf.us/downloads/documents/lambdaconf_slfp.pdf)

## Bonus: Incremental UIs in PureScript

In this lightning presentation, explore a foundation for incremental computation for user-interfaces, and how development of such a model would enable efficient, declarative, mockable user-interface logic that cleanly separates business concerns from user-interface concerns.

**Languages**: Code snippets will be presented in PureScript.

**Target Level**: [Ice Skrig](http://lambdaconf.us/downloads/documents/lambdaconf_slfp.pdf)

## Bonus: Purely Functional Actors

In this lightning presentation, explore a purely functional model for actors that provides high-composability, high-flexibility, and complete type safety in actor request / response, while supporting purely-functional effects in IO, MTL or Free styles.

**Languages**: Code snippets will be presented in both Scala and PureScript.

**Target Level**: [Fire Lubline](http://lambdaconf.us/downloads/documents/lambdaconf_slfp.pdf)
---
> from: [**ghost**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-269557607) on: **12/28/2016**

Hey John, I&#x27;m thinking ahead to adapting some presentations into Clojure exercises in case everyone goes out skiing❄️ ❄️ 🌁 ❄️ 🌁 ❄️ 🌁 ❄️ 🌁 ❄️ -- Even if it was just translating Scala or Purescript code directly from your slides. Do you think this sounds like a rewarding exercise? I&#x27;m open to any ideas. My logic &amp; philosophy grasp is around Fire Lubline, but my coding is still quite Keramik. 
---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-269558345) on: **12/28/2016**

@soth-ing This sounds awesome and would make my talks more accessible. 👍 I should have everything mostly together in another week. Anything in particular you want to learn at the retreat, btw?
---
> from: [**ghost**](https://github.com/lambdaconf/winter-retreat-2017/issues/1#issuecomment-269835776) on: **12/30/2016**

Just hoping to boost my practical understanding. Would love to code as much as possible. Been thinking a lot about composite functions &amp; macros for order of operations and parsing expressions in Clojure, which will be spurred nicely by some of the category theory seminars. 

If you have any leads about deconstructing &amp; rebuilding monads in a more lisp-like syntax, I would certainly do my best to put them to good use 😺 (am currently reading tutorials for org.clojure/algo.monads and getting my thoughts more toward cat theory and less toward type theory &amp; lambda calc)
