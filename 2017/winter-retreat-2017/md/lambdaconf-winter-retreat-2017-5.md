# [Guide: Scott Fleischman](https://github.com/lambdaconf/winter-retreat-2017/issues/5)

> state: **open** opened by: **scott-fleischman** on: **8/31/2016**

Hi! I’m Scott Fleischman. I gave the [Agda from Nothing](https://github.com/scott-fleischman/agda-from-nothing) workshop and the [Types for Ancient Greek](https://github.com/scott-fleischman/greek-grammar) talk at LambdaConf 2016. I love logic, programming and mathematics. These three topics come together marvelously well in type theory, and [Agda](http://wiki.portal.chalmers.se/agda/pmwiki.php) is my favorite language in that domain.

In the comments below are three of my ideas for topics that we could explore during the Winter Retreat.

**If you have ideas for what I should speak on at the Winter Retreat, please post them below! Vote on ideas by using the thumbs up / thumbs down emojis. Thanks in advance for all of your feedback, and I look forward to being a guide at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-243893997) on: **8/31/2016**

1. Learn [Agda](http://wiki.portal.chalmers.se/agda/pmwiki.php) from nothing. I will adjust the material and exercises from my [LambdaConf 2016 workshop](https://github.com/scott-fleischman/agda-from-nothing) to meet your needs and interests. For example:  
   A. Work through the basics of Adga—what is a dependent type, how can we encode invariants in data structures, propositions as types, etc.  
   B. Write dependently-typed programs (that you can run!) using the Haskell FFI. This would require some Haskell knowledge.  
   C. Do proofs from the [Software Foundations](https://www.cis.upenn.edu/~bcpierce/sf/current/index.html) book or similar. See how Agda compares to Coq.  
   D. Something else—you decide!

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-243894427) on: **8/31/2016**

2) Take an in-depth look at the paper [“How to Keep Your Neighbours in Order”](https://personal.cis.strath.ac.uk/conor.mcbride/Pivotal.pdf) by Conor McBride. Here is the abstract.

&gt; I present a datatype-generic treatment of recursive container types whose elements are guaranteed to be stored in increasing order, with the ordering invariant rolled out systematically. Intervals, lists and binary search trees are instances of the generic treatment. On the journey to this treatment, I report a variety of failed experiments and the transferable learning experiences they triggered. I demonstrate that a total element ordering is enough to deliver insertion and flattening algorithms, and show that (with care about the formulation of the types) the implementations remain as usual. Agda’s instance arguments and pattern synonyms maximize the proof search done by the typechecker and minimize the appearance of proofs in program text, often eradicating them entirely. Generalizing to indexed recursive container types, invariants such as size and balance can be expressed in addition to ordering. By way of example, I implement insertion and deletion for 2-3 trees, ensuring both order and balance by the discipline of type checking.

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-243894754) on: **8/31/2016**

3) Explore the concept of ornaments by looking at Conor McBride’s paper [“Ornamental Algebras, Algebraic Ornaments”](http://plv.mpi-sws.org/plerg/papers/mcbride-ornaments.pdf) and Yorick Sijsling’s 2016 thesis [“Generic programming with ornaments and dependent types”](http://sijsling.com/msc-thesis.html). Here is the abstract from McBride’s paper.

&gt; This paper re-examines the presentation of datatypes in dependently typed languages, addressing in particular the issue of what it means for one datatype to be in various ways more informative than another. Informal human observations like ‘lists are natural numbers with extra decoration’ and ‘vectors are lists indexed by length’ are expressed in a first class language of ornaments — presentations of fancy new types based on plain old ones—encompassing both decoration and, in the sense of Tim Freeman and Frank Pfenning (1991), refinement.
&gt; 
&gt; Each ornament adds information, so it comes with a forgetful function from fancy data back to plain, expressible as the fold of its ornamental algebra: lists built from numbers acquire the ‘length’ algebra. Conversely, each algebra for a datatype induces a way to index it—an algebraic ornament. The length algebra for lists induces the construction of the paradigmatic dependent vector types.
&gt; 
&gt; Dependent types thus provide not only a new ‘axis of diversity’—indexing—for data structures, but also new abstractions to manage and exploit that diversity. In the spirit of ‘the new programming’ (McBride &amp; McKinna, 2004), the engineering of coincidence is replaced by the propagation of consequence.

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-243894822) on: **8/31/2016**

4) You decide! Post your ideas below.

---
> from: [**rabbitonweb**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-243920124) on: **8/31/2016**

I just want to say that you Agda talk/workshop was awesome! 

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-244190469) on: **9/1/2016**

I&#x27;d go through the Agda one again. I was at your Agda workshop at LambdaConf but I don&#x27;t use emacs so I got a bit lost. :)

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-244197999) on: **9/1/2016**

@GinBaby Ok sounds great, thanks! Is there anything from the material you would like to see more of? What kinds of Agda programs you would like to explore?

