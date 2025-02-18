function mergeIntervals(intervals) {
    if (intervals.length === 0){
        return [];
    } 

    //Sort intervals based on start value
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize with first interval
    let merged = [intervals[0]]; 

    for (let i = 1; i < intervals.length; i++) {
        let prev = merged[merged.length - 1];
        let curr = intervals[i];

        // Step 2: Check if intervals overlap
        if (prev[1] >= curr[0]) {
            // Merge overlapping intervals
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            // If no overlap, add new interval
            merged.push(curr);
        }
    }

    return merged;
}

// Example Usage:
let intervals = [
    [1, 3],
    [8, 10],
    [2, 6],
    [16, 16],
    [16,20]
];

console.log(mergeIntervals(intervals));
