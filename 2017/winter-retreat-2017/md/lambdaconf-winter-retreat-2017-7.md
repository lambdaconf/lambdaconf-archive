# [Guide: Gabriel Gonzalez](https://github.com/lambdaconf/winter-retreat-2017/issues/7)

> state: **open** opened by: **Gabriel439** on: **9/1/2016**

I&#x27;m probably one of the biggest Haskell fanboys alive: I [blog about Haskell](haskellforall.com) and also maintain several [Haskell packages](https://hackage.haskell.org/user/GabrielGonzalez).  I believe mathematics is the future of programming and nothing delights me more than elegant solutions to practical problems.

The best presentations I give are in subjects that I&#x27;m only just beginning to learn, because I explain things better to others when I approach them with a beginner&#x27;s eyes.  Some candidate subjects that I&#x27;ve just begun learning where I have cool new things to share are:
- APIs for data science
- high-performance lambda calculus evaluators
- high-performance algorithms based on succinct data structures
- game programming
- event sourcing

However, I&#x27;m also happy to revisit topics that I&#x27;ve blogged or presented about before, such as:
- [equational reasoning](http://www.haskellforall.com/2013/12/equational-reasoning.html)
- [the relevance of category theory to programming](http://www.haskellforall.com/2012/08/the-category-design-pattern.html)
- [shell scripting in Haskell](http://www.haskellforall.com/2015/01/use-haskell-for-shell-scripting.html)
- [total functional programming](http://www.haskellforall.com/2016/04/data-is-code.html)
- [Liquid Haskell](http://www.haskellforall.com/2015/12/compile-time-memory-safety-using-liquid.html)
- [&#x60;Applicative&#x60; GUIs](http://www.haskellforall.com/2015/11/interactive-and-composable-charts.html)
- [composable folds](http://www.haskellforall.com/2013/08/composable-streaming-folds.html)

Please suggest any topics you are interested in, even if they are not listed above.


### Comments

---
> from: [**jethrolarson**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-244246840) on: **9/1/2016**

I&#x27;m interested in techniques for doing high performance game programming without loosing the FP goodness.

---
> from: [**pazthor**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-244268345) on: **9/2/2016**

I&#x27;m interesting in _the relevance of category theory to programming_ (I beginner on FP ) . 

---
> from: [**l-d-s**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-244284808) on: **9/2/2016**

I won&#x27;t be attending, but am very interested in your thoughts on APIs for data science.

I&#x27;m a big fan of 
-   the &#x60;dplyr&#x60; and &#x60;tidyr&#x60; interfaces to relational/tabular data in R (which I use very regularly), and
-   the idea of LINQ (which I don&#x27;t use, but AFAIK is extremely close in spirit to GHC&#x27;s monad comprehensions extension).

I&#x27;ve often wondered how &#x60;dplyr&#x60; and &#x60;tidyr&#x60;-like APIs for munging data tables might work in Haskell (especially in &#x60;ghci&#x60; -- most of my work is done interactively or in notebooks).

The biggest difficulty seems to be the one that F#&#x27;s &quot;type providers&quot; aim to solve (&quot;Object-Relational Mapping&quot;, I believe). Could Haskell get something like this without TH or dependent types?

See also: [this Reddit comment](https://www.reddit.com/r/haskell/comments/52s0rx/working_with_data_in_haskell/d7n8m63).

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-244302262) on: **9/2/2016**

I am quite curious about the APIs for data science, personally. 

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-245148452) on: **9/7/2016**

Throwing in my vote for data science and game programming.

---
> from: [**haroldcarr**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-245318587) on: **9/7/2016**

Interested (in the listed order):
- the relevance of category theory to programming
- total functional programming
- high-performance algorithms based on succinct data structures
- composable folds
- shell scripting in Haskell

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-247017046) on: **9/14/2016**

I would really like to hear about event sourcing. It seems like a good match for FP, but I have never had the chance to hear how to mix both successfully in a project.

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-254110942) on: **10/17/2016**

&quot;high-performance algorithms based on succinct data structures&quot; or &quot;event sourcing&quot; is the topic that will be great to learn about. Hopefully can make it to the winter retreat 2017. 

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-256137287) on: **10/25/2016**

Shell scripting in Haskell, especially for those ones that you only look at once in a while and want it easy to be maintainable!

---
> from: [**nomicflux**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-256812264) on: **10/28/2016**

I&#x27;ll put in yet another vote for APIs for data science.

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-258039484) on: **11/3/2016**

I vote for &quot;APIs for data science&quot;

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-258159787) on: **11/3/2016**

+1 Relevance of category theory to programming

---
> from: [**Gabriel439**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-259753039) on: **11/10/2016**

Okay, so the final tally (using [approval voting](https://en.wikipedia.org/wiki/Approval_voting)) is:
- Data science - 12 votes
- Relevance of category theory to programming - 8 votes
- Event sourcing - 6 votes
- Shell scripting - 4 votes
- Game programming - 3 votes
- Succinct data structures - 3 votes
- Total functional programming - 2 votes
- Composable folds - 2 votes

I&#x27;ve been informed that I can split the 2 hour session into several sessions so what I will do is:
- 1 hour session on &quot;relevance of category theory to programming&quot;
- 1 hour session on &quot;data science APIs&quot;

I feel that these two topics complement each other nicely because I would like to tie in data science APIs to category theory anyway

If nobody objects then I&#x27;ll proceed to write up the descriptions for those two sessions

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-259768934) on: **11/10/2016**

That sounds good Gabriel!

Would you also be available outside of these talks to guide us on /  talk about shell scripting? I’m interested in using Haskell for shell scripting and related areas.

From: Gabriel Gonzalez [mailto:notifications@github.com]
Sent: Thursday, November 10, 2016 9:27 AM
To: lambdaconf/winter-retreat-2017 winter-retreat-2017@noreply.github.com
Cc: Siva Jayaraman siva@virtuosic.net; Comment comment@noreply.github.com
Subject: Re: [lambdaconf/winter-retreat-2017] Guide: Gabriel Gonzalez (#7)

Okay, so the final tally (using approval votinghttps://en.wikipedia.org/wiki/Approval_voting) is:
-   Data science - 12 votes
-   Relevance of category theory to programming - 8 votes
-   Event sourcing - 6 votes
-   Shell scripting - 4 votes
-   Game programming - 3 votes
-   Succinct data structures - 3 votes
-   Total functional programming - 2 votes
-   Composable folds - 2 votes

I&#x27;ve been informed that I can split the 2 hour session into several sessions so what I will do is:
-   1 hour session on &quot;relevance of category theory to programming&quot;
-   1 hour session on &quot;data science APIs&quot;

I feel that these two topics complement each other nicely because I would like to tie in data science APIs to category theory anyway

If nobody objects then I&#x27;ll proceed to write up the descriptions for those two sessions

—
You are receiving this because you commented.
Reply to this email directly, view it on GitHubhttps://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-259753039, or mute the threadhttps://github.com/notifications/unsubscribe-auth/AV_jD1H6HbInjBsdsL2lawea3NLWFxqsks5q81PpgaJpZM4JzJk9.

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-259802621) on: **11/10/2016**

It seems that I (#2) will also talk about category theory, but as an introductory course. Maybe we can arrange it in such a way that people get the most from both your talk and my course: ensuring that I cover any notion that you have as prerequisite for your talk, showing the relevance of CT on the last day, and that kind of things.

---
> from: [**Gabriel439**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-260196894) on: **11/13/2016**

My talk focuses more on the relevance and less on advanced concepts.  I doubt I will cover anything fancier than categories/monoids, functors, and monads.  I will be covering things like how to use category theory to organize proofs and how to simplify APIs and software architecture.  You can get an idea of what the first talk will about by reading these posts:
- [Equational reasoning at scale](http://www.haskellforall.com/2014/07/equational-reasoning-at-scale.html)
- [Scalable program architectures](http://www.haskellforall.com/2014/04/scalable-program-architectures.html)

However, I would like to keep the talk self-contained

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-260275280) on: **11/14/2016**

That sounds great! I completely understand that you want to keep it self-contained. But I still think that the schedule can be arranged so that people who are not as familiar with CT can go to the introduction and then have a better base to understand your talk.

---
> from: [**Gabriel439**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-264670170) on: **12/3/2016**

Alright, so the final formal descriptions will be:

# Session 1 - Applied category theory and abstract algebra (60 minutes)

The Haskell programming language resembles &quot;executable math&quot; and this mathematical connection challenges us to rethink how we organize our code.  We can tackle software complexity by reusing **standard interfaces** that originate in the fields of category theory and abstract algebra.  These interfaces improve code reuse for end-users, and also simplify correctness proofs for library authors.

You should attend this session if you&#x27;ve ever pondered questions such as:

* &quot;What is the point of category theory?&quot;
* &quot;Can correctness proofs scale to larger software projects?&quot;
* &quot;What is the connection between math and programming?&quot;

This session assumes basic Haskell programming literacy (specifically familiarity with type classes) but does not assume a mathematical background so you don&#x27;t have to know any category theory.  I will use Haskell code to motivate and explain all concepts.  All examples will be real code that compiles and there won&#x27;t be any mathematical notation, category theory diagrams, or pseudo-code.

By the end of this session you should understand how to better apply these standard mathematical interfaces in your own code and also understand basic techniques for scaling correctness proofs.
 
# Session 2 - Data science APIs in Haskell (60 minutes)

Data science is one programming area where Haskell&#x27;s data-driven approach should be a natural fit but hasn&#x27;t quite taken off just yet.  However, the language has recently made several leaps and bounds in this area and most of the lower-level machinery is there, although perhaps not as slick as their counterparts in more mature languages.

This session surveys the existing ecosystem of libraries and tools in order to offer some suggestions for how we might be able to improve upon the user experience.  This builds upon my first &quot;Applied category theory and abstract algebra&quot; session by taking inspiration from mathematics to design user-friendly interfaces.  However, the other session is not necessarily a prerequisite and familiarity with Haskell&#x27;s [Typeclassopedia](https://wiki.haskell.org/Typeclassopedia) would also suffice to follow along.

You should attend this session if you are interested in using Haskell for data science or you are interested in authoring a library or tool of your own.  By the end of this session, you should be better equipped to use Haskell for small-scale data science (but not necessarily big data).

cc: @jdegoes 
---
> from: [**alexi21**](https://github.com/lambdaconf/winter-retreat-2017/issues/7#issuecomment-264694266) on: **12/4/2016**

 Sounds great, looking forward to it
