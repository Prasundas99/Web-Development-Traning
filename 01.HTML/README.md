
# HTML NOTES

HTML(Hyper Text Markup Language) is the language of the web. HTML tags are used for defining the layout of the page. With the understanding of HTML tags and how to put them together, here you can learn how to walk through the stepping stones to build beautiful websites easily.    


## Table of Contents
- [Introduction to HTML](##Introduction-to-HTML)
- [Syntax & Structure](##Syntax-&-Structure)
- [HTML Tags](##HTML-Tags)
  1. [Heading Tags](###Heading-Tags)
  2. [Paragraph Tag](###Paragraph-Tag)
  3. [Anchor Tag](###Anchor-Tag)
  4. [Br Tag](###Br-Tag)
  5. [Img Tag](###Img-Tag)
  6. [Video Tag](###Video-Tag)
  7. [Bold, Italic, Underlining Tag](###Bold,-Italic,-Underlining-Tag)
  8. [Hr Tag](###Hr-Tag)
  9. [Subscript & Superscript Tag](###Subscript-&-Superscript-Tag)
  10. [Div Tag](###Div-Tag)
  11. [Span Tag](###Span-Tag)
  12. [List Tags](###List-Tags)
  13. [Table Tags](###Table-Tags)
  14. [Form Tags](###Form-Tags)
- [A Complete HTML Example](##A-Complete-HTML-Example)
- [End is the new Beginning](##End-is-the-new-Beginning)


## Introduction to HTML
HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is a markup language used by the browser to manipulate text, images, and other content, in order to display it in the required format. 

HTML was created by Tim Berners-Lee in 1991. The first-ever version of HTML was HTML 1.0, but the first standard version was HTML 2.0, published in 1995.

Before going deep into the topic, you don't need any previous HTML knowledge, but you should have a little basic familiarity with using computers and using the web passively.

Next you'll see how a typical HTML page is structured and how an HTML element is processed, and explain other important basic language features. So now, let's see how the syntax looks.

## Syntax & Structure
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## HTML Tags
### **1. Heading Tags**

  There are six heading elements: <h1\>, <h2\>, <h3\>, <h4\>, <h5\>, and <h6\>. Each element represents a different level of content in the document; <h1\> represents the main heading, <h2\> represents subheadings, <h3\> represents sub-subheadings, and so on.
 ```HTML
    <h1>Most Important Heading</h1>
    <h2>2nd Most Important Heading</h2>
    <h3>3rd Most Important Heading</h3>
    <h4>4th Most Important Heading</h4>
    <h5>5th Most Important Heading</h5>
    <h6>6th Most Important Heading</h6>
 ```
   
### **2. Paragraph Tags**

In HTML, each paragraph has to be wrapped in a <p\> element, like shown below:
```HTML
     <p>This is a paragraph. A paragraph is a series of sentences on a specific point or topic. A well written paragraph must have a topic sentence which states the main idea: what the paragraph is about. While some say the topic sentence can be anywhere in the paragraph, it is best to put it as the first sentence in a paragraph. </p>
```

### **3. Anchor Tag**

Hyperlinks allow us to link documents to other documents or resources, link to specific parts of documents, or make apps available at a web address. A basic link is created by wrapping the text or other content, inside an <a\> element and using the href attribute, also known as a Hypertext Reference.
```HTML
      <a href="https://wikipedia.com/">Click Me, I am a link</a>
```

### **4. Br Tag**

The <br\> tag in HTML document is used to create a line break in a text.
```HTML
     <p>If you want to break a line <br> in a paragraph, <br> use the BR tag <br> in your HTML.
```

### **5. Img Tag**

The <img\> tag is used to embed an image in an HTML page.

The <img\> tag has two required attributes:

*src* - Specifies the path to the image;
*alt* - Specifies an alternate text for the image, if the image for some reason cannot be displayed.
```HTML
<img src="https://imgur.com/iEsnSIr">
```

### **6. Video Tag**

The <video\> tag is used to embed video content in a document, such as a movie clip or other video streams.
```HTML
<video src="video.mp4"></video>
```

### **7. Bold, Italic, Underlining Tag**

The HTML <b\> element defines bold text. The HTML <i\> element defines a part of text in italic. The <u\> tag in HTML stands for underline, and it’s used to underline the text enclosed within the <u\> tag. 
```HTML
    <b>This is for bold</b>
    <i>This is for italic</i>
    <u>This is for Underlining</u>
```

### **8. Hr Tag**

The <hr\> tag in HTML stands for horizontal rule and is used to insert a horizontal rule or a thematic break in an HTML page to divide or separate document sections.
```HTML
<p>There is a horizontal rule below this paragraph.</p>
<hr>     
<p>This is a horizontal rule above this paragraph.</p>
``` 

### **9. Subscript & Superscript Tag**

The <sub\> tag is used to add a subscript text to the HTML document. The <sub\> tag defines the subscript text. Subscript text appears half a character below the normal line and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O to be written as H2O.

The <sup\> tag is used to add a superscript text to the HTML document. The <sup\> tag defines the superscript text. Superscript text appears half a character above the normal line and is sometimes rendered in a smaller font.
```HTML
     a<sub>1</sub>
     2<sup>n</sup>
```

### **10. Div Tag**

The div tag is known as Division tag. The div tag is used in HTML to make divisions of content in the web page like (text, images, header, footer, navigation bar, etc). Div tag has both open(<div\>) and closing (</div\>) tag and it is mandatory to close the tag. The Div is the most usable tag in web development because it helps us to separate out data in the web page.
```HTML
<div>
    <h3> HTML First Heading</h3>
    <p>First Paragraph</p>
</div>
<div>
    <h3> HTML Second Heading</h3>
    <p>Second Paragraph</p>
</div>
```

### **11. Span Tag**

The HTML <span\> element is a generic inline container for inline elements and content.  The <span\> tag is used for the grouping of inline elements & this tag does not make any visual change by itself. <span\> is very similar to the <div\> tag, but div is a block-level tag and span is an inline tag.
```HTML
<span> I am Span Tag </span>
```

### **12. List Tags**

HTML Lists are used to specify lists of information. All lists may contain one or more list elements. There are two different types of HTML lists:

- *Ordered List or Numbered List (ol)*
    ```HTML
    <ol>
    <li>List Element 1</li>
    <li>List Element 2</li>
    <li>List Element 3</li>
    </ol>
    ```

- *Unordered List or Bulleted List (ul)*
    ```HTML
    <ul>
    <li> Home </li>
    <li> About </li>
    <li> Contacts </li>
    </ul>
    ```

### **13. Table Tags**

HTML tables allow web developers to arrange data into rows and columns. Each table row starts with a <tr\> and ends with a </tr\> tag. Each table cell is defined by a <td\> and a </td\> tag. Sometimes you want your cells to be table header cells. In those cases use the <th\> tag instead of the <td\> tag.
```HTML
 <div>
 <table>
 <caption> Highest Marks </caption>   <!--To add caption-->
    <thead>                           <!--To wrap table head-->
         <tr>                         <!--Table row-->
           <th> S. No.  </th>         <!--Table heading-->
           <th> Student Name  </th>
           <th> Highest Marks </th>
         </tr>
    </thead>
    <tbody>                           <!--To wrap table body-->
         <tr>
            <td> 1 </td>              <!--Table data-->
            <td> Argha </td>          
            <td> 95 </td>
        </tr>
    </tbody>
</table>
</div>
```

### **14. Form Tags**

<form\> is a HTML element to collect input data with containing interactive controls. It provides facilities to input text, number, values, email, password, and control fields such as checkboxes, radio buttons, submit buttons, etc. Forms are created by placing input fields within paragraphs, preformatted text, lists and tables. This gives considerable flexibility in designing the layout of forms. 

<label\>: It defines label for <form\> elements.

<input\> is used to get input data from the form in various types such as text, password, email, etc by changing its type.

<button\> defines a clickable button to control other elements or execute a functionality.

<select\> is used to create a drop-down list. 

<option\> is used to define options in a drop-down list.

```HTML
<form>
    <input type="text" placeholder="Enter Your Name">                  <!--To take input from the user-->
    <label for="number1">                                              <!--To provide usability improvement-->
        <input type="radio" value="select1" name="select">Selection 1
        <input type="radio" value="select2" name="select">Selection 2
    </label><br>
    <select name="company" id="company">                               <!--For selection from multiple-->
        <option value="none">Select Your Company</option>              
        <option value="mnc1">Wipro</option>                            <!--Selectable quantities-->
        <option value="mnc2">TCS</option>
        <option value="mnc3">Cognigent</option>
    </select>
</form>
```
## A Complete HTML Example

With this document, we can understand how to put all the tags together and use them effectively. Moreover, here we can see how to link our CSS or JavaScript file with HTML document. Here comes the final code:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="theme-color" content="#ee414d" />
    <title>Html Tutorial</title>
    <!--External css-->
    <link rel="stylesheet" href="style.css">

    <!--Internal style-->
    <style>
        body {background-color: powderblue;}
        h1   {color: blue;}
        p    {color: red;}
    </style>
</head>
<body>

<!--Inline Styling-->
<h1 style="color: red;"></h1>

<h1></h1>
<h2></h2>    
<h3></h3>
<h4></h4>
<h5 class="one"></h5>
<h6 id="id"></h6>
<p class="one"></p>

<div></div>

<br>
<hr>

<!--Img tag-->
<img src="" alt="" >

    
<!--Form-->
<form action="">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
</form> 




<!---Including Js file exterbnal-->    
<script src="index.js"> </script>

<!--Inline Js-->    
<script> 
alert("Hello")
</script>
</script>
</body>
</html>
```  
## End is the new Beginning

Now, we've learned pretty much all about HTML. You've accomplished something that will make you shine for the rest of your life. Hope you've loved the contents and it's been helpful to you.

Thank you for reading and staying all along.
