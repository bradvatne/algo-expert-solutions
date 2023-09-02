/*
You are given an array of numbers called nums and a target sum called targetSum. 
Your task is to write a TypeScript function called two_number_sum that finds and returns an array containing two distinct numbers from the nums array that add up to the targetSum. 
If there are multiple valid answers, return any of them.
*/


const two_number_sum = (nums: number[], target: number): number[] => {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let currentTarget = target - nums[i];
    if (numsMap.has(currentTarget)) {
      return [i, numsMap.get(currentTarget)];
    } else {
      numsMap.set(nums[i], i)
    }
  }
  return []
}