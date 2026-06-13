/**
 * CSES Problem Set → LeetCode Mapping
 * Full mapping for all ~300 CSES problems across all categories.
 * Each entry maps: CSES Task ID → { name, category, cses_url, leetcode[] }
 *
 * Generated from: https://cses.fi/problemset/list/
 */

const csesLeetCodeMapping = {

  // ─────────────────────────────────────────────
  // INTRODUCTORY PROBLEMS
  // ─────────────────────────────────────────────

  "1068": {
    name: "Weird Algorithm",
    category: "Simulation (Collatz Conjecture)",
    cses_url: "https://cses.fi/problemset/task/1068",
    leetcode: [
      { name: "Happy Number", url: "https://leetcode.com/problems/happy-number/" },
      { name: "Number of Steps to Reduce a Number to Zero", url: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/" },
      { name: "Integer Replacement", url: "https://leetcode.com/problems/integer-replacement/" },
      { name: "Count Operations to Obtain Zero", url: "https://leetcode.com/problems/count-operations-to-obtain-zero/" },
    ]
  },
  "1083": {
    name: "Missing Number",
    category: "Array – Missing Element",
    cses_url: "https://cses.fi/problemset/task/1083",
    leetcode: [
      { name: "Missing Number", url: "https://leetcode.com/problems/missing-number/" },
      { name: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/" },
      { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
      { name: "Set Mismatch", url: "https://leetcode.com/problems/set-mismatch/" },
    ]
  },
  "1069": {
    name: "Repetitions",
    category: "Array – Max Consecutive Run",
    cses_url: "https://cses.fi/problemset/task/1069",
    leetcode: [
      { name: "Max Consecutive Ones", url: "https://leetcode.com/problems/max-consecutive-ones/" },
      { name: "Consecutive Characters", url: "https://leetcode.com/problems/consecutive-characters/" },
      { name: "Max Consecutive Ones III", url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
      { name: "Longest Subarray of 1s After Deleting One Element", url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/" },
    ]
  },
  "1094": {
    name: "Increasing Array",
    category: "Greedy – Make Array Non-Decreasing",
    cses_url: "https://cses.fi/problemset/task/1094",
    leetcode: [
      { name: "Non-decreasing Array", url: "https://leetcode.com/problems/non-decreasing-array/" },
      { name: "Minimum Time to Make Rope Colorful", url: "https://leetcode.com/problems/minimum-time-to-make-rope-colorful/" },
      { name: "Steps to Make Array Non-decreasing", url: "https://leetcode.com/problems/steps-to-make-array-non-decreasing/" },
      { name: "Minimum Increment to Make Array Unique", url: "https://leetcode.com/problems/minimum-increment-to-make-array-unique/" },
    ]
  },
  "1070": {
    name: "Permutations",
    category: "Backtracking – Permutations",
    cses_url: "https://cses.fi/problemset/task/1070",
    leetcode: [
      { name: "Permutations", url: "https://leetcode.com/problems/permutations/" },
      { name: "Permutations II", url: "https://leetcode.com/problems/permutations-ii/" },
      { name: "Next Permutation", url: "https://leetcode.com/problems/next-permutation/" },
      { name: "Permutation Sequence", url: "https://leetcode.com/problems/permutation-sequence/" },
    ]
  },
  "1071": {
    name: "Number Spiral",
    category: "Matrix – Spiral/Diagonal Pattern",
    cses_url: "https://cses.fi/problemset/task/1071",
    leetcode: [
      { name: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" },
      { name: "Spiral Matrix II", url: "https://leetcode.com/problems/spiral-matrix-ii/" },
      { name: "Diagonal Traverse", url: "https://leetcode.com/problems/diagonal-traverse/" },
      { name: "Spiral Matrix III", url: "https://leetcode.com/problems/spiral-matrix-iii/" },
    ]
  },
  "1072": {
    name: "Two Knights",
    category: "Combinatorics – Counting Attacks on Board",
    cses_url: "https://cses.fi/problemset/task/1072",
    leetcode: [
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
      { name: "N-Queens II", url: "https://leetcode.com/problems/n-queens-ii/" },
      { name: "Knight Probability in Chessboard", url: "https://leetcode.com/problems/knight-probability-in-chessboard/" },
      { name: "Minimum Knight Moves", url: "https://leetcode.com/problems/minimum-knight-moves/" },
    ]
  },
  "1092": {
    name: "Two Sets",
    category: "Math – Partition into Equal Sums",
    cses_url: "https://cses.fi/problemset/task/1092",
    leetcode: [
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Last Stone Weight II", url: "https://leetcode.com/problems/last-stone-weight-ii/" },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      { name: "Split Array With Same Average", url: "https://leetcode.com/problems/split-array-with-same-average/" },
    ]
  },
  "1617": {
    name: "Bit Strings",
    category: "Math – Modular Exponentiation",
    cses_url: "https://cses.fi/problemset/task/1617",
    leetcode: [
      { name: "Power of Two", url: "https://leetcode.com/problems/power-of-two/" },
      { name: "Power of Three", url: "https://leetcode.com/problems/power-of-three/" },
      { name: "Power of Four", url: "https://leetcode.com/problems/power-of-four/" },
      { name: "Hamming Distance", url: "https://leetcode.com/problems/hamming-distance/" },
    ]
  },
  "1618": {
    name: "Trailing Zeros",
    category: "Math – Factorial Trailing Zeros",
    cses_url: "https://cses.fi/problemset/task/1618",
    leetcode: [
      { name: "Factorial Trailing Zeroes", url: "https://leetcode.com/problems/factorial-trailing-zeroes/" },
      { name: "Preimage Size of Factorial Zeroes Function", url: "https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/" },
      { name: "Count Primes", url: "https://leetcode.com/problems/count-primes/" },
      { name: "Prime Number of Set Bits in Binary Representation", url: "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/" },
    ]
  },
  "1754": {
    name: "Coin Piles",
    category: "Math / Game Theory – Divisibility",
    cses_url: "https://cses.fi/problemset/task/1754",
    leetcode: [
      { name: "Nim Game", url: "https://leetcode.com/problems/nim-game/" },
      { name: "Divisor Game", url: "https://leetcode.com/problems/divisor-game/" },
      { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/" },
      { name: "Stone Game II", url: "https://leetcode.com/problems/stone-game-ii/" },
    ]
  },
  "1755": {
    name: "Palindrome Reorder",
    category: "String – Palindrome Permutation",
    cses_url: "https://cses.fi/problemset/task/1755",
    leetcode: [
      { name: "Palindrome Permutation", url: "https://leetcode.com/problems/palindrome-permutation/" },
      { name: "Palindrome Permutation II", url: "https://leetcode.com/problems/palindrome-permutation-ii/" },
      { name: "Longest Palindrome", url: "https://leetcode.com/problems/longest-palindrome/" },
      { name: "Valid Palindrome II", url: "https://leetcode.com/problems/valid-palindrome-ii/" },
    ]
  },
  "2205": {
    name: "Gray Code",
    category: "Bit Manipulation – Gray Code",
    cses_url: "https://cses.fi/problemset/task/2205",
    leetcode: [
      { name: "Gray Code", url: "https://leetcode.com/problems/gray-code/" },
      { name: "Circular Permutation in Binary Representation", url: "https://leetcode.com/problems/circular-permutation-in-binary-representation/" },
      { name: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/" },
      { name: "Binary Watch", url: "https://leetcode.com/problems/binary-watch/" },
    ]
  },
  "2165": {
    name: "Tower of Hanoi",
    category: "Recursion – Divide and Conquer",
    cses_url: "https://cses.fi/problemset/task/2165",
    leetcode: [
      { name: "K-th Symbol in Grammar", url: "https://leetcode.com/problems/k-th-symbol-in-grammar/" },
      { name: "Unique Binary Search Trees", url: "https://leetcode.com/problems/unique-binary-search-trees/" },
      { name: "Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/" },
      { name: "Number of Digit One", url: "https://leetcode.com/problems/number-of-digit-one/" },
    ]
  },
  "1622": {
    name: "Creating Strings",
    category: "Backtracking – String Permutations",
    cses_url: "https://cses.fi/problemset/task/1622",
    leetcode: [
      { name: "Permutations II", url: "https://leetcode.com/problems/permutations-ii/" },
      { name: "Letter Case Permutation", url: "https://leetcode.com/problems/letter-case-permutation/" },
      { name: "Letter Tile Possibilities", url: "https://leetcode.com/problems/letter-tile-possibilities/" },
      { name: "Palindrome Permutation II", url: "https://leetcode.com/problems/palindrome-permutation-ii/" },
    ]
  },
  "1623": {
    name: "Apple Division",
    category: "Backtracking – Partition into Two Sets",
    cses_url: "https://cses.fi/problemset/task/1623",
    leetcode: [
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Split Array With Same Average", url: "https://leetcode.com/problems/split-array-with-same-average/" },
      { name: "Tallest Billboard", url: "https://leetcode.com/problems/tallest-billboard/" },
      { name: "Last Stone Weight II", url: "https://leetcode.com/problems/last-stone-weight-ii/" },
    ]
  },
  "1624": {
    name: "Chessboard and Queens",
    category: "Backtracking – N-Queens with Obstacles",
    cses_url: "https://cses.fi/problemset/task/1624",
    leetcode: [
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
      { name: "N-Queens II", url: "https://leetcode.com/problems/n-queens-ii/" },
      { name: "Beautiful Arrangement", url: "https://leetcode.com/problems/beautiful-arrangement/" },
      { name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" },
    ]
  },
  "2431": {
    name: "Digit Queries",
    category: "Math – Digit Counting in Infinite Sequence",
    cses_url: "https://cses.fi/problemset/task/2431",
    leetcode: [
      { name: "Nth Digit", url: "https://leetcode.com/problems/nth-digit/" },
      { name: "Numbers At Most N Given Digit Set", url: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/" },
      { name: "Digit Count in Range", url: "https://leetcode.com/problems/digit-count-in-range/" },
      { name: "Count Numbers with Unique Digits", url: "https://leetcode.com/problems/count-numbers-with-unique-digits/" },
    ]
  },
  "1625": {
    name: "Grid Paths",
    category: "Backtracking – Grid Path Counting",
    cses_url: "https://cses.fi/problemset/task/1625",
    leetcode: [
      { name: "Unique Paths III", url: "https://leetcode.com/problems/unique-paths-iii/" },
      { name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
      { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/" },
      { name: "Robot Room Cleaner", url: "https://leetcode.com/problems/robot-room-cleaner/" },
    ]
  },

  // ─────────────────────────────────────────────
  // SORTING AND SEARCHING
  // ─────────────────────────────────────────────

  "1621": {
    name: "Distinct Numbers",
    category: "Sorting – Count Unique Elements",
    cses_url: "https://cses.fi/problemset/task/1621",
    leetcode: [
      { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/" },
      { name: "Unique Number of Occurrences", url: "https://leetcode.com/problems/unique-number-of-occurrences/" },
      { name: "Find All Numbers Disappeared in an Array", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
      { name: "Number of Distinct Averages", url: "https://leetcode.com/problems/number-of-distinct-averages/" },
    ]
  },
  "1084": {
    name: "Apartments",
    category: "Greedy – Two Pointer Matching",
    cses_url: "https://cses.fi/problemset/task/1084",
    leetcode: [
      { name: "Assign Cookies", url: "https://leetcode.com/problems/assign-cookies/" },
      { name: "Maximum Matching of Players With Trainers", url: "https://leetcode.com/problems/maximum-matching-of-players-with-trainers/" },
      { name: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { name: "Minimum Difference Between Highest and Lowest of K Scores", url: "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/" },
    ]
  },
  "1090": {
    name: "Ferris Wheel",
    category: "Greedy – Two Pointer Pairing",
    cses_url: "https://cses.fi/problemset/task/1090",
    leetcode: [
      { name: "Boats to Save People", url: "https://leetcode.com/problems/boats-to-save-people/" },
      { name: "Minimize Maximum Pair Sum in Array", url: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/" },
      { name: "Valid Triangle Number", url: "https://leetcode.com/problems/valid-triangle-number/" },
    ]
  },
  "1091": {
    name: "Concert Tickets",
    category: "Sorting + Binary Search / Multiset",
    cses_url: "https://cses.fi/problemset/task/1091",
    leetcode: [
      { name: "Time Based Key-Value Store", url: "https://leetcode.com/problems/time-based-key-value-store/" },
      { name: "Successful Pairs of Spells and Potions", url: "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/" },
      { name: "Maximum Matching of Players With Trainers", url: "https://leetcode.com/problems/maximum-matching-of-players-with-trainers/" },
      { name: "Find Right Interval", url: "https://leetcode.com/problems/find-right-interval/" },
    ]
  },
  "1619": {
    name: "Restaurant Customers",
    category: "Sorting – Sweep Line / Difference Array",
    cses_url: "https://cses.fi/problemset/task/1619",
    leetcode: [
      { name: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { name: "Car Pooling", url: "https://leetcode.com/problems/car-pooling/" },
      { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/" },
      { name: "Number of Flowers in Full Bloom", url: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/" },
    ]
  },
  "1629": {
    name: "Movie Festival",
    category: "Greedy – Interval Scheduling (Earliest Finish)",
    cses_url: "https://cses.fi/problemset/task/1629",
    leetcode: [
      { name: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { name: "Meeting Rooms", url: "https://leetcode.com/problems/meeting-rooms/" },
      { name: "Minimum Number of Arrows to Burst Balloons", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
      { name: "Maximum Number of Events That Can Be Attended", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/" },
    ]
  },
  "1640": {
    name: "Sum of Two Values",
    category: "Two Pointers / Hash Map – Two Sum",
    cses_url: "https://cses.fi/problemset/task/1640",
    leetcode: [
      { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
      { name: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { name: "Count Good Meals", url: "https://leetcode.com/problems/count-good-meals/" },
      { name: "Check If Array Pairs Are Divisible by k", url: "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/" },
    ]
  },
  "1643": {
    name: "Maximum Subarray Sum",
    category: "DP – Kadane's Algorithm",
    cses_url: "https://cses.fi/problemset/task/1643",
    leetcode: [
      { name: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/" },
      { name: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
      { name: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/" },
      { name: "Maximum Subarray Min-Product", url: "https://leetcode.com/problems/maximum-subarray-min-product/" },
    ]
  },
  "1074": {
    name: "Stick Lengths",
    category: "Sorting – Median Minimization",
    cses_url: "https://cses.fi/problemset/task/1074",
    leetcode: [
      { name: "Minimum Moves to Equal Array Elements II", url: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/" },
      { name: "Best Meeting Point", url: "https://leetcode.com/problems/best-meeting-point/" },
      { name: "Minimum Cost to Move Chips to The Same Position", url: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/" },
      { name: "Minimum Absolute Sum Difference", url: "https://leetcode.com/problems/minimum-absolute-sum-difference/" },
    ]
  },
  "2183": {
    name: "Missing Coin Sum",
    category: "Sorting – Smallest Unreachable Sum",
    cses_url: "https://cses.fi/problemset/task/2183",
    leetcode: [
      { name: "Patching Array", url: "https://leetcode.com/problems/patching-array/" },
      { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
      { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" },
      { name: "Non-negative Integers without Consecutive Ones", url: "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/" },
    ]
  },
  "2216": {
    name: "Collecting Numbers",
    category: "Sorting – Counting Passes",
    cses_url: "https://cses.fi/problemset/task/2216",
    leetcode: [
      { name: "Minimum Number of Swaps to Make the String Balanced", url: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/" },
      { name: "Minimum Swaps to Group All 1s Together II", url: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/" },
      { name: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
      { name: "Minimum Adjacent Swaps to Reach Kth Smallest Number", url: "https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-kth-smallest-number/" },
    ]
  },
  "2217": {
    name: "Collecting Numbers II",
    category: "Sorting – Counting Passes with Updates",
    cses_url: "https://cses.fi/problemset/task/2217",
    leetcode: [
      { name: "Minimum Number of Operations to Make Array Continuous", url: "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/" },
      { name: "Minimum Swaps to Make Sequences Increasing", url: "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/" },
      { name: "Minimum Increment to Make Array Unique", url: "https://leetcode.com/problems/minimum-increment-to-make-array-unique/" },
      { name: "Steps to Make Array Non-decreasing", url: "https://leetcode.com/problems/steps-to-make-array-non-decreasing/" },
    ]
  },
  "1141": {
    name: "Playlist",
    category: "Sliding Window – Longest Without Repeat",
    cses_url: "https://cses.fi/problemset/task/1141",
    leetcode: [
      { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Fruit Into Baskets", url: "https://leetcode.com/problems/fruit-into-baskets/" },
      { name: "Subarrays with K Different Integers", url: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
      { name: "Count Complete Subarrays in an Array", url: "https://leetcode.com/problems/count-complete-subarrays-in-an-array/" },
    ]
  },
  "1073": {
    name: "Towers",
    category: "Greedy / Binary Search – LIS-based Stacking",
    cses_url: "https://cses.fi/problemset/task/1073",
    leetcode: [
      { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { name: "Russian Doll Envelopes", url: "https://leetcode.com/problems/russian-doll-envelopes/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Minimum Number of Removals to Make Mountain Array", url: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/" },
    ]
  },
  "1163": {
    name: "Traffic Lights",
    category: "Sorted Set – Interval Management",
    cses_url: "https://cses.fi/problemset/task/1163",
    leetcode: [
      { name: "Exam Room", url: "https://leetcode.com/problems/exam-room/" },
      { name: "My Calendar I", url: "https://leetcode.com/problems/my-calendar-i/" },
      { name: "My Calendar II", url: "https://leetcode.com/problems/my-calendar-ii/" },
      { name: "Data Stream as Disjoint Intervals", url: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/" },
    ]
  },
  "2162": {
    name: "Josephus Problem I",
    category: "Simulation – Circular Elimination",
    cses_url: "https://cses.fi/problemset/task/2162",
    leetcode: [
      { name: "Find the Winner of the Circular Game", url: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/" },
      { name: "Design Circular Queue", url: "https://leetcode.com/problems/design-circular-queue/" },
      { name: "Circular Array Loop", url: "https://leetcode.com/problems/circular-array-loop/" },
      { name: "Last Stone Weight", url: "https://leetcode.com/problems/last-stone-weight/" },
    ]
  },
  "2163": {
    name: "Josephus Problem II",
    category: "Ordered Set / Fenwick Tree – k-th Removal",
    cses_url: "https://cses.fi/problemset/task/2163",
    leetcode: [
      { name: "Find the Winner of the Circular Game", url: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Kth Largest Element in a Stream", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
      { name: "Find Kth Bit in Nth Binary String", url: "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/" },
    ]
  },
  "2168": {
    name: "Nested Ranges Check",
    category: "Sorting – Containment Check",
    cses_url: "https://cses.fi/problemset/task/2168",
    leetcode: [
      { name: "Remove Covered Intervals", url: "https://leetcode.com/problems/remove-covered-intervals/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Number of Valid Subarrays", url: "https://leetcode.com/problems/number-of-valid-subarrays/" },
      { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    ]
  },
  "2169": {
    name: "Nested Ranges Count",
    category: "Sorting + BIT – Containment Count",
    cses_url: "https://cses.fi/problemset/task/2169",
    leetcode: [
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Reverse Pairs", url: "https://leetcode.com/problems/reverse-pairs/" },
      { name: "Remove Covered Intervals", url: "https://leetcode.com/problems/remove-covered-intervals/" },
      { name: "Count of Range Sum", url: "https://leetcode.com/problems/count-of-range-sum/" },
    ]
  },
  "1164": {
    name: "Room Allocation",
    category: "Greedy – Interval Scheduling with Resources",
    cses_url: "https://cses.fi/problemset/task/1164",
    leetcode: [
      { name: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { name: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/" },
      { name: "Insert Interval", url: "https://leetcode.com/problems/insert-interval/" },
      { name: "Minimum Number of Arrows to Burst Balloons", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
    ]
  },
  "1620": {
    name: "Factory Machines",
    category: "Binary Search on Answer – Minimize Max Time",
    cses_url: "https://cses.fi/problemset/task/1620",
    leetcode: [
      { name: "Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/" },
      { name: "Capacity To Ship Packages Within D Days", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
      { name: "Find the Smallest Divisor Given a Threshold", url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
      { name: "Minimum Speed to Arrive on Time", url: "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/" },
    ]
  },
  "1630": {
    name: "Tasks and Deadlines",
    category: "Greedy – Earliest Deadline First",
    cses_url: "https://cses.fi/problemset/task/1630",
    leetcode: [
      { name: "Course Schedule III", url: "https://leetcode.com/problems/course-schedule-iii/" },
      { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/" },
      { name: "Reorganize String", url: "https://leetcode.com/problems/reorganize-string/" },
      { name: "Minimum Number of Rounds to Finish All Tasks", url: "https://leetcode.com/problems/minimum-number-of-rounds-to-finish-all-tasks/" },
    ]
  },
  "1631": {
    name: "Reading Books",
    category: "Two Pointers – Symmetric Pairing",
    cses_url: "https://cses.fi/problemset/task/1631",
    leetcode: [
      { name: "Boats to Save People", url: "https://leetcode.com/problems/boats-to-save-people/" },
      { name: "Minimize Maximum Pair Sum in Array", url: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/" },
      { name: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { name: "Meeting Scheduler", url: "https://leetcode.com/problems/meeting-scheduler/" },
    ]
  },
  "1641": {
    name: "Sum of Three Values",
    category: "Two Pointers – 3Sum",
    cses_url: "https://cses.fi/problemset/task/1641",
    leetcode: [
      { name: "3Sum", url: "https://leetcode.com/problems/3sum/" },
      { name: "3Sum Closest", url: "https://leetcode.com/problems/3sum-closest/" },
      { name: "3Sum With Multiplicity", url: "https://leetcode.com/problems/3sum-with-multiplicity/" },
      { name: "Valid Triangle Number", url: "https://leetcode.com/problems/valid-triangle-number/" },
    ]
  },
  "1642": {
    name: "Sum of Four Values",
    category: "Two Pointers / Hash Map – 4Sum",
    cses_url: "https://cses.fi/problemset/task/1642",
    leetcode: [
      { name: "4Sum", url: "https://leetcode.com/problems/4sum/" },
      { name: "4Sum II", url: "https://leetcode.com/problems/4sum-ii/" },
      { name: "Count Special Quadruplets", url: "https://leetcode.com/problems/count-special-quadruplets/" },
      { name: "Tuple with Same Product", url: "https://leetcode.com/problems/tuple-with-same-product/" },
    ]
  },
  "1645": {
    name: "Nearest Smaller Values",
    category: "Monotonic Stack – Previous Smaller Element",
    cses_url: "https://cses.fi/problemset/task/1645",
    leetcode: [
      { name: "Next Greater Element I", url: "https://leetcode.com/problems/next-greater-element-i/" },
      { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" },
      { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { name: "Sum of Subarray Minimums", url: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
    ]
  },
  "1660": {
    name: "Subarray Sums I",
    category: "Prefix Sum – Count Subarrays with Target Sum",
    cses_url: "https://cses.fi/problemset/task/1660",
    leetcode: [
      { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { name: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
      { name: "Binary Subarrays With Sum", url: "https://leetcode.com/problems/binary-subarrays-with-sum/" },
      { name: "Number of Subarrays with Bounded Maximum", url: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/" },
    ]
  },
  "1661": {
    name: "Subarray Sums II",
    category: "Prefix Sum + Sorting – Count Subarray Sums in Range",
    cses_url: "https://cses.fi/problemset/task/1661",
    leetcode: [
      { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { name: "Count Number of Nice Subarrays", url: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
      { name: "Path Sum III", url: "https://leetcode.com/problems/path-sum-iii/" },
      { name: "Number of Submatrices That Sum to Target", url: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/" },
    ]
  },
  "1662": {
    name: "Subarray Divisibility",
    category: "Prefix Sum Mod – Divisible Subarrays",
    cses_url: "https://cses.fi/problemset/task/1662",
    leetcode: [
      { name: "Subarray Sums Divisible by K", url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
      { name: "Make Sum Divisible by P", url: "https://leetcode.com/problems/make-sum-divisible-by-p/" },
      { name: "Continuous Subarray Sum", url: "https://leetcode.com/problems/continuous-subarray-sum/" },
      { name: "Count Subarrays With Score Less Than K", url: "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/" },
    ]
  },
  "1085": {
    name: "Array Division",
    category: "Binary Search on Answer – Split Array",
    cses_url: "https://cses.fi/problemset/task/1085",
    leetcode: [
      { name: "Split Array Largest Sum", url: "https://leetcode.com/problems/split-array-largest-sum/" },
      { name: "Capacity To Ship Packages Within D Days", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
      { name: "Divide Chocolate", url: "https://leetcode.com/problems/divide-chocolate/" },
      { name: "Minimum Limit of Balls in a Bag", url: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/" },
    ]
  },
  "1632": {
    name: "Movie Festival II",
    category: "Greedy – Interval Scheduling with k Machines",
    cses_url: "https://cses.fi/problemset/task/1632",
    leetcode: [
      { name: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { name: "Course Schedule III", url: "https://leetcode.com/problems/course-schedule-iii/" },
      { name: "Maximum Number of Events That Can Be Attended", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/" },
      { name: "Maximum Number of Events That Can Be Attended II", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/" },
    ]
  },
  "1644": {
    name: "Maximum Subarray Sum II",
    category: "Sliding Window + Deque – Fixed Length Max Sum",
    cses_url: "https://cses.fi/problemset/task/1644",
    leetcode: [
      { name: "Maximum Sum of Two Non-Overlapping Subarrays", url: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" },
      { name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", url: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" },
      { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { name: "Minimum Size Subarray Sum", url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
    ]
  },

  // ─────────────────────────────────────────────
  // DYNAMIC PROGRAMMING
  // ─────────────────────────────────────────────

  "1633": {
    name: "Dice Combinations",
    category: "DP – Counting Compositions",
    cses_url: "https://cses.fi/problemset/task/1633",
    leetcode: [
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Number of Ways to Stay in the Same Place After Some Steps", url: "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/" },
      { name: "Knight Dialer", url: "https://leetcode.com/problems/knight-dialer/" },
      { name: "Count Ways to Build Good Strings", url: "https://leetcode.com/problems/count-ways-to-build-good-strings/" },
    ]
  },
  "1634": {
    name: "Minimizing Coins",
    category: "DP – Unbounded Knapsack / Coin Change",
    cses_url: "https://cses.fi/problemset/task/1634",
    leetcode: [
      { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
      { name: "Perfect Squares", url: "https://leetcode.com/problems/perfect-squares/" },
      { name: "Minimum Cost For Tickets", url: "https://leetcode.com/problems/minimum-cost-for-tickets/" },
      { name: "2 Keys Keyboard", url: "https://leetcode.com/problems/2-keys-keyboard/" },
    ]
  },
  "1635": {
    name: "Coin Combinations I",
    category: "DP – Unbounded Knapsack (Order Matters)",
    cses_url: "https://cses.fi/problemset/task/1635",
    leetcode: [
      { name: "Combination Sum IV", url: "https://leetcode.com/problems/combination-sum-iv/" },
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Integer Break", url: "https://leetcode.com/problems/integer-break/" },
      { name: "Count Ways to Build Good Strings", url: "https://leetcode.com/problems/count-ways-to-build-good-strings/" },
    ]
  },
  "1636": {
    name: "Coin Combinations II",
    category: "DP – Unbounded Knapsack (Order Doesn't Matter)",
    cses_url: "https://cses.fi/problemset/task/1636",
    leetcode: [
      { name: "Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/" },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Ones and Zeroes", url: "https://leetcode.com/problems/ones-and-zeroes/" },
    ]
  },
  "1637": {
    name: "Removing Digits",
    category: "DP – Minimum Steps",
    cses_url: "https://cses.fi/problemset/task/1637",
    leetcode: [
      { name: "Minimum Moves to Reach Target Score", url: "https://leetcode.com/problems/minimum-moves-to-reach-target-score/" },
      { name: "2 Keys Keyboard", url: "https://leetcode.com/problems/2-keys-keyboard/" },
      { name: "Delete and Earn", url: "https://leetcode.com/problems/delete-and-earn/" },
      { name: "Integer Replacement", url: "https://leetcode.com/problems/integer-replacement/" },
    ]
  },
  "1638": {
    name: "Grid Paths I",
    category: "DP – Grid Paths",
    cses_url: "https://cses.fi/problemset/task/1638",
    leetcode: [
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
      { name: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/" },
      { name: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
      { name: "Dungeon Game", url: "https://leetcode.com/problems/dungeon-game/" },
    ]
  },
  "1158": {
    name: "Book Shop",
    category: "DP – 0/1 Knapsack",
    cses_url: "https://cses.fi/problemset/task/1158",
    leetcode: [
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Last Stone Weight II", url: "https://leetcode.com/problems/last-stone-weight-ii/" },
      { name: "Ones and Zeroes", url: "https://leetcode.com/problems/ones-and-zeroes/" },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
    ]
  },
  "1746": {
    name: "Array Description",
    category: "DP – Constrained Array Counting",
    cses_url: "https://cses.fi/problemset/task/1746",
    leetcode: [
      { name: "Count Ways to Build Good Strings", url: "https://leetcode.com/problems/count-ways-to-build-good-strings/" },
      { name: "Number of Ways to Form a Target String Given a Dictionary", url: "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/" },
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
      { name: "Student Attendance Record II", url: "https://leetcode.com/problems/student-attendance-record-ii/" },
    ]
  },
  "2413": {
    name: "Counting Towers",
    category: "DP – Counting Structures",
    cses_url: "https://cses.fi/problemset/task/2413",
    leetcode: [
      { name: "Domino and Tromino Tiling", url: "https://leetcode.com/problems/domino-and-tromino-tiling/" },
      { name: "Count All Valid Pickup and Delivery Options", url: "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/" },
      { name: "Knight Dialer", url: "https://leetcode.com/problems/knight-dialer/" },
      { name: "Count Ways to Build Good Strings", url: "https://leetcode.com/problems/count-ways-to-build-good-strings/" },
    ]
  },
  "1639": {
    name: "Edit Distance",
    category: "DP – String Edit Distance",
    cses_url: "https://cses.fi/problemset/task/1639",
    leetcode: [
      { name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
      { name: "One Edit Distance", url: "https://leetcode.com/problems/one-edit-distance/" },
      { name: "Delete Operation for Two Strings", url: "https://leetcode.com/problems/delete-operation-for-two-strings/" },
      { name: "Minimum ASCII Delete Sum for Two Strings", url: "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/" },
    ]
  },
  "3403": {
    name: "Longest Common Subsequence",
    category: "DP – LCS",
    cses_url: "https://cses.fi/problemset/task/3403",
    leetcode: [
      { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/" },
      { name: "Shortest Common Supersequence", url: "https://leetcode.com/problems/shortest-common-supersequence/" },
      { name: "Delete Operation for Two Strings", url: "https://leetcode.com/problems/delete-operation-for-two-strings/" },
      { name: "Interleaving String", url: "https://leetcode.com/problems/interleaving-string/" },
    ]
  },
  "1744": {
    name: "Rectangle Cutting",
    category: "DP – Interval DP",
    cses_url: "https://cses.fi/problemset/task/1744",
    leetcode: [
      { name: "Strange Printer", url: "https://leetcode.com/problems/strange-printer/" },
      { name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/" },
      { name: "Remove Boxes", url: "https://leetcode.com/problems/remove-boxes/" },
      { name: "Zuma Game", url: "https://leetcode.com/problems/zuma-game/" },
    ]
  },
  "1745": {
    name: "Money Sums",
    category: "DP – Subset Sum",
    cses_url: "https://cses.fi/problemset/task/1745",
    leetcode: [
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      { name: "Split Array With Same Average", url: "https://leetcode.com/problems/split-array-with-same-average/" },
      { name: "Last Stone Weight II", url: "https://leetcode.com/problems/last-stone-weight-ii/" },
    ]
  },
  "1097": {
    name: "Removal Game",
    category: "DP – Game Theory on Array",
    cses_url: "https://cses.fi/problemset/task/1097",
    leetcode: [
      { name: "Predict the Winner", url: "https://leetcode.com/problems/predict-the-winner/" },
      { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/" },
      { name: "Stone Game II", url: "https://leetcode.com/problems/stone-game-ii/" },
      { name: "Can I Win", url: "https://leetcode.com/problems/can-i-win/" },
    ]
  },
  "1093": {
    name: "Two Sets II",
    category: "DP – Partition Count",
    cses_url: "https://cses.fi/problemset/task/1093",
    leetcode: [
      { name: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { name: "Number of Ways to Divide a Long Corridor", url: "https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/" },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      { name: "Split Array With Same Average", url: "https://leetcode.com/problems/split-array-with-same-average/" },
    ]
  },
  "1145": {
    name: "Increasing Subsequence",
    category: "DP – LIS",
    cses_url: "https://cses.fi/problemset/task/1145",
    leetcode: [
      { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { name: "Number of Longest Increasing Subsequence", url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/" },
      { name: "Russian Doll Envelopes", url: "https://leetcode.com/problems/russian-doll-envelopes/" },
      { name: "Minimum Number of Removals to Make Mountain Array", url: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/" },
    ]
  },
  "1140": {
    name: "Projects",
    category: "DP – Weighted Interval Scheduling",
    cses_url: "https://cses.fi/problemset/task/1140",
    leetcode: [
      { name: "Maximum Profit in Job Scheduling", url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/" },
      { name: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { name: "Maximum Number of Events That Can Be Attended II", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/" },
      { name: "Course Schedule III", url: "https://leetcode.com/problems/course-schedule-iii/" },
    ]
  },
  "1653": {
    name: "Elevator Rides",
    category: "DP – Bitmask DP",
    cses_url: "https://cses.fi/problemset/task/1653",
    leetcode: [
      { name: "Partition to K Equal Sum Subsets", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/" },
      { name: "Minimum Number of Work Sessions to Finish the Tasks", url: "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/" },
      { name: "Find Minimum Time to Finish All Jobs", url: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/" },
      { name: "Fair Distribution of Cookies", url: "https://leetcode.com/problems/fair-distribution-of-cookies/" },
    ]
  },
  "2181": {
    name: "Counting Tilings",
    category: "DP – Broken Profile / Bitmask",
    cses_url: "https://cses.fi/problemset/task/2181",
    leetcode: [
      { name: "Domino and Tromino Tiling", url: "https://leetcode.com/problems/domino-and-tromino-tiling/" },
      { name: "Student Attendance Record II", url: "https://leetcode.com/problems/student-attendance-record-ii/" },
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
      { name: "Knight Dialer", url: "https://leetcode.com/problems/knight-dialer/" },
    ]
  },
  "2220": {
    name: "Counting Numbers",
    category: "DP – Digit DP",
    cses_url: "https://cses.fi/problemset/task/2220",
    leetcode: [
      { name: "Non-negative Integers without Consecutive Ones", url: "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/" },
      { name: "Count Numbers with Unique Digits", url: "https://leetcode.com/problems/count-numbers-with-unique-digits/" },
      { name: "Numbers At Most N Given Digit Set", url: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/" },
      { name: "Count Sorted Vowel Strings", url: "https://leetcode.com/problems/count-sorted-vowel-strings/" },
    ]
  },

  // ─────────────────────────────────────────────
  // GRAPH ALGORITHMS
  // ─────────────────────────────────────────────

  "1192": {
    name: "Counting Rooms",
    category: "Graph – BFS/DFS Connected Components",
    cses_url: "https://cses.fi/problemset/task/1192",
    leetcode: [
      { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
      { name: "Max Area of Island", url: "https://leetcode.com/problems/max-area-of-island/" },
      { name: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
      { name: "Surrounded Regions", url: "https://leetcode.com/problems/surrounded-regions/" },
    ]
  },
  "1193": {
    name: "Labyrinth",
    category: "Graph – BFS Shortest Path in Grid",
    cses_url: "https://cses.fi/problemset/task/1193",
    leetcode: [
      { name: "Shortest Path in Binary Matrix", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
      { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
      { name: "01 Matrix", url: "https://leetcode.com/problems/01-matrix/" },
      { name: "Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/" },
    ]
  },
  "1666": {
    name: "Building Roads",
    category: "Graph – Union Find / MST",
    cses_url: "https://cses.fi/problemset/task/1666",
    leetcode: [
      { name: "Number of Connected Components in an Undirected Graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
      { name: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/" },
      { name: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/" },
      { name: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/" },
    ]
  },
  "1667": {
    name: "Message Route",
    category: "Graph – BFS Shortest Path",
    cses_url: "https://cses.fi/problemset/task/1667",
    leetcode: [
      { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
      { name: "Shortest Path Visiting All Nodes", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/" },
      { name: "Open the Lock", url: "https://leetcode.com/problems/open-the-lock/" },
      { name: "Minimum Operations to Convert Number", url: "https://leetcode.com/problems/minimum-operations-to-convert-number/" },
    ]
  },
  "1668": {
    name: "Building Teams",
    category: "Graph – Bipartite Check",
    cses_url: "https://cses.fi/problemset/task/1668",
    leetcode: [
      { name: "Is Graph Bipartite?", url: "https://leetcode.com/problems/is-graph-bipartite/" },
      { name: "Possible Bipartition", url: "https://leetcode.com/problems/possible-bipartition/" },
      { name: "Flower Planting With No Adjacent", url: "https://leetcode.com/problems/flower-planting-with-no-adjacent/" },
      { name: "Detect Cycles in 2D Grid", url: "https://leetcode.com/problems/detect-cycles-in-2d-grid/" },
    ]
  },
  "1669": {
    name: "Round Trip",
    category: "Graph – Cycle Detection (Undirected)",
    cses_url: "https://cses.fi/problemset/task/1669",
    leetcode: [
      { name: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/" },
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
    ]
  },
  "1194": {
    name: "Monsters",
    category: "Graph – Multi-source BFS",
    cses_url: "https://cses.fi/problemset/task/1194",
    leetcode: [
      { name: "01 Matrix", url: "https://leetcode.com/problems/01-matrix/" },
      { name: "Escape a Large Maze", url: "https://leetcode.com/problems/escape-a-large-maze/" },
      { name: "As Far from Land as Possible", url: "https://leetcode.com/problems/as-far-from-land-as-possible/" },
      { name: "Walls and Gates", url: "https://leetcode.com/problems/walls-and-gates/" },
    ]
  },
  "1671": {
    name: "Shortest Routes I",
    category: "Graph – Dijkstra's Algorithm",
    cses_url: "https://cses.fi/problemset/task/1671",
    leetcode: [
      { name: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" },
      { name: "Path with Minimum Effort", url: "https://leetcode.com/problems/path-with-minimum-effort/" },
      { name: "Path With Maximum Probability", url: "https://leetcode.com/problems/path-with-maximum-probability/" },
      { name: "Swim in Rising Water", url: "https://leetcode.com/problems/swim-in-rising-water/" },
    ]
  },
  "1672": {
    name: "Shortest Routes II",
    category: "Graph – Floyd-Warshall",
    cses_url: "https://cses.fi/problemset/task/1672",
    leetcode: [
      { name: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
      { name: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" },
      { name: "Evaluate Division", url: "https://leetcode.com/problems/evaluate-division/" },
      { name: "Minimum Score of a Path Between Two Cities", url: "https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/" },
    ]
  },
  "1673": {
    name: "High Score",
    category: "Graph – Bellman-Ford (Negative Cycles)",
    cses_url: "https://cses.fi/problemset/task/1673",
    leetcode: [
      { name: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { name: "Minimum Cost to Reach Destination in Time", url: "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/" },
      { name: "Minimum Weighted Subgraph With the Required Paths", url: "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/" },
    ]
  },
  "1195": {
    name: "Flight Discount",
    category: "Graph – Modified Dijkstra",
    cses_url: "https://cses.fi/problemset/task/1195",
    leetcode: [
      { name: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { name: "Minimum Cost to Reach Destination in Time", url: "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/" },
      { name: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
      { name: "Minimum Obstacle Removal to Reach Corner", url: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/" },
    ]
  },
  "1197": {
    name: "Cycle Finding",
    category: "Graph – Bellman-Ford Negative Cycle",
    cses_url: "https://cses.fi/problemset/task/1197",
    leetcode: [
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
      { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/" },
    ]
  },
  "1196": {
    name: "Flight Routes",
    category: "Graph – K Shortest Paths (Yen's Algorithm)",
    cses_url: "https://cses.fi/problemset/task/1196",
    leetcode: [
      { name: "Cheapest Flights Within K Stops", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { name: "K-th Smallest Prime Fraction", url: "https://leetcode.com/problems/k-th-smallest-prime-fraction/" },
      { name: "Find K Pairs with Smallest Sums", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
    ]
  },
  "1678": {
    name: "Round Trip II",
    category: "Graph – Cycle Detection (Directed)",
    cses_url: "https://cses.fi/problemset/task/1678",
    leetcode: [
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/" },
    ]
  },
  "1679": {
    name: "Course Schedule",
    category: "Graph – Topological Sort",
    cses_url: "https://cses.fi/problemset/task/1679",
    leetcode: [
      { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
      { name: "Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/" },
      { name: "Sort Items by Groups Respecting Dependencies", url: "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/" },
      { name: "Sequence Reconstruction", url: "https://leetcode.com/problems/sequence-reconstruction/" },
    ]
  },
  "1680": {
    name: "Longest Flight Route",
    category: "Graph – DAG Longest Path",
    cses_url: "https://cses.fi/problemset/task/1680",
    leetcode: [
      { name: "Longest Path With Different Adjacent Characters", url: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/" },
      { name: "Longest Increasing Path in a Matrix", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
      { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { name: "Maximum Height by Stacking Cuboids", url: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/" },
    ]
  },
  "1681": {
    name: "Game Routes",
    category: "Graph – DAG Path Counting",
    cses_url: "https://cses.fi/problemset/task/1681",
    leetcode: [
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Knight Dialer", url: "https://leetcode.com/problems/knight-dialer/" },
    ]
  },
  "1202": {
    name: "Investigation",
    category: "Graph – Dijkstra + Count Paths",
    cses_url: "https://cses.fi/problemset/task/1202",
    leetcode: [
      { name: "Number of Ways to Arrive at Destination", url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/" },
      { name: "Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" },
      { name: "Path With Maximum Probability", url: "https://leetcode.com/problems/path-with-maximum-probability/" },
      { name: "All Paths From Source Lead to Destination", url: "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/" },
    ]
  },
  "1750": {
    name: "Planets Queries I",
    category: "Graph – Binary Lifting",
    cses_url: "https://cses.fi/problemset/task/1750",
    leetcode: [
      { name: "Kth Ancestor of a Tree Node", url: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/" },
      { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { name: "Maximum Width of Binary Tree", url: "https://leetcode.com/problems/maximum-width-of-binary-tree/" },
      { name: "Minimum Time to Collect All Apples in a Tree", url: "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/" },
    ]
  },
  "1751": {
    name: "Planets Cycles",
    category: "Graph – Functional Graph Cycle",
    cses_url: "https://cses.fi/problemset/task/1751",
    leetcode: [
      { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
      { name: "Linked List Cycle II", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
      { name: "Happy Number", url: "https://leetcode.com/problems/happy-number/" },
      { name: "Set Mismatch", url: "https://leetcode.com/problems/set-mismatch/" },
    ]
  },
  "1675": {
    name: "Road Reparation",
    category: "Graph – Minimum Spanning Tree (Kruskal)",
    cses_url: "https://cses.fi/problemset/task/1675",
    leetcode: [
      { name: "Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
      { name: "Connecting Cities With Minimum Cost", url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/" },
      { name: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", url: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/" },
      { name: "Number of Operations to Make Network Connected", url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
    ]
  },
  "1676": {
    name: "Road Construction",
    category: "Graph – MST + Union Find",
    cses_url: "https://cses.fi/problemset/task/1676",
    leetcode: [
      { name: "Min Cost to Connect All Points", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
      { name: "Number of Operations to Make Network Connected", url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
      { name: "Most Stones Removed with Same Row or Column", url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
      { name: "Redundant Connection II", url: "https://leetcode.com/problems/redundant-connection-ii/" },
    ]
  },
  "1682": {
    name: "Flight Routes Check",
    category: "Graph – SCC / Kosaraju",
    cses_url: "https://cses.fi/problemset/task/1682",
    leetcode: [
      { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { name: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/" },
    ]
  },
  "1683": {
    name: "Planets and Kingdoms",
    category: "Graph – Strongly Connected Components",
    cses_url: "https://cses.fi/problemset/task/1683",
    leetcode: [
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { name: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/" },
      { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
    ]
  },
  "1686": {
    name: "Coin Collector",
    category: "Graph – SCC + DAG DP",
    cses_url: "https://cses.fi/problemset/task/1686",
    leetcode: [
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { name: "Longest Path With Different Adjacent Characters", url: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/" },
      { name: "Find All Possible Recipes from Given Supplies", url: "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/" },
    ]
  },
  "1694": {
    name: "Download Speed",
    category: "Graph – Max Flow (Edmonds-Karp)",
    cses_url: "https://cses.fi/problemset/task/1694",
    leetcode: [
      { name: "Maximum Students Taking Exam", url: "https://leetcode.com/problems/maximum-students-taking-exam/" },
      { name: "Remove Max Number of Edges to Keep Graph Fully Traversable", url: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/" },
      { name: "Minimum Number of Days to Disconnect Island", url: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/" },
    ]
  },
  "1695": {
    name: "Police Chase",
    category: "Graph – Min Cut (Max-Flow Min-Cut Theorem)",
    cses_url: "https://cses.fi/problemset/task/1695",
    leetcode: [
      { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
      { name: "Minimum Number of Days to Disconnect Island", url: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/" },
      { name: "Remove Max Number of Edges to Keep Graph Fully Traversable", url: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/" },
    ]
  },
  "1696": {
    name: "School Dance",
    category: "Graph – Bipartite Matching (Hopcroft-Karp)",
    cses_url: "https://cses.fi/problemset/task/1696",
    leetcode: [
      { name: "Maximum Matching of Players With Trainers", url: "https://leetcode.com/problems/maximum-matching-of-players-with-trainers/" },
      { name: "Maximum Students Taking Exam", url: "https://leetcode.com/problems/maximum-students-taking-exam/" },
      { name: "Minimum Number of People to Teach", url: "https://leetcode.com/problems/minimum-number-of-people-to-teach/" },
    ]
  },
  "1691": {
    name: "Mail Delivery",
    category: "Graph – Eulerian Circuit",
    cses_url: "https://cses.fi/problemset/task/1691",
    leetcode: [
      { name: "Reconstruct Itinerary", url: "https://leetcode.com/problems/reconstruct-itinerary/" },
      { name: "Valid Arrangement of Pairs", url: "https://leetcode.com/problems/valid-arrangement-of-pairs/" },
      { name: "All Paths From Source to Target", url: "https://leetcode.com/problems/all-paths-from-source-to-target/" },
      { name: "Critical Connections in a Network", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
    ]
  },
  "1693": {
    name: "Teleporters Path",
    category: "Graph – Eulerian Path",
    cses_url: "https://cses.fi/problemset/task/1693",
    leetcode: [
      { name: "Reconstruct Itinerary", url: "https://leetcode.com/problems/reconstruct-itinerary/" },
      { name: "Valid Arrangement of Pairs", url: "https://leetcode.com/problems/valid-arrangement-of-pairs/" },
      { name: "All Paths From Source to Target", url: "https://leetcode.com/problems/all-paths-from-source-to-target/" },
      { name: "Minimum Number of Vertices to Reach All Nodes", url: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/" },
    ]
  },
  "1690": {
    name: "Hamiltonian Flights",
    category: "DP – Hamiltonian Path (Bitmask DP)",
    cses_url: "https://cses.fi/problemset/task/1690",
    leetcode: [
      { name: "Find the Shortest Superstring", url: "https://leetcode.com/problems/find-the-shortest-superstring/" },
      { name: "Number of Ways to Wear Different Hats to Each Other", url: "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/" },
      { name: "Shortest Path Visiting All Nodes", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/" },
      { name: "Minimum Number of Work Sessions to Finish the Tasks", url: "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/" },
    ]
  },
  "1689": {
    name: "Knight's Tour",
    category: "Graph – Warnsdorff's Rule / Backtracking",
    cses_url: "https://cses.fi/problemset/task/1689",
    leetcode: [
      { name: "Minimum Knight Moves", url: "https://leetcode.com/problems/minimum-knight-moves/" },
      { name: "Knight Probability in Chessboard", url: "https://leetcode.com/problems/knight-probability-in-chessboard/" },
      { name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
    ]
  },

  // ─────────────────────────────────────────────
  // RANGE QUERIES
  // ─────────────────────────────────────────────

  "1646": {
    name: "Static Range Sum Queries",
    category: "Prefix Sum",
    cses_url: "https://cses.fi/problemset/task/1646",
    leetcode: [
      { name: "Range Sum Query - Immutable", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { name: "Running Sum of 1d Array", url: "https://leetcode.com/problems/running-sum-of-1d-array/" },
      { name: "Find Pivot Index", url: "https://leetcode.com/problems/find-pivot-index/" },
    ]
  },
  "1647": {
    name: "Static Range Minimum Queries",
    category: "Sparse Table / RMQ",
    cses_url: "https://cses.fi/problemset/task/1647",
    leetcode: [
      { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { name: "Sum of Subarray Minimums", url: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
      { name: "Maximum Width Ramp", url: "https://leetcode.com/problems/maximum-width-ramp/" },
    ]
  },
  "1648": {
    name: "Dynamic Range Sum Queries",
    category: "Fenwick Tree / Segment Tree – Point Update, Range Query",
    cses_url: "https://cses.fi/problemset/task/1648",
    leetcode: [
      { name: "Range Sum Query - Mutable", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Create Sorted Array Through Instructions", url: "https://leetcode.com/problems/create-sorted-array-through-instructions/" },
      { name: "Count Number of Teams", url: "https://leetcode.com/problems/count-number-of-teams/" },
    ]
  },
  "1649": {
    name: "Dynamic Range Minimum Queries",
    category: "Segment Tree – Range Minimum",
    cses_url: "https://cses.fi/problemset/task/1649",
    leetcode: [
      { name: "Range Sum Query - Mutable", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Create Sorted Array Through Instructions", url: "https://leetcode.com/problems/create-sorted-array-through-instructions/" },
    ]
  },
  "1650": {
    name: "Range Xor Queries",
    category: "Prefix XOR",
    cses_url: "https://cses.fi/problemset/task/1650",
    leetcode: [
      { name: "XOR Queries of a Subarray", url: "https://leetcode.com/problems/xor-queries-of-a-subarray/" },
      { name: "Find the Original Array of Prefix Xor", url: "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/" },
      { name: "Count Triplets That Can Form Two Arrays of Equal XOR", url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/" },
      { name: "Decode XORed Array", url: "https://leetcode.com/problems/decode-xored-array/" },
    ]
  },
  "1651": {
    name: "Range Update Queries",
    category: "BIT / Lazy Segment Tree – Range Update, Point Query",
    cses_url: "https://cses.fi/problemset/task/1651",
    leetcode: [
      { name: "Range Addition", url: "https://leetcode.com/problems/range-addition/" },
      { name: "Corporate Flight Bookings", url: "https://leetcode.com/problems/corporate-flight-bookings/" },
      { name: "Car Pooling", url: "https://leetcode.com/problems/car-pooling/" },
      { name: "Shifting Letters II", url: "https://leetcode.com/problems/shifting-letters-ii/" },
    ]
  },
  "1652": {
    name: "Forest Queries",
    category: "2D Prefix Sum",
    cses_url: "https://cses.fi/problemset/task/1652",
    leetcode: [
      { name: "Range Sum Query 2D - Immutable", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
      { name: "Count Submatrices With All Ones", url: "https://leetcode.com/problems/count-submatrices-with-all-ones/" },
      { name: "Matrix Block Sum", url: "https://leetcode.com/problems/matrix-block-sum/" },
      { name: "Number of Submatrices That Sum to Target", url: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/" },
    ]
  },
  "1143": {
    name: "Hotel Queries",
    category: "Segment Tree – Walk",
    cses_url: "https://cses.fi/problemset/task/1143",
    leetcode: [
      { name: "Find Right Interval", url: "https://leetcode.com/problems/find-right-interval/" },
      { name: "My Calendar I", url: "https://leetcode.com/problems/my-calendar-i/" },
      { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/" },
    ]
  },
  "1190": {
    name: "Subarray Sum Queries",
    category: "Segment Tree – Range Max",
    cses_url: "https://cses.fi/problemset/task/1190",
    leetcode: [
      { name: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/" },
      { name: "Maximum Sum of Two Non-Overlapping Subarrays", url: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" },
      { name: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/" },
      { name: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
    ]
  },
  "1734": {
    name: "Distinct Values Queries",
    category: "Offline Queries + BIT",
    cses_url: "https://cses.fi/problemset/task/1734",
    leetcode: [
      { name: "Count of Range Sum", url: "https://leetcode.com/problems/count-of-range-sum/" },
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Number of Subarrays with Bounded Maximum", url: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/" },
    ]
  },
  "1735": {
    name: "Range Updates and Sums",
    category: "Lazy Segment Tree",
    cses_url: "https://cses.fi/problemset/task/1735",
    leetcode: [
      { name: "Range Sum Query - Mutable", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
      { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/" },
      { name: "Range Addition", url: "https://leetcode.com/problems/range-addition/" },
      { name: "Corporate Flight Bookings", url: "https://leetcode.com/problems/corporate-flight-bookings/" },
    ]
  },
  "1736": {
    name: "Polynomial Queries",
    category: "Lazy Segment Tree – Complex Updates",
    cses_url: "https://cses.fi/problemset/task/1736",
    leetcode: [
      { name: "Falling Squares", url: "https://leetcode.com/problems/falling-squares/" },
      { name: "My Calendar III", url: "https://leetcode.com/problems/my-calendar-iii/" },
      { name: "Car Pooling", url: "https://leetcode.com/problems/car-pooling/" },
      { name: "Shifting Letters II", url: "https://leetcode.com/problems/shifting-letters-ii/" },
    ]
  },

  // ─────────────────────────────────────────────
  // TREE ALGORITHMS
  // ─────────────────────────────────────────────

  "1674": {
    name: "Subordinates",
    category: "Tree – DFS Subtree Size",
    cses_url: "https://cses.fi/problemset/task/1674",
    leetcode: [
      { name: "Count Good Nodes in Binary Tree", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
      { name: "Number of Nodes in the Sub-Tree With the Same Label", url: "https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/" },
      { name: "Time Needed to Inform All Employees", url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/" },
      { name: "Find Largest Value in Each Tree Row", url: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/" },
    ]
  },
  "1130": {
    name: "Tree Matching",
    category: "Tree – Maximum Matching / DP",
    cses_url: "https://cses.fi/problemset/task/1130",
    leetcode: [
      { name: "Maximum Product of Splitted Binary Tree", url: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/" },
      { name: "Binary Tree Cameras", url: "https://leetcode.com/problems/binary-tree-cameras/" },
      { name: "House Robber III", url: "https://leetcode.com/problems/house-robber-iii/" },
      { name: "Maximum Score After Applying Operations on a Tree", url: "https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/" },
    ]
  },
  "1131": {
    name: "Tree Diameter",
    category: "Tree – Diameter via DFS",
    cses_url: "https://cses.fi/problemset/task/1131",
    leetcode: [
      { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { name: "Diameter of N-Ary Tree", url: "https://leetcode.com/problems/diameter-of-n-ary-tree/" },
      { name: "Minimum Height Trees", url: "https://leetcode.com/problems/minimum-height-trees/" },
      { name: "Longest Path With Different Adjacent Characters", url: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/" },
    ]
  },
  "1132": {
    name: "Tree Distances I",
    category: "Tree – Farthest Node from All",
    cses_url: "https://cses.fi/problemset/task/1132",
    leetcode: [
      { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { name: "Sum of Distances in Tree", url: "https://leetcode.com/problems/sum-of-distances-in-tree/" },
      { name: "Find Center of Star Graph", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
      { name: "Minimum Height Trees", url: "https://leetcode.com/problems/minimum-height-trees/" },
    ]
  },
  "1133": {
    name: "Tree Distances II",
    category: "Tree – Rerooting DP",
    cses_url: "https://cses.fi/problemset/task/1133",
    leetcode: [
      { name: "Sum of Distances in Tree", url: "https://leetcode.com/problems/sum-of-distances-in-tree/" },
      { name: "Time Needed to Inform All Employees", url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/" },
      { name: "Count Nodes With the Highest Score", url: "https://leetcode.com/problems/count-nodes-with-the-highest-score/" },
      { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    ]
  },
  "1687": {
    name: "Company Queries I",
    category: "Tree – Binary Lifting (LCA)",
    cses_url: "https://cses.fi/problemset/task/1687",
    leetcode: [
      { name: "Kth Ancestor of a Tree Node", url: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/" },
      { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { name: "Step-By-Step Directions From a Binary Tree Node to Another", url: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/" },
      { name: "Maximize Value of Function in a Ball Passing Game", url: "https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/" },
    ]
  },
  "1688": {
    name: "Company Queries II",
    category: "Tree – LCA",
    cses_url: "https://cses.fi/problemset/task/1688",
    leetcode: [
      { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { name: "Lowest Common Ancestor of a Binary Search Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { name: "Step-By-Step Directions From a Binary Tree Node to Another", url: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/" },
      { name: "Find Distance in a Binary Tree", url: "https://leetcode.com/problems/find-distance-in-a-binary-tree/" },
    ]
  },
  "1135": {
    name: "Distance Queries",
    category: "Tree – LCA + Distance",
    cses_url: "https://cses.fi/problemset/task/1135",
    leetcode: [
      { name: "Lowest Common Ancestor of a Binary Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { name: "Find Distance in a Binary Tree", url: "https://leetcode.com/problems/find-distance-in-a-binary-tree/" },
      { name: "Step-By-Step Directions From a Binary Tree Node to Another", url: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/" },
      { name: "Path Sum III", url: "https://leetcode.com/problems/path-sum-iii/" },
    ]
  },
  "1136": {
    name: "Counting Paths",
    category: "Tree – Path Queries (HLD / DFS order)",
    cses_url: "https://cses.fi/problemset/task/1136",
    leetcode: [
      { name: "Path Sum III", url: "https://leetcode.com/problems/path-sum-iii/" },
      { name: "Longest Univalue Path", url: "https://leetcode.com/problems/longest-univalue-path/" },
      { name: "Pseudo-Palindromic Paths in a Binary Tree", url: "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/" },
      { name: "Path Sum II", url: "https://leetcode.com/problems/path-sum-ii/" },
    ]
  },
  "1137": {
    name: "Subtree Queries",
    category: "Tree – Euler Tour + BIT",
    cses_url: "https://cses.fi/problemset/task/1137",
    leetcode: [
      { name: "Range Sum Query - Mutable", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
      { name: "Count Nodes Equal to Sum of Descendants", url: "https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/" },
      { name: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
      { name: "Find Largest Value in Each Tree Row", url: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/" },
    ]
  },
  "1138": {
    name: "Path Queries",
    category: "Tree – Heavy-Light Decomposition",
    cses_url: "https://cses.fi/problemset/task/1138",
    leetcode: [
      { name: "Path Sum", url: "https://leetcode.com/problems/path-sum/" },
      { name: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
      { name: "Path Sum III", url: "https://leetcode.com/problems/path-sum-iii/" },
      { name: "Maximum Difference Between Node and Ancestor", url: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/" },
    ]
  },
  "1139": {
    name: "Distinct Colors",
    category: "Tree – DSU on Tree (Small to Large)",
    cses_url: "https://cses.fi/problemset/task/1139",
    leetcode: [
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Number of Nodes in the Sub-Tree With the Same Label", url: "https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/" },
      { name: "Most Frequent Subtree Sum", url: "https://leetcode.com/problems/most-frequent-subtree-sum/" },
      { name: "Find All The Lonely Nodes", url: "https://leetcode.com/problems/find-all-the-lonely-nodes/" },
    ]
  },
  "2079": {
    name: "Finding a Centroid",
    category: "Tree – Centroid Decomposition",
    cses_url: "https://cses.fi/problemset/task/2079",
    leetcode: [
      { name: "Find Center of Star Graph", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
      { name: "Second Minimum Node In a Binary Tree", url: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/" },
      { name: "Minimum Depth of Binary Tree", url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
      { name: "Balance a Binary Search Tree", url: "https://leetcode.com/problems/balance-a-binary-search-tree/" },
    ]
  },

  // ─────────────────────────────────────────────
  // MATHEMATICS
  // ─────────────────────────────────────────────

  "1095": {
    name: "Exponentiation",
    category: "Math – Fast Exponentiation",
    cses_url: "https://cses.fi/problemset/task/1095",
    leetcode: [
      { name: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/" },
      { name: "Super Pow", url: "https://leetcode.com/problems/super-pow/" },
      { name: "Count Good Numbers", url: "https://leetcode.com/problems/count-good-numbers/" },
    ]
  },
  "1712": {
    name: "Exponentiation II",
    category: "Math – Euler's Theorem / Modular Exponentiation",
    cses_url: "https://cses.fi/problemset/task/1712",
    leetcode: [
      { name: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/" },
      { name: "Super Pow", url: "https://leetcode.com/problems/super-pow/" },
      { name: "Count Good Numbers", url: "https://leetcode.com/problems/count-good-numbers/" },
      { name: "Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/" },
    ]
  },
  "1713": {
    name: "Counting Divisors",
    category: "Math – Sieve / Factorization",
    cses_url: "https://cses.fi/problemset/task/1713",
    leetcode: [
      { name: "Count Primes", url: "https://leetcode.com/problems/count-primes/" },
      { name: "Ugly Number II", url: "https://leetcode.com/problems/ugly-number-ii/" },
      { name: "Largest Component Size by Common Factor", url: "https://leetcode.com/problems/largest-component-size-by-common-factor/" },
      { name: "Smallest Value After Replacing With Sum of Prime Factors", url: "https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/" },
    ]
  },
  "1081": {
    name: "Common Divisors",
    category: "Math – GCD",
    cses_url: "https://cses.fi/problemset/task/1081",
    leetcode: [
      { name: "Find Greatest Common Divisor of Array", url: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/" },
      { name: "GCD Sort of an Array", url: "https://leetcode.com/problems/gcd-sort-of-an-array/" },
      { name: "Greatest Common Divisor of Strings", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" },
      { name: "Count Array Pairs Divisible by K", url: "https://leetcode.com/problems/count-array-pairs-divisible-by-k/" },
    ]
  },
  "1082": {
    name: "Sum of Divisors",
    category: "Math – Divisor Sum",
    cses_url: "https://cses.fi/problemset/task/1082",
    leetcode: [
      { name: "Perfect Number", url: "https://leetcode.com/problems/perfect-number/" },
      { name: "Three Divisors", url: "https://leetcode.com/problems/three-divisors/" },
      { name: "Largest Divisible Subset", url: "https://leetcode.com/problems/largest-divisible-subset/" },
    ]
  },
  "1079": {
    name: "Binomial Coefficients",
    category: "Math – Combinatorics / Pascal's Triangle",
    cses_url: "https://cses.fi/problemset/task/1079",
    leetcode: [
      { name: "Pascal's Triangle", url: "https://leetcode.com/problems/pascals-triangle/" },
      { name: "Pascal's Triangle II", url: "https://leetcode.com/problems/pascals-triangle-ii/" },
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
      { name: "Combinations", url: "https://leetcode.com/problems/combinations/" },
    ]
  },
  "1715": {
    name: "Creating Strings II",
    category: "Math – Permutations with Repetition",
    cses_url: "https://cses.fi/problemset/task/1715",
    leetcode: [
      { name: "Permutations II", url: "https://leetcode.com/problems/permutations-ii/" },
      { name: "Letter Tile Possibilities", url: "https://leetcode.com/problems/letter-tile-possibilities/" },
      { name: "Count Anagrams", url: "https://leetcode.com/problems/count-anagrams/" },
      { name: "Permutation Sequence", url: "https://leetcode.com/problems/permutation-sequence/" },
    ]
  },
  "1716": {
    name: "Distributing Apples",
    category: "Math – Stars and Bars",
    cses_url: "https://cses.fi/problemset/task/1716",
    leetcode: [
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
      { name: "Combination Sum IV", url: "https://leetcode.com/problems/combination-sum-iv/" },
      { name: "Count the Number of Ideal Arrays", url: "https://leetcode.com/problems/count-the-number-of-ideal-arrays/" },
    ]
  },
  "1717": {
    name: "Christmas Party",
    category: "Math – Derangements",
    cses_url: "https://cses.fi/problemset/task/1717",
    leetcode: [
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
      { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/" },
      { name: "Number of Squareful Arrays", url: "https://leetcode.com/problems/number-of-squareful-arrays/" },
    ]
  },
  "1722": {
    name: "Fibonacci Numbers",
    category: "Math – Matrix Exponentiation",
    cses_url: "https://cses.fi/problemset/task/1722",
    leetcode: [
      { name: "Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/" },
      { name: "N-th Tribonacci Number", url: "https://leetcode.com/problems/n-th-tribonacci-number/" },
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
    ]
  },
  "1096": {
    name: "Throwing Dice",
    category: "Math – Matrix Exponentiation for Linear Recurrence",
    cses_url: "https://cses.fi/problemset/task/1096",
    leetcode: [
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Knight Dialer", url: "https://leetcode.com/problems/knight-dialer/" },
      { name: "Domino and Tromino Tiling", url: "https://leetcode.com/problems/domino-and-tromino-tiling/" },
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
    ]
  },
  "1730": {
    name: "Nim Game I",
    category: "Game Theory – Nim",
    cses_url: "https://cses.fi/problemset/task/1730",
    leetcode: [
      { name: "Nim Game", url: "https://leetcode.com/problems/nim-game/" },
      { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/" },
      { name: "Stone Game II", url: "https://leetcode.com/problems/stone-game-ii/" },
      { name: "Stone Game III", url: "https://leetcode.com/problems/stone-game-iii/" },
    ]
  },
  "1729": {
    name: "Stick Game",
    category: "Game Theory – Sprague-Grundy",
    cses_url: "https://cses.fi/problemset/task/1729",
    leetcode: [
      { name: "Nim Game", url: "https://leetcode.com/problems/nim-game/" },
      { name: "Flip Game II", url: "https://leetcode.com/problems/flip-game-ii/" },
      { name: "Predict the Winner", url: "https://leetcode.com/problems/predict-the-winner/" },
      { name: "Cat and Mouse", url: "https://leetcode.com/problems/cat-and-mouse/" },
    ]
  },
  "2064": {
    name: "Bracket Sequences I",
    category: "Math – Catalan Numbers",
    cses_url: "https://cses.fi/problemset/task/2064",
    leetcode: [
      { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/" },
      { name: "Count Different Palindromic Subsequences", url: "https://leetcode.com/problems/count-different-palindromic-subsequences/" },
      { name: "Unique Binary Search Trees", url: "https://leetcode.com/problems/unique-binary-search-trees/" },
    ]
  },

  // ─────────────────────────────────────────────
  // STRING ALGORITHMS
  // ─────────────────────────────────────────────

  "1731": {
    name: "Word Combinations",
    category: "String – Trie / DP",
    cses_url: "https://cses.fi/problemset/task/1731",
    leetcode: [
      { name: "Word Break", url: "https://leetcode.com/problems/word-break/" },
      { name: "Word Break II", url: "https://leetcode.com/problems/word-break-ii/" },
      { name: "Design Add and Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
      { name: "Extra Characters in a String", url: "https://leetcode.com/problems/extra-characters-in-a-string/" },
    ]
  },
  "1753": {
    name: "String Matching",
    category: "String – KMP",
    cses_url: "https://cses.fi/problemset/task/1753",
    leetcode: [
      { name: "Find the Index of the First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
      { name: "Shortest Palindrome", url: "https://leetcode.com/problems/shortest-palindrome/" },
      { name: "Longest Happy Prefix", url: "https://leetcode.com/problems/longest-happy-prefix/" },
      { name: "Repeated String Match", url: "https://leetcode.com/problems/repeated-string-match/" },
    ]
  },
  "1732": {
    name: "Finding Borders",
    category: "String – KMP Failure Function",
    cses_url: "https://cses.fi/problemset/task/1732",
    leetcode: [
      { name: "Repeated Substring Pattern", url: "https://leetcode.com/problems/repeated-substring-pattern/" },
      { name: "Shortest Palindrome", url: "https://leetcode.com/problems/shortest-palindrome/" },
      { name: "Longest Happy Prefix", url: "https://leetcode.com/problems/longest-happy-prefix/" },
      { name: "Find Beautiful Indices in the Given Array", url: "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array/" },
    ]
  },
  "1733": {
    name: "Finding Periods",
    category: "String – KMP Periods",
    cses_url: "https://cses.fi/problemset/task/1733",
    leetcode: [
      { name: "Repeated Substring Pattern", url: "https://leetcode.com/problems/repeated-substring-pattern/" },
      { name: "String Compression", url: "https://leetcode.com/problems/string-compression/" },
      { name: "Repeated String Match", url: "https://leetcode.com/problems/repeated-string-match/" },
    ]
  },
  "1110": {
    name: "Minimal Rotation",
    category: "String – Booth's Algorithm",
    cses_url: "https://cses.fi/problemset/task/1110",
    leetcode: [
      { name: "Rotate String", url: "https://leetcode.com/problems/rotate-string/" },
      { name: "Orderly Queue", url: "https://leetcode.com/problems/orderly-queue/" },
      { name: "Last Substring in Lexicographical Order", url: "https://leetcode.com/problems/last-substring-in-lexicographical-order/" },
    ]
  },
  "1111": {
    name: "Longest Palindrome",
    category: "String – Manacher's Algorithm",
    cses_url: "https://cses.fi/problemset/task/1111",
    leetcode: [
      { name: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { name: "Palindromic Substrings", url: "https://leetcode.com/problems/palindromic-substrings/" },
      { name: "Palindrome Partitioning II", url: "https://leetcode.com/problems/palindrome-partitioning-ii/" },
      { name: "Count Different Palindromic Subsequences", url: "https://leetcode.com/problems/count-different-palindromic-subsequences/" },
    ]
  },
  "2420": {
    name: "Palindrome Queries",
    category: "String – Hashing or Manacher + BIT",
    cses_url: "https://cses.fi/problemset/task/2420",
    leetcode: [
      { name: "Palindrome Pairs", url: "https://leetcode.com/problems/palindrome-pairs/" },
      { name: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { name: "Shortest Palindrome", url: "https://leetcode.com/problems/shortest-palindrome/" },
      { name: "Palindromic Substrings", url: "https://leetcode.com/problems/palindromic-substrings/" },
    ]
  },
  "2102": {
    name: "Finding Patterns",
    category: "String – Aho-Corasick",
    cses_url: "https://cses.fi/problemset/task/2102",
    leetcode: [
      { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/" },
      { name: "Stream of Characters", url: "https://leetcode.com/problems/stream-of-characters/" },
      { name: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/" },
      { name: "Replace Words", url: "https://leetcode.com/problems/replace-words/" },
    ]
  },
  "2103": {
    name: "Counting Patterns",
    category: "String – Aho-Corasick Count",
    cses_url: "https://cses.fi/problemset/task/2103",
    leetcode: [
      { name: "Replace Words", url: "https://leetcode.com/problems/replace-words/" },
      { name: "Map Sum Pairs", url: "https://leetcode.com/problems/map-sum-pairs/" },
      { name: "Search Suggestions System", url: "https://leetcode.com/problems/search-suggestions-system/" },
      { name: "Prefix and Suffix Search", url: "https://leetcode.com/problems/prefix-and-suffix-search/" },
    ]
  },
  "2105": {
    name: "Distinct Substrings",
    category: "String – Suffix Array + LCP",
    cses_url: "https://cses.fi/problemset/task/2105",
    leetcode: [
      { name: "Longest Duplicate Substring", url: "https://leetcode.com/problems/longest-duplicate-substring/" },
      { name: "Distinct Echo Substrings", url: "https://leetcode.com/problems/distinct-echo-substrings/" },
      { name: "Longest Common Subpath", url: "https://leetcode.com/problems/longest-common-subpath/" },
    ]
  },
  "2106": {
    name: "Repeating Substring",
    category: "String – Suffix Array / Binary Search",
    cses_url: "https://cses.fi/problemset/task/2106",
    leetcode: [
      { name: "Longest Duplicate Substring", url: "https://leetcode.com/problems/longest-duplicate-substring/" },
      { name: "Repeated DNA Sequences", url: "https://leetcode.com/problems/repeated-dna-sequences/" },
      { name: "Distinct Echo Substrings", url: "https://leetcode.com/problems/distinct-echo-substrings/" },
    ]
  },

  // ─────────────────────────────────────────────
  // GEOMETRY
  // ─────────────────────────────────────────────

  "2189": {
    name: "Point Location Test",
    category: "Geometry – Cross Product",
    cses_url: "https://cses.fi/problemset/task/2189",
    leetcode: [
      { name: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/" },
      { name: "Minimum Area Rectangle", url: "https://leetcode.com/problems/minimum-area-rectangle/" },
      { name: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
      { name: "Erect the Fence", url: "https://leetcode.com/problems/erect-the-fence/" },
    ]
  },
  "2190": {
    name: "Line Segment Intersection",
    category: "Geometry – Segment Intersection",
    cses_url: "https://cses.fi/problemset/task/2190",
    leetcode: [
      { name: "Minimum Area Rectangle II", url: "https://leetcode.com/problems/minimum-area-rectangle-ii/" },
      { name: "Rectangle Overlap", url: "https://leetcode.com/problems/rectangle-overlap/" },
      { name: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/" },
      { name: "Line Reflection", url: "https://leetcode.com/problems/line-reflection/" },
    ]
  },
  "2191": {
    name: "Polygon Area",
    category: "Geometry – Shoelace Formula",
    cses_url: "https://cses.fi/problemset/task/2191",
    leetcode: [
      { name: "Minimum Area Rectangle", url: "https://leetcode.com/problems/minimum-area-rectangle/" },
      { name: "Rectangle Area", url: "https://leetcode.com/problems/rectangle-area/" },
      { name: "Minimum Area Rectangle II", url: "https://leetcode.com/problems/minimum-area-rectangle-ii/" },
      { name: "Largest Triangle Area", url: "https://leetcode.com/problems/largest-triangle-area/" },
    ]
  },
  "2192": {
    name: "Point in Polygon",
    category: "Geometry – Ray Casting",
    cses_url: "https://cses.fi/problemset/task/2192",
    leetcode: [
      { name: "Robot Bounded In Circle", url: "https://leetcode.com/problems/robot-bounded-in-circle/" },
      { name: "Count Lattice Points Inside a Circle", url: "https://leetcode.com/problems/count-lattice-points-inside-a-circle/" },
      { name: "Minimum Time to Visit All Points", url: "https://leetcode.com/problems/minimum-time-to-visit-all-points/" },
      { name: "Erect the Fence", url: "https://leetcode.com/problems/erect-the-fence/" },
    ]
  },
  "2194": {
    name: "Minimum Euclidean Distance",
    category: "Geometry – Closest Pair of Points",
    cses_url: "https://cses.fi/problemset/task/2194",
    leetcode: [
      { name: "K Closest Points to Origin", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
      { name: "Find K Closest Elements", url: "https://leetcode.com/problems/find-k-closest-elements/" },
      { name: "Minimum Absolute Difference", url: "https://leetcode.com/problems/minimum-absolute-difference/" },
    ]
  },
  "2195": {
    name: "Convex Hull",
    category: "Geometry – Convex Hull",
    cses_url: "https://cses.fi/problemset/task/2195",
    leetcode: [
      { name: "Erect the Fence", url: "https://leetcode.com/problems/erect-the-fence/" },
      { name: "Max Points on a Line", url: "https://leetcode.com/problems/max-points-on-a-line/" },
      { name: "Minimum Area Rectangle II", url: "https://leetcode.com/problems/minimum-area-rectangle-ii/" },
      { name: "Largest Triangle Area", url: "https://leetcode.com/problems/largest-triangle-area/" },
    ]
  },

  // ─────────────────────────────────────────────
  // ADVANCED TECHNIQUES
  // ─────────────────────────────────────────────

  "1628": {
    name: "Meet in the Middle",
    category: "Divide and Conquer – Meet in the Middle",
    cses_url: "https://cses.fi/problemset/task/1628",
    leetcode: [
      { name: "Partition Array Into Two Arrays to Minimize Sum Difference", url: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/" },
      { name: "Count Special Quadruplets", url: "https://leetcode.com/problems/count-special-quadruplets/" },
      { name: "4Sum II", url: "https://leetcode.com/problems/4sum-ii/" },
      { name: "Maximum XOR of Two Numbers in an Array", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
    ]
  },
  "2136": {
    name: "Hamming Distance",
    category: "Bit Manipulation – XOR",
    cses_url: "https://cses.fi/problemset/task/2136",
    leetcode: [
      { name: "Total Hamming Distance", url: "https://leetcode.com/problems/total-hamming-distance/" },
      { name: "Hamming Distance", url: "https://leetcode.com/problems/hamming-distance/" },
      { name: "Single Number", url: "https://leetcode.com/problems/single-number/" },
      { name: "Find the Difference", url: "https://leetcode.com/problems/find-the-difference/" },
    ]
  },
  "2072": {
    name: "Cut and Paste",
    category: "Advanced – Splay Tree / Treap",
    cses_url: "https://cses.fi/problemset/task/2072",
    leetcode: [
      { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
      { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      { name: "Design Skiplist", url: "https://leetcode.com/problems/design-skiplist/" },
      { name: "Insert Delete GetRandom O(1)", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
    ]
  },
  "2073": {
    name: "Substring Reversals",
    category: "Advanced – Implicit Treap",
    cses_url: "https://cses.fi/problemset/task/2073",
    leetcode: [
      { name: "Reverse String", url: "https://leetcode.com/problems/reverse-string/" },
      { name: "Reverse Linked List II", url: "https://leetcode.com/problems/reverse-linked-list-ii/" },
      { name: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      { name: "Reverse Substrings Between Each Pair of Parentheses", url: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/" },
    ]
  },
  "2086": {
    name: "Subarray Squares",
    category: "Advanced – CHT / Divide and Conquer DP",
    cses_url: "https://cses.fi/problemset/task/2086",
    leetcode: [
      { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { name: "Sum of Subarray Minimums", url: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
      { name: "Minimum Cost to Cut a Stick", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" },
      { name: "Minimum Total Space Wasted With K Resizing Operations", url: "https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/" },
    ]
  },
  "2111": {
    name: "Apples and Bananas",
    category: "Advanced – FFT Polynomial Multiplication",
    cses_url: "https://cses.fi/problemset/task/2111",
    leetcode: [
      { name: "Multiply Strings", url: "https://leetcode.com/problems/multiply-strings/" },
      { name: "Complex Number Multiplication", url: "https://leetcode.com/problems/complex-number-multiplication/" },
      { name: "Beautiful Array", url: "https://leetcode.com/problems/beautiful-array/" },
    ]
  },

  // ─────────────────────────────────────────────
  // SLIDING WINDOW PROBLEMS
  // ─────────────────────────────────────────────

  "3220": {
    name: "Sliding Window Sum",
    category: "Sliding Window – Fixed Window Sum",
    cses_url: "https://cses.fi/problemset/task/3220",
    leetcode: [
      { name: "Maximum Average Subarray I", url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
      { name: "Maximum Sum of Distinct Subarrays With Length K", url: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/" },
      { name: "Subarray Product Less Than K", url: "https://leetcode.com/problems/subarray-product-less-than-k/" },
      { name: "Grumpy Bookstore Owner", url: "https://leetcode.com/problems/grumpy-bookstore-owner/" },
    ]
  },
  "3221": {
    name: "Sliding Window Minimum",
    category: "Sliding Window – Monotonic Deque",
    cses_url: "https://cses.fi/problemset/task/3221",
    leetcode: [
      { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
      { name: "Shortest Subarray with Sum at Least K", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
      { name: "Constrained Subsequence Sum", url: "https://leetcode.com/problems/constrained-subsequence-sum/" },
    ]
  },
  "3222": {
    name: "Sliding Window Distinct Values",
    category: "Sliding Window – Variable Window Hash",
    cses_url: "https://cses.fi/problemset/task/3222",
    leetcode: [
      { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Subarrays with K Different Integers", url: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
      { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
      { name: "Longest Substring with At Most Two Distinct Characters", url: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/" },
    ]
  },
  "3224": {
    name: "Sliding Window Mode",
    category: "Sliding Window – Mode / Frequency",
    cses_url: "https://cses.fi/problemset/task/3224",
    leetcode: [
      { name: "Longest Subarray With Maximum Bitwise AND", url: "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/" },
      { name: "Max Consecutive Ones III", url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
      { name: "Fruit Into Baskets", url: "https://leetcode.com/problems/fruit-into-baskets/" },
      { name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", url: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" },
    ]
  },
  "1076": {
    name: "Sliding Window Median",
    category: "Sliding Window – Two Heaps",
    cses_url: "https://cses.fi/problemset/task/1076",
    leetcode: [
      { name: "Sliding Window Median", url: "https://leetcode.com/problems/sliding-window-median/" },
      { name: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { name: "IPO", url: "https://leetcode.com/problems/ipo/" },
      { name: "Meeting Rooms II", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
    ]
  },
  "1077": {
    name: "Sliding Window Cost",
    category: "Sliding Window – Sorted Structure",
    cses_url: "https://cses.fi/problemset/task/1077",
    leetcode: [
      { name: "Minimum Absolute Difference", url: "https://leetcode.com/problems/minimum-absolute-difference/" },
      { name: "Minimum Difference Between Largest and Smallest Value in Three Moves", url: "https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/" },
      { name: "Minimum Moves to Equal Array Elements II", url: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/" },
      { name: "Minimum Absolute Difference in BST", url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/" },
    ]
  },

  // ─────────────────────────────────────────────
  // BITWISE OPERATIONS
  // ─────────────────────────────────────────────

  "1146": {
    name: "Counting Bits",
    category: "Bit Manipulation – Popcount",
    cses_url: "https://cses.fi/problemset/task/1146",
    leetcode: [
      { name: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/" },
      { name: "Number of 1 Bits", url: "https://leetcode.com/problems/number-of-1-bits/" },
      { name: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/" },
      { name: "Power of Two", url: "https://leetcode.com/problems/power-of-two/" },
    ]
  },
  "1655": {
    name: "Maximum Xor Subarray",
    category: "Bit Manipulation – Trie + Prefix XOR",
    cses_url: "https://cses.fi/problemset/task/1655",
    leetcode: [
      { name: "Maximum XOR of Two Numbers in an Array", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
      { name: "Maximum XOR With an Element From Array", url: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/" },
      { name: "Maximum XOR After Operations", url: "https://leetcode.com/problems/maximum-xor-after-operations/" },
      { name: "Count Pairs with XOR in a Range", url: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/" },
    ]
  },
  "2419": {
    name: "Xor Pyramid Peak",
    category: "Bit Manipulation – XOR Patterns",
    cses_url: "https://cses.fi/problemset/task/2419",
    leetcode: [
      { name: "XOR Queries of a Subarray", url: "https://leetcode.com/problems/xor-queries-of-a-subarray/" },
      { name: "Find XOR Sum of All Pairs Bitwise AND", url: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/" },
      { name: "Sum of All Subset XOR Totals", url: "https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
      { name: "Count Triplets That Can Form Two Arrays of Equal XOR", url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/" },
    ]
  },
  "1654": {
    name: "SOS Bit Problem",
    category: "Bit Manipulation – Sum over Subsets DP",
    cses_url: "https://cses.fi/problemset/task/1654",
    leetcode: [
      { name: "Count Triplets That Can Form Two Arrays of Equal XOR", url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/" },
      { name: "Number of Excellent Pairs", url: "https://leetcode.com/problems/number-of-excellent-pairs/" },
      { name: "Sum of All Subset XOR Totals", url: "https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
      { name: "Minimize XOR", url: "https://leetcode.com/problems/minimize-xor/" },
    ]
  },

  // ─────────────────────────────────────────────
  // CONSTRUCTION PROBLEMS
  // ─────────────────────────────────────────────

  "2214": {
    name: "Inverse Inversions",
    category: "Construction – Sequence from Inversion Table",
    cses_url: "https://cses.fi/problemset/task/2214",
    leetcode: [
      { name: "Count of Smaller Numbers After Self", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
      { name: "Reverse Pairs", url: "https://leetcode.com/problems/reverse-pairs/" },
      { name: "Global and Local Inversions", url: "https://leetcode.com/problems/global-and-local-inversions/" },
    ]
  },
  "2215": {
    name: "Monotone Subsequences",
    category: "Construction – Dilworth's Theorem",
    cses_url: "https://cses.fi/problemset/task/2215",
    leetcode: [
      { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { name: "Minimum Number of Arrows to Burst Balloons", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
      { name: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
    ]
  },
  "1697": {
    name: "Chess Tournament",
    category: "Construction – Tournament Scheduling",
    cses_url: "https://cses.fi/problemset/task/1697",
    leetcode: [
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
      { name: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/" },
      { name: "Meeting Rooms", url: "https://leetcode.com/problems/meeting-rooms/" },
      { name: "Find All People With Secret", url: "https://leetcode.com/problems/find-all-people-with-secret/" },
    ]
  },

  // ─────────────────────────────────────────────
  // ADVANCED GRAPH PROBLEMS
  // ─────────────────────────────────────────────

  "1707": {
    name: "Graph Girth",
    category: "Graph – BFS Shortest Cycle",
    cses_url: "https://cses.fi/problemset/task/1707",
    leetcode: [
      { name: "Shortest Cycle in a Graph", url: "https://leetcode.com/problems/shortest-cycle-in-a-graph/" },
      { name: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/" },
      { name: "Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
    ]
  },
  "1677": {
    name: "Network Breakdown",
    category: "Graph – Offline Union-Find (Reverse)",
    cses_url: "https://cses.fi/problemset/task/1677",
    leetcode: [
      { name: "Bricks Falling When Hit", url: "https://leetcode.com/problems/bricks-falling-when-hit/" },
      { name: "Number of Islands II", url: "https://leetcode.com/problems/number-of-islands-ii/" },
      { name: "Making a Large Island", url: "https://leetcode.com/problems/making-a-large-island/" },
      { name: "Number of Connected Components in an Undirected Graph", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
    ]
  },
  "1700": {
    name: "Tree Isomorphism I",
    category: "Tree – Hashing / AHU Algorithm",
    cses_url: "https://cses.fi/problemset/task/1700",
    leetcode: [
      { name: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
      { name: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
      { name: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
      { name: "Count Univalue Subtrees", url: "https://leetcode.com/problems/count-univalue-subtrees/" },
    ]
  },
  "1685": {
    name: "New Flight Routes",
    category: "Graph – SCC DAG + Min Extra Edges",
    cses_url: "https://cses.fi/problemset/task/1685",
    leetcode: [
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Minimum Number of Vertices to Reach All Nodes", url: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/" },
      { name: "Number of Provinces", url: "https://leetcode.com/problems/number-of-provinces/" },
      { name: "Find Eventual Safe States", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
    ]
  },

  // ─────────────────────────────────────────────
  // ADDITIONAL PROBLEMS I
  // ─────────────────────────────────────────────

  "1087": {
    name: "Shortest Subsequence",
    category: "Greedy – Shortest Sequence Not Subsequence",
    cses_url: "https://cses.fi/problemset/task/1087",
    leetcode: [
      { name: "Is Subsequence", url: "https://leetcode.com/problems/is-subsequence/" },
      { name: "Shortest Way to Form String", url: "https://leetcode.com/problems/shortest-way-to-form-string/" },
      { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/" },
      { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/" },
    ]
  },
  "1670": {
    name: "Swap Game",
    category: "Game Theory / Observation",
    cses_url: "https://cses.fi/problemset/task/1670",
    leetcode: [
      { name: "Minimum Number of Swaps to Make the String Balanced", url: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/" },
      { name: "Couples Holding Hands", url: "https://leetcode.com/problems/couples-holding-hands/" },
      { name: "Minimum Adjacent Swaps for K Consecutive Ones", url: "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/" },
      { name: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
    ]
  },
  "2422": {
    name: "Multiplication Table",
    category: "Binary Search",
    cses_url: "https://cses.fi/problemset/task/2422",
    leetcode: [
      { name: "Kth Smallest Number in Multiplication Table", url: "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/" },
      { name: "Find the Kth Smallest Sum of a Matrix With Sorted Rows", url: "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/" },
      { name: "Kth Smallest Element in a Sorted Matrix", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },
      { name: "K-th Smallest Prime Fraction", url: "https://leetcode.com/problems/k-th-smallest-prime-fraction/" },
    ]
  },
  "1142": {
    name: "Advertisement",
    category: "Monotonic Stack – Largest Rectangle",
    cses_url: "https://cses.fi/problemset/task/1142",
    leetcode: [
      { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { name: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/" },
      { name: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" },
      { name: "Sum of Subarray Minimums", url: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
    ]
  },
  "1188": {
    name: "Bit Inversions",
    category: "Set / Difference Array",
    cses_url: "https://cses.fi/problemset/task/1188",
    leetcode: [
      { name: "Minimum Number of K Consecutive Bit Flips", url: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/" },
      { name: "Flip String to Monotone Increasing", url: "https://leetcode.com/problems/flip-string-to-monotone-increasing/" },
      { name: "Bulb Switcher", url: "https://leetcode.com/problems/bulb-switcher/" },
      { name: "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix", url: "https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/" },
    ]
  },
  "1147": {
    name: "Maximum Building I",
    category: "Math / Greedy",
    cses_url: "https://cses.fi/problemset/task/1147",
    leetcode: [
      { name: "Maximum Building Height", url: "https://leetcode.com/problems/maximum-building-height/" },
      { name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" },
      { name: "Jump Game IV", url: "https://leetcode.com/problems/jump-game-iv/" },
      { name: "Minimum Jumps to Reach Home", url: "https://leetcode.com/problems/minimum-jumps-to-reach-home/" },
    ]
  },
  "1191": {
    name: "Cyclic Array",
    category: "Array – Cyclic Shift",
    cses_url: "https://cses.fi/problemset/task/1191",
    leetcode: [
      { name: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/" },
      { name: "Circular Array Loop", url: "https://leetcode.com/problems/circular-array-loop/" },
      { name: "Maximum Sum Circular Subarray", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
      { name: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/" },
    ]
  },

  // ─────────────────────────────────────────────
  // ADDITIONAL PROBLEMS II
  // ─────────────────────────────────────────────

  "2132": {
    name: "Increasing Array II",
    category: "DP / Greedy – Non-Decreasing with Costs",
    cses_url: "https://cses.fi/problemset/task/2132",
    leetcode: [
      { name: "Non-decreasing Array", url: "https://leetcode.com/problems/non-decreasing-array/" },
      { name: "Minimum Number of Moves to Make Palindrome", url: "https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/" },
    ]
  },
  "1189": {
    name: "Food Division",
    category: "Circular Array – Prefix Sum",
    cses_url: "https://cses.fi/problemset/task/1189",
    leetcode: [
      { name: "Gas Station", url: "https://leetcode.com/problems/gas-station/" },
      { name: "Circular Array Loop", url: "https://leetcode.com/problems/circular-array-loop/" },
    ]
  },
  "1698": {
    name: "Swap Round Sorting",
    category: "Permutation Cycles",
    cses_url: "https://cses.fi/problemset/task/1698",
    leetcode: [
      { name: "Minimum Swaps to Sort", url: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/" },
      { name: "Couples Holding Hands", url: "https://leetcode.com/problems/couples-holding-hands/" },
    ]
  },
  "1706": {
    name: "School Excursion",
    category: "Graph – Bipartite / Greedy",
    cses_url: "https://cses.fi/problemset/task/1706",
    leetcode: [
      { name: "Is Graph Bipartite?", url: "https://leetcode.com/problems/is-graph-bipartite/" },
      { name: "Possible Bipartition", url: "https://leetcode.com/problems/possible-bipartition/" },
    ]
  },
  "1709": {
    name: "Coin Grid",
    category: "Graph – Bipartite Matching / Min Vertex Cover",
    cses_url: "https://cses.fi/problemset/task/1709",
    leetcode: [
      { name: "Maximum Number of Non-Overlapping Palindrome Substrings", url: "https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/" },
      { name: "Minimum Path Cover", url: "https://leetcode.com/problems/unique-paths/" },
    ]
  },
  "2174": {
    name: "Removing Digits II",
    category: "DP – BFS on Number",
    cses_url: "https://cses.fi/problemset/task/2174",
    leetcode: [
      { name: "Minimum Moves to Reach Target Score", url: "https://leetcode.com/problems/minimum-moves-to-reach-target-score/" },
      { name: "Delete and Earn", url: "https://leetcode.com/problems/delete-and-earn/" },
    ]
  },
  "1159": {
    name: "Book Shop II",
    category: "DP – Bounded Knapsack",
    cses_url: "https://cses.fi/problemset/task/1159",
    leetcode: [
      { name: "Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/" },
      { name: "Ones and Zeroes", url: "https://leetcode.com/problems/ones-and-zeroes/" },
    ]
  },
  "1148": {
    name: "Maximum Building II",
    category: "Geometry – Monotonic Stack",
    cses_url: "https://cses.fi/problemset/task/1148",
    leetcode: [
      { name: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/" },
      { name: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    ]
  },
  "1161": {
    name: "Stick Divisions",
    category: "Greedy – Huffman Coding / Min Cost",
    cses_url: "https://cses.fi/problemset/task/1161",
    leetcode: [
      { name: "Minimum Cost to Connect Sticks", url: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/" },
      { name: "Minimum Cost Tree From Leaf Values", url: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/" },
    ]
  },
  "1665": {
    name: "Coding Company",
    category: "Bitmask DP",
    cses_url: "https://cses.fi/problemset/task/1665",
    leetcode: [
      { name: "Find Minimum Time to Finish All Jobs", url: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/" },
      { name: "Fair Distribution of Cookies", url: "https://leetcode.com/problems/fair-distribution-of-cookies/" },
    ]
  },

  // ─────────────────────────────────────────────
  // ADDITIONAL MAPPINGS
  // ─────────────────────────────────────────────

  "2065": {
    name: "Bracket Sequences II",
    category: "Math – Catalan Numbers with Restricted Positions",
    cses_url: "https://cses.fi/problemset/task/2065",
    leetcode: [
      { name: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/" },
      { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "Minimum Add to Make Parentheses Valid", url: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
    ]
  },

  "2080": {
    name: "Grid Paths II",
    category: "DP – Grid Paths with Obstacles",
    cses_url: "https://cses.fi/problemset/task/2080",
    leetcode: [
      { name: "Unique Paths II", url: "https://leetcode.com/problems/unique-paths-ii/" },
      { name: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
      { name: "Dungeon Game", url: "https://leetcode.com/problems/dungeon-game/" },
    ]
  },

  "1730": {
    name: "Nim Game II",
    category: "Game Theory – Multi-Pile Nim / Sprague-Grundy",
    cses_url: "https://cses.fi/problemset/task/1730",
    leetcode: [
      { name: "Nim Game", url: "https://leetcode.com/problems/nim-game/" },
      { name: "Stone Game II", url: "https://leetcode.com/problems/stone-game-ii/" },
      { name: "Stone Game III", url: "https://leetcode.com/problems/stone-game-iii/" },
    ]
  },

  "2416": {
    name: "Counting Sequences",
    category: "DP – Counting Valid Sequences",
    cses_url: "https://cses.fi/problemset/task/2416",
    leetcode: [
      { name: "Count Vowels Permutation", url: "https://leetcode.com/problems/count-vowels-permutation/" },
      { name: "Student Attendance Record II", url: "https://leetcode.com/problems/student-attendance-record-ii/" },
      { name: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/" },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper utilities
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Get all problems in a given category keyword (case-insensitive substring match)
 * @param {string} keyword
 * @returns {Array<{id, name, category, cses_url, leetcode}>}
 */
function getProblemsByCategory(keyword) {
  return Object.entries(csesLeetCodeMapping)
    .filter(([, v]) => v.category.toLowerCase().includes(keyword.toLowerCase()))
    .map(([id, v]) => ({ id, ...v }));
}

/**
 * Lookup a single CSES problem by task ID
 * @param {string|number} id
 */
function getProblem(id) {
  return csesLeetCodeMapping[String(id)] || null;
}

// Make globally available for browser extension
if (typeof window !== "undefined") {
  window.csesLeetCodeMapping = csesLeetCodeMapping;
  window.leetCodeMapping = csesLeetCodeMapping; // backward-compat alias
}

// Export for Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { csesLeetCodeMapping, getProblem, getProblemsByCategory };
}