Also, I only use Emacs for Agda. I don&#x27;t really know much about the editor other than the Agda mode keyboard shortcuts. :) With [Aquamacs](http://aquamacs.org/), I don&#x27;t even have to know how to open or save a file—I just use the menus. There are alternatives to Emacs, but they generally don&#x27;t have the quite the same in-Agda experience with all of the goodies.

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-244205524) on: **9/1/2016**

@scott-fleischman Oh, people warned me before I went that it would involve a lot of Emacs, and I tried to keep up with the Atom Agda mode, but it&#x27;s not the same. But no worries, still got plenty out of it.

I have an obvious interest in learning more about the Haskell FFI, but I&#x27;d love to work through proofs and compare Agda and Coq. I will learn some Emacs before the retreat -- this will be great motivation! 

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-245149784) on: **9/7/2016**

Very excited about a &quot;Learn Agda from nothing&quot; workshop. I have only just done intro tutorials in Coq (if that&#x27;s at all related).

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-258040566) on: **11/3/2016**

I am voting for  &quot;Learn Agda from nothing&quot;

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-258154493) on: **11/3/2016**

Agda from nothing, because I know nothing!

---
> from: [**gilligan**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-259230748) on: **11/8/2016**

Agda from nothing! :) It&#x27;s not like there wasn&#x27;t still a ton of time for me to spend on learning more Haskell but Agda is indeed intriguing.

---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-259810026) on: **11/10/2016**

Everyone seems interested in learning Agda from nothing, so I’d like to propose one final vote for my workshop(s) for the winter retreat.

Do you want:
1) Breadth-first Agda from Nothing
2) Depth-first Agda from Nothing

For 1) Breadth-first Agda from Nothing, we would cover several flavors of Agda programs—from the point of view of mathematics, logic and programming. To begin with we would cover basic data types and syntax. We’ll start with boolean functions to get our feet wet and learn our way around Agda and Emacs. From there we would move toward equality and basic natural number theorems. After we’re comfortable with the idea of a proof in Agda, we’ll look at some simple theorems in constructive logic. Finally since Agda a programming language after all, we’ll look at basic data structures and what functional programming looks like in Agda. We’ll touch on FFI with Haskell and actually run a simple Agda program! Time permitting, we will conclude by looking at a binary search tree that is correctly ordered by construction.

For 2) Depth-first Agda from Nothing, we will focus on the idea of data structures with an intrinsic ordering invariant ¹. First, to get used to Agda we will explore basic types for natural numbers, lists and trees, working toward implementing a binary search tree. We will then try a couple different ways of making the binary search tree correct-by-construction with regard to its ordering invariant. Once we have achieved our goal of creating one ordered container structure, we will make it systematic by creating a universe of all ordered container structures. Within this universe we will see what lists, trees, and our binary search tree looks like. Time permitting, we will conclude by implementing a tree with node invariants such as balanced 2-3 trees in our universe. This approach highlights a strength of Agda—embedding DSLs and reasoning about them. 

¹. This follows the outline of Conor McBride’s paper How to Keep Your Neighbors in Order.

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-259883011) on: **11/11/2016**

I&#x27;ll vote for &quot;2) Depth-first&quot;, but will be happy either way.

---
> from: [**alexi21**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-264694370) on: **12/4/2016**

Can I add a vote for 2) as well, thanks
---
> from: [**scott-fleischman**](https://github.com/lambdaconf/winter-retreat-2017/issues/5#issuecomment-264950529) on: **12/5/2016**

# Agda from Nothing: Order in the Types
In this two-hour workshop we will learn Agda from first principles with a focus on ordered data structures. To get used to Agda we will explore basic types for natural numbers, lists and trees, working toward implementing a binary search tree. We will then try a couple different ways of making the binary search tree correct-by-construction with regard to its ordering invariant. Once we have achieved our goal of creating one ordered container structure, we will make it systematic by creating a universe of all ordered container structures. Within this universe we will see what lists, trees, and our binary search tree looks like.

There are minimal prerequisites for this workshop—familiarity with curried functions is perhaps the starting point. The concepts build on one another throughout the talk. The expected takeaway for the first two-thirds is a working experience with binary search trees in a dependently-typed setting. The final third of the workshop ramps up quickly in abstract concepts so the expectation shifts more to _exposure_ to the concepts rather than a detailed understanding of them. The workshop follows the outline of Conor McBride’s paper _How to Keep Your Neighbours in Order_ (2014) [[pdf]](https://personal.cis.strath.ac.uk/conor.mcbride/Pivotal.pdf). The Agda code from the paper is reworked for the needs of the workshop, in particular making the proofs explicit. There will be a mixture of live coding and slides.

The key goals for the workshop are to come away with:

1. A working knowledge of the basics of Agda
2. Experience encoding an invariant in a dependently-typed data structure
3. An sense of the advantages of using _prescriptive_ types over _descriptive_ ones
4. Exposure to the concepts of an Agda program of non-trivial size and complexity

