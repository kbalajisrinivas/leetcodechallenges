/*
3 towers

 main_tower -- 1 2 3 4 5
 2nd_tower -- []
 3rd_tower -- []

 move 1 from main and put it in 2nd
 move 2 from main and put it in 3rd

 can we put 3 anywhere? no?
 now we need to see which one has minimum and put it back in the other tower
 1 is min, so put 1 in 3rd tower

 main -- 3, 4, 5
 2nd -- []
 3rd -- 1,2

 now 3 can be put in the second tower
 can 4th be put anywhere? no
 
 take the minimum of the elements and put back in main tower
 main 1 4 5
 2 - 3
 3 - 2
 put 2 in 2nd tower

 main -- 5
 2 - 1 2 3
 3 -- 4

 put 1 (min) back on 3rd tower
 put 2 in main
 put 1 main
 main -- 1 2 5
 2 -- 3
 3 -- 4

 put 3 min 3
 


*/