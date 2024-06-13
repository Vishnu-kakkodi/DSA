function previousSmallerElement(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = nums[stack[stack.length - 1]];
        }
        stack.push(i);
    }

    return result;
}

// Example usage:
const nums = [2, 1, 2, 4, 3];
console.log(previousSmallerElement(nums));