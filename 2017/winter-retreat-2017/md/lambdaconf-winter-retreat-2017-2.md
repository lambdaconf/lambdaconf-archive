# [Guide: Alejandro Serrano](https://github.com/lambdaconf/winter-retreat-2017/issues/2)

> state: **open** opened by: **serras** on: **8/30/2016**

I&#x27;m Alejandro Serrano, a PhD student in the area of functional programming, currently working in [Utrecht University](http://www.cs.uu.nl/staff/mena.html). I use Haskell for my daily job, but I also like to explore what it is out there, especially in the world of logic (like Prolog) and functional-logic programming (like Curry), and in the large space of theorem proving. I am a fierce defendant of strong typing, although some days I wake up and think &quot;if only we could have true Lisp macros in Haskell and ML...&quot;.

I am the author of [Beginning Haskell](http://www.apress.com/9781430262503) and have worked in enhancing IDEs for the Haskell world as part of [two Google Summers of Code](http://serras-haskell-gsoc.blogspot.nl/). I have developed several open-source libraries, including a [generalization of regular expressions to arbitrary data types](http://hackage.haskell.org/package/t-regex) and a [Constraint Handling Rules engine](https://git.science.uu.nl/f100183/uchrp/).

As I said above, I am working on a PhD thesis. The topic: better type error diagnosis for domain-specific languages (aka DSLs). Full story short: we love embedding domain specific languages; they really make programmers more productive. However, when the compiler is not happy with what the user of the DSL wrote, the error message it gets is given in terms of the host language. Thus, we break the abstraction barrier: internals of the DSL leak through error messages, and even worse, the user of the DSL needs to know them to understand error messages. During the past years, my supervisor and I have developed a wide range of techniques for dealing with this problem. If you are interested, you can check my [page at DBLP](http://dblp.uni-trier.de/pers/hd/s/Serrano:Alejandro) where all my papers are indexed.

I am happy to present most introductory topics in Haskell, depending on the demand. However, based on my expertise, I would be interested in talking about some of these topics:
- **Techniques for embedding DSLs.** There are manu ways to embed a DSL in Haskell. You can create a combinator language. Use a GADT to get a so-called &quot;initial encoding&quot;. Or arrive to the &quot;final encoding&quot; by means of type classes. Meta-programming also gives you a lot of tools. Furthermore, if your DSL has some notion of sequentially, it makes sense to make it a monad, but how: by hand? using a free monad? using an operational monad?
  
  The idea is to explore the wide range of possibilities in this area. We shall focus on how good each choice works in terms of syntax, analizability of the code (so we can optimize or detect errors at compile-time) and flexibility in interpretations (so we can write the code once but execute them on different contexts).
- **Haskell type system.** As part of my job, I have scrutinized almost all literature related to Haskell (and GHC) type system:
  - The many ways to do polymorphism, from simple parametric polymorphism to higher-rank and impredicative polymorphism.
  - The initial distinction between types and kinds and how it is blurred by data type promotion and kind-in-kind.
  - Type classes, and its &quot;functional&quot; counterpart, type and data families.
    - The differences between flexible, overlapping, undecidable and incoherent instances.
    - Functional dependencies and injectivity annotations.
  - Extending the language to deal with the local reasoning coming from pattern matching on a GADT.
  - How to speak of constraints generically, using the _Constraint_ kind.
  - Boxed and unboxed types and how to write generic functions over those with levity polymorphism.
  
  We can explore together examples of all these features, and argue when and how to use them.
- **Category Theory in Action.** During LambdaConf 2015 I realized that many people (definitely more than I thought!) is interested in category theory. I am definitely not a category theory expert, but rather a category theory user. We can explore the basic notions of category theory: categories, arrows, functors, natural transformations, monads and adjunctions, always keeping an eye at how these notions translate back to functional programming. (Are instances of the Functor class functors?, this kind of questions).
  
  Furthermore, I would like to show the power of category theory with two beautiful constructions. One is how to enhance the performance of a monad, almost for free, by using the Yoneda construction. The other one is how to understand a monad as the composition of two adjunctions.

I am very interested in exploring the ideas underlying Common Lisp: macros, multimethods... they seem like a completely different style of programming! Or in a broader sense, the meta-programming facilities found in many languages: Lisp macros, Elixir meta-programming, Template Haskell, MetaOCaml. We can even rethink some of those and hack a small meta-compiler! I am also willing to explore the world of &quot;reactive&quot; libraries, from React-like libraries like ClojureScript&#x27;s Om, to Purescript&#x27;s Halogen or even .NET Reactive Extensions.

**Of course, if you have any other ideas, feel free to comment below! I&#x27;m sure we will all have a very enjoyable time at LambdaConf Winter Retreat 2017!**


### Comments

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-243363910) on: **8/30/2016**

Or let&#x27;s go crazy and build a web framework based on the idea that links are morphisms in a category of pages! I know some Haskell web libraries such as Servant and Spock for the server and Persistent and Esqueleto for the database part. We just need a category theorist then ;)

---
> from: [**rabbitonweb**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-243843096) on: **8/31/2016**

I don&#x27;t have any ideas, but I&#x27;m just happy you gonna be there :)

---
> from: [**argumatronic**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-243872341) on: **8/31/2016**

I&#x27;m interested in all those, but I would especially like to hear you talk about techniques for embedding DSLs.

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-245147396) on: **9/7/2016**

