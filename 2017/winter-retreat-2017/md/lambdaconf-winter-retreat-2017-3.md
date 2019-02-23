# [Guide: Julie Moronuki](https://github.com/lambdaconf/winter-retreat-2017/issues/3)

> state: **open** opened by: **argumatronic** on: **8/31/2016**

Hi, I&#x27;m Julie Moronuki, an author of [Haskell Programming from First Principles](http://haskellbook.com/). I have a background in linguistics and philosophy, including logic, and have been a teacher of all levels for nearly 20 years. My mission has always been to make difficult concepts, whether in German philosophy or X-bar syntax, comprehensible to everyone who wants to learn. I am excited to be a guide for the Winter Retreat this year.

I am relatively new to programming, but I came to love Haskell because of the type system and typeclasses and the pervasive monoids.  My developing interests are centered around natural language processing using typed lambda calculus. 

My first commitment is, and will remain, teaching. To that end, I am working on several projects to improve the documentation-and-examples situation around Haskell, as well as to make some of the underlying concepts of Haskell more accessible.

I have already had some inquiries about Haskell lessons for relative beginners at the Winter Retreat, something I&#x27;d be happy to do. Those lessons could be on foundational concepts (&quot;how do we get from monoids to monads?&quot;) or &quot;how do I make a (fill in the blank) in Haskell?&quot; But I could also plan a workshop on computational semantics! 

In other words, I&#x27;m here to serve you. What do you want to learn and how can I help you get there?

**Please post your suggestions for me below! Vote on ideas by using the thumbs up / thumbs down emojis. Thanks in advance for all of your feedback, and I look forward to being a guide at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-245147871) on: **9/7/2016**

I am a beginner Haskell programmer who has read through several books, and am about a third of the way through the Haskell Book. I am attempting to develop an intuition for working with typed languages, but it&#x27;s slow going for me. Any Haskell sessions focused on teaching would be helpful for me. Also, if sufficiently geared toward beginners, there would be interest from at least one person learning to program.

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-254014013) on: **10/15/2016**

My wife who is going through HaskellBook will also be in attendance, but doesn&#x27;t have a Github account. She&#x27;d be interested in Haskell beginner-friendly content. 

Myself, I&#x27;d lean more toward NLP using lambda calculus. But I&#x27;m most definitely not representative of attendees so don&#x27;t consider that. :)

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-254112165) on: **10/17/2016**

Haskell for beginners sound great. How about building small ecommerce web in Haskell? 

---
> from: [**hirad**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-255613728) on: **10/23/2016**

I&#x27;ve worked my way through Learn You a Haskell, but I&#x27;ve stumbled in practice. Would love to learn a better way to practice my Haskell-fu to a point where I can actually use it. In other words, lessons for relative beginners sound great!

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-256138531) on: **10/25/2016**

Suggested libraries for real-world backend use and related discussions.

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-258040777) on: **11/3/2016**

NLP using lambda calculus would be awesome!

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-258156582) on: **11/3/2016**

I&#x27;d love to learn more foundational concepts of haskell

---
> from: [**ghost**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-258584589) on: **11/5/2016**

Would Lambda NLP be demonstrated in a particular language or strictly theory? very interested in it! but not sure what my engagement w Haskell will be over the retreat. 

---
> from: [**gilligan**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-259234284) on: **11/8/2016**

I would basically enjoy any kind of workshop for developing some non-trivial project.

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-259376614) on: **11/9/2016**

@soth-ing that&#x27;s a good question. it would have depended on what people wanted, but based on people&#x27;s responses here and via other media, i&#x27;m probably not going to do that as a workshop. so maybe we can talk about that during some of the non-workshop time. :)

---
> from: [**alexi21**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-264694087) on: **12/4/2016**

Hi there, I am a Haskell beginner and have been coding in Javascript using Ramda, RX, and other functional patterns for about six months. I have a PhD in philosophy (including German Idealism) and would be interested to hear about how you have used your background to inform your approach to programming. Cheers, Alex
---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-264756174) on: **12/5/2016**

# Applicative and Monadic Parsing (Two Hours)

The &#x60;Applicative&#x60; and &#x60;Monad&#x60; typeclasses allow for function application in the presence of some structure. They are similar in some respects, but they have important differences, differences that are not always well understood. In practice, many people end up using &#x60;Monad&#x60; in places where &#x60;Applicative&#x60; might be more suitable.

It&#x27;s a difference that is perhaps best learned by doing, by using them in real code and comparing what can be done in applicative contexts that cannot be done in monadic contexts, and vice versa. One fun way to do this is through parsing.

We will begin this workshop with a very brief overview of the two typeclasses and a short introduction to parsing in general. We will use two Haskell parsing libraries, &#x60;optparse-applicative&#x60; and (probably) &#x60;trifecta&#x60;, as we explore the practical differences between applicative and monadic contexts. Finally, we will build a small application using &#x60;optparse-applicative&#x60;.  

The workshop will be aimed at people who can read some Haskell syntax and are familiar with the concepts of &#x60;Applicative&#x60; and &#x60;Monad&#x60;, but might not have much experience using them in practical applications. You do not need to already understand parsing to attend, and you do not need to have ever built a whole project in Haskell. By the end of this workshop, you will have! 

- What language? All code will be in Haskell.   
- Who is this for?  People who want to understand &#x60;Applicative&#x60; and &#x60;Monad&#x60;. People who want to learn more about parser combinators. People who have never built an entire application in Haskell before and want to know how to get started doing that. The second hour or so will be focused on a project that uses the parsing libraries we&#x27;ve been exploring and may be of interest even to people who have written programs in Haskell before but have never used &#x60;optparse-applicative&#x60;.
- Level: Somewhere on the border of [Fire Lubline](http://lambdaconf.us/downloads/documents/lambdaconf_slfp.pdf) and [Ice Skrig](http://lambdaconf.us/downloads/documents/lambdaconf_slfp.pdf).


@jdegoes 
---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/3#issuecomment-264756556) on: **12/5/2016**

@alexi21 This is something I would *really* love to talk about, but I&#x27;m not sure how much more interest there would be in such a talk. I&#x27;d be happy to either talk with you about it individually or perhaps do an impromptu short talk if there are other people interested. 
