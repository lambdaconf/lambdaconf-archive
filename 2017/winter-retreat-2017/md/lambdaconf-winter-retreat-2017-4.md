# [Guide: David Greenberg](https://github.com/lambdaconf/winter-retreat-2017/issues/4)

> state: **open** opened by: **dgrnbrg** on: **8/31/2016**

I&#x27;m David Greenberg, a functional and distributed systems programmer. My passions are data structures, concurrency, and distributed systems, and especially their intersection with functional programming concepts. I take a very relaxed approach to types: I equally enjoy Rust &amp; Clojure, and wrote Clojure professionally for many years. I take a stochastic approach to progamming--I assume everything I write will have bugs, and so I like to think about how to use simulation &amp; generative testing to make my software more robust (as opposed to encoding invariants in types).

I&#x27;ve written a variety of functional libraries, including [a generatively test CRDT library](https://github.com/dgrnbrg/libdistsys), [an asynchronous HTTP server library](https://github.com/dgrnbrg/spiral), [an FPGA DSL for Clojure](https://github.com/dgrnbrg/piplin), and the book [Building Applications on Mesos](http://shop.oreilly.com/product/0636920039952.do).

There&#x27;s two topics I&#x27;m most excited about talking about, but I need your help to fine-tune what we&#x27;ll discuss:
- **Hitchhiker Trees** - Hitchhiker trees are a purely functional and remote I/O optimized variation of fractal trees, which are themselves I/O optimized variations of B+ Trees. We have a [prototypical implementation](https://github.com/datacrypt-project/hitchhiker-tree/) that we could hack on, adding things like distributed GC or alternative indices. We could spend time discussing the various techniques used to make data structures functional, and the various techniques used to make functional data structures fast.
- **Distributed functional programming** - Most functional programming currently exists on a single machine, and relies on garbage collection to ensure that functional data structures can remain efficient. How do we get the same advantages of functional programs when we scale up to dozens or hundreds of machines? We can discuss individual properties of functional programming and which things will work as we scale up. Some concepts we could investigate are monotonicity, idempotency, and multi-actor consistency considerations.

If you&#x27;re interested in other aspects of concurrency, parallelism, and distribution, and their interaction with functional programming, so am I--let&#x27;s spend the day learning!

**If you have other ideas for what I should speak on at the Winter Retreat, please post them below! Vote on ideas by using the thumbs up / thumbs down emojis. Thanks in advance for all of your feedback, and I look forward to being a guide at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-245150095) on: **9/7/2016**

I&#x27;m really excited by the technologies you&#x27;ve mentioned, especially CRDTs. I&#x27;d be very excited about a discussion of &quot;Distributed FP.&quot; I have some experience with Clojure, and am interested in learning Rust. Did I mention I&#x27;m excited about a discussion of CRDTs?

---
> from: [**haroldcarr**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-245319887) on: **9/7/2016**

+1 for Distributed Functional Programming

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-254014029) on: **10/15/2016**

👍 for distributed functional programming.

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-254104773) on: **10/17/2016**

+1 for Distributed Functional Programming. But, would really love if you could talk about that by also taking examples from your book Building Applications on Mesos.  :+1: 

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-256137636) on: **10/25/2016**

Cloud Haskell
Elixir
How the above compare to Clojure and Akka!

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-258040653) on: **11/3/2016**

+1 for Distributed Functional Programming

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-258155262) on: **11/3/2016**

+1 to Distributed Functional Programming

---
> from: [**dgrnbrg**](https://github.com/lambdaconf/winter-retreat-2017/issues/4#issuecomment-259266548) on: **11/8/2016**

Here we go! This is the planned session description:

If you’re coming to the retreat, you probably are interested in FP, if not already a full-blown user of FP and its techniques. Unfortunately, when it comes time to work on systems that scale beyond one machine, many techniques in functional programming no longer seem to be possible. For example, distributed garbage collection isn’t generally available, which makes it difficult to work with immutable data structures across multiple machines. Another issue is function composition—RPC semantics are difficult to get right, and the additional network latency incurred makes many FP design pattens unrealistic in distributed environments.

In this session, we’ll recast various ideas from FP to see their analogies in distributed systems. We will discuss how monotonic functions can offer many of the benefits of pure functions. We’ll look at dependencies and causality: ways our programs express the results of one computation being the input to the next computation, and performant techniques that achieve similar results in distributed systems. We’ll also analyze distributed functional data representations. By deconstructing the things we love most about FP, we’ll see how we can preserve their essence but make them work in distributed environments.

You should be familiar with pseudocode—we won’t be digging into specific languages with large amounts of code, but we will look at general ways to express these ideas. You should come eager to discuss, as we’ll learn best by sharing our thoughts and revelations as we break down FP concepts and see how they can be mapped into the distributed domain.