The more practice I can get with various approaches to meta-programming the better. I have some intro to such in Clojure and Elixir. Would love to see examples in other languages. I&#x27;m also somewhat intrigued by your work with constraints. Is this related to relational programming (like miniKanran)?

I&#x27;m also interested in your proposed Haskell Type System and Category Theory in Action topics. I am a novice at both.

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-245275609) on: **9/7/2016**

Since DSLs seem to be something people like and also something different from other guides, I have sketched a small table of contents of such a talk, to see what people think or would like to add:
- What is an embedded DSL
- Simple combinator libraries
- The difference between syntax and interpretation: shallow vs. deep embeddings
- Initial encodings, including GADT tricks
  - Interpretation as a fold
- Finally tagless encoding
  - Interpretation as class instance or module implementation
- Computational DSLs using &#x60;Applicative&#x60; and &#x60;Monad&#x60;
  - Removing boilerplate using &#x60;Free&#x60; and &#x60;Operational&#x60;
- Encoding binding
  - Higher-Order Abstract Syntax
  - Locally Nameless using the &#x60;unbound&#x60; library
- Meta-programming: Template Haskell and quasi-quotation

I don&#x27;t know if 2 hours would be enough to cover everything! But everything on the above list is everything I know about embedding DSLs, so it is an upper bound ;)

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-245275929) on: **9/7/2016**

I am also open to discuss the contents of the Category Theory in Action talk during one of the afternoons. This is one talk in which I don&#x27;t need a projector, just a {white,black}board. If there is another talk which introduces the basic Category Theory concepts, this could be a good way to continue.

---
> from: [**haroldcarr**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-245317539) on: **9/7/2016**

Hello Alejandro: I would be interested in Category Theory in Action and the Haskell Type System (in that order).

---
> from: [**nmcb**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-245383406) on: **9/7/2016**

Personally? I would benefit and be interested in you doing a _Haskell type system_ talk. Going deep, perhaps compare the system with other languages around? Yes, cat.theory is always interesting, but your  knowledge of Haskell, especially your theoretic level combined with your pragmatism, seems very valuable.

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-246954664) on: **9/14/2016**

Given the interest in the _Haskell type system_ talk, here is a foreseeable table of contents:

**Part 1: the basics**
- Hindley-Damas-Milner type systems
  - Types vs. type schemes
  - Simple checking and inference with algorithm _W_
- Qualified types: what you have at the left of &#x3D;&gt;
  - Type classes and type families
  - Termination: flexible and undecidable instances
  - Choice: overlapping and incoherent instances
  - Improvement: functional dependencies and injectivity annotations
  - Elaboration: dictionaries and coercions
- Higher-kinded types, \* version
- Qualified constructors and pattern matching: GADTs
- Inference with constraints
  - Architectural overview
  - Skolemization, ambiguity and undischargement errors

**Part 2: going crazy with quantification**
- More on kinds
  - Introducing new kinds by data type promotion
  - Reflecting on value level: the &#x60;singletons&#x60; construction
  - Kind polymorphism
  - Unboxed types: # vs *
- Higher-rank and impredicative polymorphism
  - (Un)decidability of these extensions
- Quantifying over constraints: the Constraint kind
  - Programming your own instance search procedure
- Going dependent: _-in-_
  - Value-level vs type/kind/sort-level
  - Levity or representation polymorphism
- Generic programming
  - Describing regular types with generics
  - Generic deriving and default implementations
  - Reflection using &#x60;Typeable&#x60;, &#x60;Dynamic&#x60; and &#x60;Data&#x60;
- Bonus: refinement types with LiquidHaskell

Edit: expand the &quot;generic programming&quot; section
Edit: added singletons and LiquidHaskell

---
> from: [**jdegoes**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-254012887) on: **10/15/2016**

All of these are equally interesting to me, but I&#x27;m slightly biased toward Haskell type system and category theory (especially if the latter gets as far as &quot;real&quot; monads, comonads, etc.).

---
> from: [**rezalesmana**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-254112462) on: **10/17/2016**

DSL would be great to hear. Category Theory is great as well. 

---
> from: [**purefunctions**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-256139775) on: **10/25/2016**

Free and other &#x27;scary&#x27; monads for beginners :)
The many ways to do polymorphism

---
> from: [**ErrorNullPointer**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258041428) on: **11/3/2016**

 Haskell type system would be cool

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258081077) on: **11/3/2016**

Given the input here, I am considering devoting my slot to Haskell Type System. Two hours might be even too little for so much information, though!

