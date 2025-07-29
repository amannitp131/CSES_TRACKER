// CSES to LeetCode Problem Mapping
const csesLeetcodeMapping = {
    // Introductory Problems
    "1068": { // Weird Algorithm
        name: "Weird Algorithm",
        category: "Simulation (Collatz Conjecture)",
        leetcode: "Not mentioned"
    },
    "1083": { // Missing Number
        name: "Missing Number",
        category: "Math-based Array Pattern",
        leetcode: "Missing Number, First Missing Positive, Set Mismatch, Find the Duplicate Number, Find All Numbers Disappeared in an Array"
    },
    "1069": { // Repetitions
        name: "Repetitions",
        category: "Longest Consecutive Repeating Characters",
        leetcode: "Max Consecutive Ones, Consecutive Characters, Decompress Run-Length Encoded List, Max Consecutive Ones III"
    },
    "1094": { // Increasing Array
        name: "Increasing Array",
        category: "Make Array Non-Decreasing with Minimum Operations",
        leetcode: "Best Time to Buy and Sell Stock, Minimum Time to Make Rope Colorful, Ways to Make a Fair Array"
    },
    "1070": { // Permutations
        name: "Permutations",
        category: "Constructive Algorithm",
        leetcode: "Not mentioned"
    },
    "1071": { // Number Spiral
        name: "Number Spiral",
        category: "Mathematical Pattern Recognition",
        leetcode: "Not mentioned"
    },
    "1072": { // Two Knights
        name: "Two Knights",
        category: "Combinatorics",
        leetcode: "Not mentioned"
    },
    "1092": { // Two Sets
        name: "Two Sets",
        category: "Subset Sum Construction",
        leetcode: "Not mentioned"
    },
    // Add more mappings for other problems as needed
    "default": {
        name: "Unknown Problem",
        category: "Algorithm Practice",
        leetcode: "Not mentioned"
    }
};

// Export for use in content script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = csesLeetcodeMapping;
}
