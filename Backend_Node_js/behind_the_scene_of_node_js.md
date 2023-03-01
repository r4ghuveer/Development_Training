# Behind the scene of node js

1) When a callback function is called it is handle by one thred of the system **Event Loop**
    1.1) But if their are more callbacks or the callback have a larger file to read
         it uses sends it to the 'worker pool' which basically is place where rest of 
         a system's threads are used to handle the callbacks
    1.2) And when worker pool have complete its job, it triggers a callback which ultimately joins the **Event Loop**
    