If @jdegoes finds it OK, we can arrange a room for speaking about Category Theory in the afternoons/evenings a couple of days. Maybe one day we can discuss the basics (category, functor, natural transformations, monads), and the other day look at the topics of the proposed Category Theory in Action (Yoneda for better performance, monad as composition of adjoints). Then people could join either day.

---
> from: [**LambdaMathematician**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258157324) on: **11/3/2016**

+1 Category theory

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258365999) on: **11/4/2016**

@haroldcarr @rezalesmana @sillypantstoan @mudphone (and any others)
When we speak about &quot;Category Theory&quot;, at what level are we talking about? That would be very helpful in trying to focus the topic.

My current idea is to have a &quot;mini-course&quot; on Category Theory, which should touch at least category, universal constructions (product, sum, terminal and initial objects), functor, natural transformation, adjoint, free-ness, (co-)monads, (co-)algebras, Yoneda lemma. My aim would not be to formally prove all properties, but rather try to discover them by looking at examples in Haskell (and maybe Scala also).

One possibility I discussed with the organizers is to split such a &quot;mini-course&quot; into 4 or 5 small sessions of 30-45 minutes each day, instead of putting everything together into one big talk where people might get lost. What do you think? Any input is welcome :)

---
> from: [**mudphone**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258387417) on: **11/4/2016**

My understanding of Category Theory is limited to getting stuck at the first few chapters of various books on the topic, and watching all of Bartosz Milewski&#x27;s [Category Theory For Programmers playlist](https://www.youtube.com/watch?v&#x3D;I8LbkfSSR58&amp;list&#x3D;PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_). Your suggestion of using Haskell to understand Category Theory sounds helpful to me.

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-258393340) on: **11/4/2016**

As a matter of concepts, I am definitely going to cover much less than Bartosz&#x27;s lectures, given the shorter amount of time. My aim is to understand more ideas like:
- How does the general concept of &quot;monad&quot; and &quot;functor&quot; relate to Haskell&#x27;s &#x60;Monad&#x60; and &#x60;Functor&#x60;.
- How does a natural transformation look like in Haskell? (Hint: it is a polymorphic function)
- How do we model algebraic data types in categorical terms?

---
> from: [**gilligan**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-259237960) on: **11/8/2016**

My vote is definitely for Category Theory. I think CT is something where is such an enormous gain in sitting in the same room so that you can ask questions. Often it is some small detail I get totally stuck with.. 

**anyway**: CT baby! :)

---
> from: [**serras**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-259490417) on: **11/9/2016**

Here is a concrete description of _Category Theory Through Functional Programming_. Any suggestion is welcome, both in the topics and in the way in which they can be explained.

### Category Theory Through Functional Programming

**Language**: snippets will be presented in Haskell and Scala.

**Target Level**: Fire Lubline / Ice Skrig

Functional programming is taking over the world. And with it, categorical thinking is permeating into our code. Notions like functor, monad or free-ness are usual when diving into Haskell or Typelevel Scala. Category theory effectively gives vocabulary for design patterns: the authors of [1](http://www.haskellforall.com/2012/08/the-category-design-pattern.html), [2](http://www.haskellforall.com/2012/09/the-functor-design-pattern.html) and [3](https://www.manning.com/books/functional-and-reactive-domain-modeling) (you should definitely read this book!) make this connection explicit.

In order to take advantage of these concepts, it is useful to take a step back and understand the underlying ideas of Category Theory and how they all fit together. Let me be clear: diving into intrincate mathematical theories is not my goal. I want you to understand Category Theory in a practical way, in relation to programming. This relation is two-way:
- Code provides us many examples of categorical structures,
- Conversely, in many cases we can implement categorical notions [directly inside our favorite programming language](https://hackage.haskell.org/package/base-4.9.0.0/docs/Control-Category.html).

As a consequence, in order to obtain the maximum return for your time investment, you should have an intermediate knowledge of either Haskell or Scala. If you know how to declare a type class or a trait, what a higher-kinded type (or type constructor) is and have ever used a monad, you are ready. Recent versions of the compiler are recommended, for Haskell GHC 8 is the minimum.

Teaching tons of concepts in just one session makes no sense. Ideas need some time to sink before you can effectively build upon them. Thus, our exploration of Category Theory will proceed in daily small pills, of around 45 minutes every day. The (preliminary) list of topics is:
1. Introduction to categories.
2. Simple universal constructions: (co)products, terminal and initial objects.
3. The principle of duality.
4. Functors.
5. Natural transformations.
6. (Co)monads.
7. Adjoints and their relation to (co)monads.
8. Exponentials.
9. Free constructions.
10. (Initial) algebras for a functor.
11. The Yoneda Lemma.
12. Monoidal functors.
---
> from: [**ghost**](https://github.com/lambdaconf/winter-retreat-2017/issues/2#issuecomment-269569896) on: **12/29/2016**

Alejandro, this looks AWESOME. would you recommend attempting to transcribe or implement versions of the code snippets from the talk into Clojure as an exercise? I&#x27;m a little more familiar w type theory than I am w category theory so I could be way off in terms of it&#x27;s relation to lisps, but i&#x27;d be curious for the challenge anyway 
