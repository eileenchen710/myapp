Goals：

Design and implement a simple User Post management interface.
Users can add/delete/modify/list their posts.
NO Rich Text Editor is needed!
You can just use TEXT area to accept content of the post. NO NEED to consider the format of the text.
3 pages (views) are required, List view, Add view (consider use the same view to modify post too), and possibly a confirmation dialog when delete a post.
  

Requirements:

#1 Clear/Friendly user interface. User don't need extra instructions to understand how to use it.
#2 Simple and maintainable HTML/JS code
#3 Give some comments/instructions (only if you think it is needed) to help readers to understand your code. 

Submission：

#1 Source code
#2 A README file to describe how to install (if needed)

Some notes:

#1 Data model of the post
  - title : required string // title of the post
  - digest: required string // digest of your post
  - headingImg: required string // url of the heading image
  - content: required string // text of the post
  - publishedAt: required datetime // the date when post is published
  - publishedBy: required string // the person who published the post. To simplify this task, string is enough.  

Technical Requirements:
1. This is a frontend test so NO NEED to think about the persistence of data. (NO DATABASE is required)
2. You can mock the data for the list view. e.g, just hardcode some fake data in javascript to display it.
3. For the other CRUD operations, ADD/DELETE/MODIFY, don't worry about the data persistence. You can just display what data you changed/added. For example, for "ADD" operation, you
   can just alert with a JSON object showing what data object is created. 
4. If you have nodejs exp or know what to do, you can use some REST mock tool to simulate the data but it is not compulsory. e.g Nock. https://github.com/node-nock/nock
5. It will be great that you can write your own CSS with minimal external css framework. If you want to use other CSS lib/framework, Bootstrap 3/4 is preferred.
6. For Javascript, Vanilla JS is highly preferrable. You can use frameworks, but please try to use mainstream ones. Angularjs, React, Vuejs, Jquery etc.
   Bonus points: ES6 with babel
                 some typing in JS (eg. typescript) 
7 Try to limit the plugins used in any framework you might use.


