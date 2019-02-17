---
home: true
heroImage: /assets/img/logo.png
heroText: A23187
tagline: Messi | BreakingBad | Coder | Scuter
footer: MIT Licensed | Copyright © 2019-present A23187
---
# LeetCode每日一题 只出现一次的数字
## [题目](https://leetcode-cn.com/problems/single-number/description/)
> 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。  
说明：  
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？  
示例 1:  
输入: [2,2,1]  
输出: 1  
示例 2:  
输入: [4,1,2,1,2]  
输出: 4  

## 思路
看到这道题的时候，我的想法就是异或，可能因为之前了解过异或加密解密算法。我们先看一下异或的性质。  
1. 满足交换律：A^B = B^A
2. 满足结合律：(A^B)^C = A^(B^C)
3. 0^A = A
4. A^A = 0

![思路](http://img04.sogoucdn.com/app/a/100520146/445e6445a5537a60ae4fa3c44e7aab58)


## 代码
```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int d = 0;
        for(int i:nums) {
            d ^= i;
        }
        return d;
    }
};
```
## 最后
[更多LeetCode每日一题](https://zhuanlan.zhihu.com/p/37495638)