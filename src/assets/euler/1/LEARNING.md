This was the very first problem in the **Eulers series**. Being the very first problem I was quite enthusiastic about solving the first problem. The problem statement was quite simple and straightforward. I was supposed to find the sum of all natural number below **N** which
are multiple of **3** and **5**. Without any delay, I directly went for coding. The approach was quite simple, loop through all the numbers below **N** and if the number is divisible by **3** or **5**, I was adding that number to my final result, seem's legit! isn't it. But wait here's the catch,
My test cases begin to fail I was seeing the timeout error and soon I realize the depth of this simple question.


I realize that if I supposed to go ahead from here then this simple looping through all numbers (brute force) is not going to take me
anywhere. And thus Euler Project force me to take a pen and paper and I was back to old school days in no time. This was the time I realize that my decision to solve Euler Project was now going on the right track and I started enjoying it.


Just writing down the first n multiples of 3 and 5 I realize that this is actually an Arithematic sum of these number and I got the solution
to my timeout problem. But wait! Euler still has some surprise left for me in his plate, my answers were wrong and I was again back to
start. After stumbling for a while I notice that while I was adding multiple of 3 and 5 there are some numbers which are common in both, arriving at this conclusion was easy as the first few numbers would easily catch your attention.  After listing all those numbers on paper, I was clear that they are just the multiple of 15 and on the next tick of the clock, I was knowing what need's to be done. I subtracted these sum from my final answer and my results were accurate now. But wait! why did the test case 2 and 3 fail!!


This time it was hacker rank how was holding the surprise since the beginning but got my attention at this stage. Being clueless I landed
on the discussion page and got my answer, Integer was causing the problem here, the answer was larger than what an 'integer' is supposed to hold. I changed integer to long and it worked like a charm, all tests got passed and so my first attempt to solve Euler come's to an end.
