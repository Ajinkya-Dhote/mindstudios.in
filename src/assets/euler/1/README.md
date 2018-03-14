## Project Euler 1: Multiples of 3 and 5

If we list all the natural numbers below **10** that are multiples of **3** or **5** , we get **3, 5, 6** and **9** . The sum of
these multiples is **23**.


Find the sum of all the multiples of **3** or **5** below **N**.


### Input Format
First line contains **_T_** that denotes the number of test cases. This is followed by **_T_** lines, each containing an
integer, **_N_**.


### Constraints
```
1 <= T <= 10^5
1 <= N <= 10^9
```
### Output Format
For each test case, print an integer that denotes the sum of all the multiples of **3** or **5** below **N**.


### Sample Input 0
```
2
10
100
```

### Sample Output 0
```
23
2318
```


### Explanation 0
For **_N_ = 10**, if we list all the natural numbers below **10** that are multiples of **3** or **5** , we get **3, 5, 6** and **9** . The sum of these multiples is **23**.


Similarly for **_N_ = 100**, we get **2318**.

## Solution

```
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for(int a0 = 0; a0 < t; a0++){
            long n = in.nextInt();
            long ans = calculateSum(n);
            System.out.println(ans);
        }
    }

    static long calculateSum(long num) {

        long n = (num-1)/3;
        long sumMultipleOf3 = arithematicSum(n, 3);

        n = (num-1)/5;
        long sumMultipleOf5 = arithematicSum(n, 5);

        n = (num-1)/15;
        long sumMultipleOf15 = arithematicSum(n, 15);

        return sumMultipleOf3 + sumMultipleOf5 - sumMultipleOf15;
    }

    static long arithematicSum(long n, int k) {
        return ((n*(n+1))/2)*k;
    }
}
```
