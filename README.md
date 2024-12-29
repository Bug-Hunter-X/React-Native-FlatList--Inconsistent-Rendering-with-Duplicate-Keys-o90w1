# React Native FlatList: Duplicate Key Issue

This repository demonstrates a common bug in React Native's `FlatList` component: inconsistent rendering due to duplicate keys.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
When using `FlatList`, it's crucial to provide unique keys for each item.  Duplicate keys confuse the rendering process, leading to unpredictable and often incorrect UI updates. This can manifest as items disappearing, appearing in the wrong place, or even app crashes.

## Solution
The solution involves ensuring each item has a unique key.  This usually involves using a unique identifier from your data source. If your data doesn't natively have unique IDs, generate them.

## How to Reproduce
1. Clone this repository.
2. Run `npx react-native run-android` or `npx react-native run-ios`.
3. Observe the inconsistent rendering in the `bug.js` example.
4. Compare with the correct rendering in `bugSolution.js`.

## Key Takeaways
- Always use unique keys with React Native `FlatList`.
-  If you are using dynamic data, consider adding a unique ID field to that data before passing it to `FlatList`.
- If you are using data from an API make sure that the API response contains a unique id for each item.