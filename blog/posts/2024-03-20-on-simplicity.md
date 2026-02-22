---
title: On Simplicity
date: 2024-03-20
description: Complexity is easy. Simplicity takes work.
---

There's a temptation, in software, to add. Another feature, another abstraction, another layer of indirection.

<!-- more -->

The logic is usually sound in isolation. Each addition has a reason. But the sum of many reasonable additions is often an unreasonable whole.

## The asymmetry

Adding is fast. Removing is slow. You add a feature in a day; untangling it from the codebase takes a week and breaks three other things.

This asymmetry means that, left unchecked, systems accumulate. Codebases grow. Interfaces get busier. What started as a clear concept becomes a cluster of edge cases.

## The practice

Simplicity isn't a natural state — it's something you have to actively maintain. That means:

- Saying no to features that don't carry their weight
- Deleting code that no longer serves a purpose
- Preferring composition over configuration
- Asking "what can we remove?" as often as "what should we add?"

The best work I've done has always involved subtraction. Removing code. Cutting scope. Finding the smaller, cleaner version of the problem.

> Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.

Simple is hard. But it's worth it.
