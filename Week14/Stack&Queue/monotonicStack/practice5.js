function nextGreaterElement(nums){
    const result = new Array(nums.length).fill(-1)
    const stack = []
    for(let i=0; i<nums.length; i++){
        while(stack.length>0&&nums[stack[stack.length-1]]<nums[i]){
            result[stack.pop()] = nums[i]
        }
        stack.push(i)
    }
    return result
}

const nums = [2,1,2,4,3]
console.log(nextGreaterElement(nums));