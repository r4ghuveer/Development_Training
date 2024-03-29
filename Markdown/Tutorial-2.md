#  **Tuturial 2 IWP**
# **Registration number : - 20BCE10584**

***Question***

1) On click of a button, welcome message should display. 

2) There are three input textboxes. On click of the input box , the background colour should change to yellow. ( Hint : use this ) 

3) Remove and add different style to the element by using JQuery. Create two style properties and by default apply first one to one element. On click of a button change the elements associated property to other style. 

4) Toggle the style properties of the element on click 

5) Create one button and a textbox. On click of the button the text written in text box should display on the button. 

<br>

<p style="font-size:20px ">Answer :-</p>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial - 2</title>
</head>

<style>
    .container{
        padding: 50px;
        border: 2px solid black;
        width: 300px;
    }
    #welcome-msg {
        position: fixed;
        font-size: 20px;
        background-color: rgb(241, 186, 186);
        margin-left: 180px;
        border: 2px solid rgb(239, 159, 159);
    } 
    #addandremove{
        margin-top: 40px;
    }
    .add{
        border: 1px solid palevioletred;
        background-color: lightpink;
        border-radius: 2px;
        display: block;
    }
    .style1 {
        color: red;
        font-size: 20px;
        background-color: antiquewhite;
        padding: 10px;
    }
    #my-element{
        margin-top: 40px;
    }
    .style2 {
        color: blue;
        font-size: 20px;
        background-color: beige;
        padding: 10px;
    }
</style>

<body>
    <div class="container">
        <div id="welcome-msg" style="padding-top: 40px; display:none; color: rgb(11, 11, 11); ">Welcome!</div>
        <button id="welcome-btn" style="display: block;">Click me!</button>
        <p>1) Welcome Message ! </p>
        
        <div id="boxes" style="padding-top: 40px;">
            <input type="text" class="input-box">
            <input type="text" class="input-box">
            <input type="text" class="input-box">
        </div>
        <p>2) On click color change to yellow</p>

        <div id="addandremove" >Add / Remove</div>
        <button id="addbutton" style="display: inline-block;">Add</button>
        <button id="removebutton">Remove</button>
        <p>3) Add and Remove style class</p>

        <div id="my-element" class="style1">My Element</div>
        <button id="style-btn" style="display: block;">Change Style</button>
        <p>4) Toggle Style property</p>

        <div>
            <input type="text" id="text_input" style="display: block;">
            <button onclick="textonbut()" id="but1">↓</button>
        </div>
        <p>5) Written text on input should display on button</p>

    </div>

    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        
    <!-- Welcome -->
        <script>
            $(document).ready(function() {
                $("#welcome-btn").click(function() {
                    $("#welcome-msg").fadeIn("slow");
                });
            });

    // Add and remove
        $(document).ready(function() {
        $('#addbutton').click(function(){
            $("#addandremove").addClass("add");
        });
        $('#removebutton').click(function(){
            $("#addandremove").removeClass("add");
        });
    });
            
    // Input boxes
        const inputBoxes = document.querySelectorAll(".input-box");
        inputBoxes.forEach(function(inputBox) {
        inputBox.addEventListener("click", function() {
            if(this.style.backgroundColor==="yellow"){
                this.style.backgroundColor="white";
            }
            else{
                this.style.backgroundColor = "yellow";
            }
                });
        });
            
    // Toggle the style properties
    $("#style-btn").click(function() {
        $("#my-element").toggleClass("style1 style2");
        });
            
    // Text on button
    $('#but1').click(function(){
        if($('#text_input').val()==""){
            $('#but1').text("↓");
        }else{
            let values = $('#text_input').val();
            $('#but1').text(values);
        }
    })
</script>
</body>
</html>
```
<br>

---

<p style="font-size:20px ">Answer :-</p>

This result shows

1) Welcome message
2) Input tag highlight
3) Add and remove style class

<img src="img1.png" height="600" width="486">

---

This result shows

4) Toggle Style properties
5) Copy content of input tag in button's text

<img src="img2.png" height="600" width="486">

---
---