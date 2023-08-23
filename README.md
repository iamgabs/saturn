# SaturnSS doc

Hello, world! 

Here is a presentation about how to start, master and contribute with SaturnSS.

SaturnSS is CSS Framework, builted with SCSS, similar to another frameworks like Tailwind and Bootstrap. Saturn is easy to use directly into html by simple class names.

- **How to connect with SatrunSS and SaturnSSThemes**
    
    You can connect with SaturnSS by setting the main file location (from github) to your code (by web connection), download the file from github and download the library from nodejs.
    
    ## **1st way - Connect by web**
    
    **1º - copy the css url code from SaturnSS repository on github** 
    
    https://g[ithub.com/iamgabs/saturn/blob/main/src/css/index.css](https://github.com/iamgabs/saturn/blob/main/src/css/index.css) 
    
    **2º - set the link in your html code:**
    
    ```html
    <link rel="stylesheet" href="https://g[ithub.com/iamgabs/saturn/blob/main/src/css/index.css](https://github.com/iamgabs/saturn/blob/main/src/css/index.css)">
    ```
    
    ## **2nd way - Download the file**
    
    **1º - go to github and download the css main code into the project’s folder.** 
    
    https://g[ithub.com/iamgabs/saturn/blob/main/src/css/index.css](https://github.com/iamgabs/saturn/blob/main/src/css/index.css) 
    
    **2º - after, connect like a simple css code** 
    
    ```html
    <link rel="stylesheet" href="./css/index.css">
    ```
    
    ## **3rd way - Install using by NodeJS**
    
    **1º - Install NodeJS version (min 14v or upper)**
    
    **2º - Go to your project folder and start a npm project:**
    
    ```bash
    npm init -y 
    ```
    
    **3º - Install the library by running:**
    
    ```bash
    npm install SaturnSS || npm install saturnss
    ```
    
    **4º - Connect by the url (all files are inside node modules packages)**
    
    ```html
    <link rel="stylesheet" href="saturnss/dist/index.css">
    ```
    
    **WARNING:** You may need to use your own css file to set some changes or to configure new components, of course, to do that, you need to link/import your file bellow saturnss file. Otherwise saturnss can subscribe somethings in your file and will not work.
    
    ```html
    <!-- First SaturnSS code -->
    <link rel="stylesheet" href="saturnss/dist/index.css">
    
    <!-- After all css files you need (if you need it XD)-->
    <link rel="stylesheet" href="./css/your_css.css">
    ```
    
    ## **To connect with themes:**
    
    To connect with themes the only change is the destination folder.
    
    Bellow, is an example about how to connect with a theme. We use ocean theme to show you: 
    
    ```html
    <link rel="stylesheet" href="saturnss/dist/ocean/index.css">
    <!-- Structure:  ..."saturnss/dist/theme_name/index.css" -->
    ```
    
    To connect with other themes, just change the folder name to the theme’s name.
    
    ```html
    <!-- Connect with dark night theme -->
    <link rel="stylesheet" href="saturnss/dist/darknight/index.css">
    ```
    
    Of course, if go to the themes examples, you can copy the urls and use it insted of writting.
    
- **Applying properties**
    
    SaturnSS apply css properties to some and also has some css components that can be assigned to html.
    
    ## Starting with css components:
    
    ### Cards
    
    To create a card, you need to create a <div> assigning the class name to “card”. Inside it, you can assign the card title, and the card body:
    
    ```html
    <div class="card">
    	<div class="card-title">Card title</div>
    	<div class="card-body">
    		Card body
    	</div>
    </div>
    ```
    
    Card component, currently has 6 diferent styles and you can switch them changing the class name.
    
    List of card styles: [”card”, “card-center”, “card-neumorphism”, “card-neumorphism-center”, “card-glassmorphism”, “card-glassmorphism-center”]
    
    See bellow:
    
    ```html
    <div class="card">...</div>
    <div class="card-center">...</div>
    <div class="card-neumorphism">...</div>
    <div class="card-neumorphism-center">...</div>
    <div class="card-glassmorphism">...</div>
    <div class="card-glassmorphism-center">...</div>
    ```
    
    ### Buttons
    
    To create a button, you need to create a <button> assigning the class name to “btn”.
    
    ```html
    <button class="btn">...</button>
    ```
    
    Button component, currently has 5 diferent styles and you can switch them changing the class name.
    
    List of card styles: [”btn”, “btn-rounded”, “btn-2”, “btn-3”, “btn-4”]
    
    See bellow:
    
    ```html
    <button class="btn">...</button>
    <button class="btn-rounded">...</button>
    <button class="btn-2">...</button>
    <button class="btn-3">...</button>
    <button class="btn-4">...</button>
    ```
    
- **change some property**
- **How to contribute with SaturnSS**