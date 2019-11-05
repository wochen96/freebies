# Plan

1. **How will you coordinate your work?**
	* Who will coordinate the work?
		1. Calvin Chen - Project Manager
		2. Our project manager will be the one who will coordinate the overall work. The project manager will break down the work into components and distribute them through back-end/front-end skills. Also, we will discuss to determine if the amount of work is digestible and figure out a contingency plan in the case where the deadline date isn’t met. 
	* What will their project management practices be?
		1. Communication with all of the team members
		2. Contingency - Risk Response
		3. Project Planning - Distributes who works on what 
		4. Documentation of building software - create project milestones 
		5. Tracking and Reporting Progress
	* Will conduct use daily or weekly meetings?
		1. The team proposes to have all group, weekly meetings/calls every Tuesday and Thursday afternoons
		2. There will be additional meetings on Monday’s
		3. During this time(Tuesdays/Thursdays), we’ll have stand-ups to see progress amongst the team. Project Manager should keep a record of progress.
	* What will the agendas of meetings be?
		1. Our agenda will consist of an Agile Development Style Meeting
			- Having a roundtable discussing:
				- What was the person working on last time(previous meeting)
				- What are the components that they are currently working on
				- What are the components that the person is going to do next
				- What are the components that they haven’t done - (haven’t been completed in time) - If some components are not finished within the expected timeframe because of personal reasons, then discuss with the project manager and distribute the work that deems the best fit with the other person. 
				- What are some blockers/complications if any that is preventing the person from finishing their work
		2. Because assignments are due on Tuesdays before class, a meeting will be held before that to finalize our assignment details and assess if the goals we implemented are on track. Work will be distributed accordingly if there are any blockers/complications addressed in the meeting
		3. If there are any complications that are hindering our work, meetings will be held via Slack audio meeting will be held somewhat immediately if our group cannot physically make it. These meetings will be held later in the evening because that is when a majority of our group is free during that time. 
2. **What tools will you use to communicate?**

	* For each, articulate the alternatives and why that is the best choice.
		- We will use Slack as our main tool of communication. Slack is convenient and easy to share code.
		- We will communicate whenever someone is confused and needs help, verification (see below)  
		- If a person in our group is MIA there will be a contingency: an overview a person being MIA(Missing in Action)
			- Project Manager will check-up on the tasks
			- If the tasks are approaching the deadline and cannot reach the person after realizing they’re off the grid
			- Notify the rest of the group and also inform the professor to organize a meeting to re-assign work
			- Discuss the work they are currently working on and their future work
			- A request of who should the work then be directed to 
		- If a person in our group is SICK there will be a contingency: an overview a person being SICK
			- Communication with the team via our communication channels from sick person
			- PM to organize  a brief meeting of the work they’re working on
			- Request who should the work then be directed to
			- Request the person to stay in touch
			- Request the sick person to transfer the knowledge on how to do the work they’re doing
			- Inform Professors that person is sick and just not slacking
		- If there are bugs that needs to be taken care of there will be a process:
			a. A person with the bug will request assistance from the other team members
			b. A person with the bug have choices to fix it:
				- Person will handle the overall bug meaning that they’ll research and work on it provided the knowledge from other teammates
				- Have multiple people work on it
				- Ask for outside help via friends/professors/any other resources
3. **Who will own components in your architecture?**
	* Owning them means being responsible for writing them and making sure they are functional and correct.
		- https://docs.google.com/spreadsheets/d/1MWctJIVicAaHCjoEO9CI-hn3R7SYuk683G629gahoIc/edit?usp=sharing
	* For each component, list the one person who is in charge of getting it done.
		- https://docs.google.com/spreadsheets/d/1MWctJIVicAaHCjoEO9CI-hn3R7SYuk683G629gahoIc/edit?usp=sharing
4. **What is your timeline?**
	* Include a list of milestones you'll reach and deadlines for each.
		1. Milestones will consist of the components that will need to be built to get the product in production with each component requiring a due date. 
		2. The timeline can be found in the link above. Each person will need to color in their tasks once they’re finished
			- Will include Project Title, Who’s working on what, Date that needs to be finished
			- Highlight things in green that are finished
			- Highlight things in yellow that are in progress
			- Highlight things in red that need to be assisted with
		3. This is where the PM looks at projects and determine if milestones are not met 

5. **How will you verify that you've met your requirements?**
	* For each requirement in your requirements document, detail how you will verify it, and if you won't verify it, justify why you won't.
		1. We hope to work on different Github branches based on the feature we are working on. Whenever a developer finishes their part of code and wants to push their code branch to master, they will be required to create a pull request and get their code reviewed by at least one more developer on the team. Once they assign another developer as a reviewer, they will notify them about the same on slack in order to fasten the review process. During each review, we encourage the developers to critique and provide constructive feedback on the following themes :
			- Code style and best practices
			- Clarify any unclear code pieces
			- Potential ways it could break/ bugs
			- Suggestions on improving functionality/algorithms
			- Functionality: Does it do what it is supposed to do
		2. In addition to reviewing code, we will conduct manual tests to verify the functionality of our app. These manual tests would include checking if each feature is fulfilling its job without any unexpected errors. We will also test and document edge cases for each feature. (eg. the empty string entered into a search box, no image provided while creating a post, etc) 
		3. Lastly, to test some of the core functionality of our web app (such as search results, obvious edge cases, and database connection, helper function behaviors) we will be including some unit tests to help us test. While writing these unit tests, we will test single functionality of relevant code pieces rather than writing integration tests. Our focus will be on getting maximum test coverage for the targeted code pieces. A couple examples of things we would like to test :
			- For a particular function, does it return the correct output? and handle any errors or exceptions properly?
			- For a function working with our database, is it correctly writing/reading from the database? And handling errors and exceptions accordingly?

		- If you propose to conduct reviews or inspections, how will you analyze the code?
		- If you write a proof, what property will you prove?
		- If you conduct a review or inspection, what aspects of the code will you inspect to verify the requirement is met?
		
	Below we went through all of our requirements to meet these questions.

* For all of the requirements, how will your verifications be integrated into your process? Will you run automated tests after every build? Before every commit? When will you conduct inspections and who will be involved?

	* Before we commit, we will run our tests to make sure they pass. We will check if all the automated tests are passed and that manual tests are passed as intended. In order to test all our requirements, we will do an inspection of reading all the codes and make sure each part play a role in our big program picture. We plan to conduct inspections in a way as noted above. We will conduct these inspections after a component is pushed, involving the team to see if the requirements are met. At the same time, we will do a user testing of 10 users who can come from our class, Info 442. We will collect all the feedback and revise the program as we conduct more user testing.

	* Generally, most of the tests will be done manually. After coding in UI elements, we will look if they are correctly displayed on the website. However, in some cases we will make automatic tests, unit tests, to check if the functionalities are working correctly. Whoever writes code, they must check if it is functioning as intended and has to meet our requirements.

**Log-in/Landing Page**
	* Testing: Log-in is handled by Google. Because of this, we will have to manually test everything to see if it is working with how we intended it to be.

* Login Page will be the landing page

	* Test: We will make this the first page that people will see. If someone is not logged in and enters the website, they will be redirected to the landing page. We will test this manually by entering the dashboard without being logged in. The test is passed if it successfully redirects us to the landing page.
	
* The login/landing page will be split into two halves, vertically down.

	* On the left side of the page, the top middle will show a ‘login’ text and below it will have a google sign in button. The button will be aligned in the middle on the left side. The button will say “g+ Sign in with Google”. Below will give instructions on how to log in and also aligned with the google sign in button. “Please click the above link to sign in with your Google account”
	
	* Test: we will manually test to see if the design is how we want it to look.
	
* On the middle/top right side will display text that says ‘about us’. Under that will display a brief amount of text that discusses who we are. Below that will display text that says ‘contact us’, providing our phone number and email

	* Test: we will manually test to see if the contents are there as intended
	
* Log In Button will require integration of Google sign-in (and is handled by google themselves)

	* Test: we will manually test to see if it correctly uses Google accounts as a log in
	
* If the user presses on the Google sign in button, a new window opens up showing which Google account you want to log in with

	* Test: this will be manually tested by clicking on the sign in button to see if the window opens up
	
* User will click an account that is on the list and the window will close

	* Test: we will manually test to see if a list of accounts shows up.
	
* Users will be logged in under their Google account.

	* Test: we will not test this feature because the user-email is on Google database. We just assume that it works; the user log into our dashboard with a string return from the call.
	
* If intended email is not listed on the list of accounts, an option to add account button is located on the bottom 

	* Test: we will manually test by going on ‘Incognito mode’ and adding account to the list of accounts
	
* If there are no errors during the login process, the user is signed in and directed to the dashboard.

	* Test: we will manually test to see if we are directed to the dashboard after login
	
* If the user clicks on the sign out button, users will be directed back to the landing page. 

	* test : we will manually test by logging in and click the sign out button to see if we are directed back to the landing page


**Upper/Top-Navigation**

*Home Button*
	
* The home button will be an icon of a home
		
	* Test: when you open the website, we want to make sure the home icon button is displayed to the user - we can do a manual test to see if the home icon is correctly displayed on the screen
		
* If the user clicks on the icon, then the page will automatically refresh
		
	* Test: when you click on the home button, the dashboard should refresh with content with a pop up message saying that everything is loaded
			
* If user clicks on home, refreshing the website/application will render new post by definitive posts 
		
	* Test: clicking the home button should refresh the dashboard and direct the user to the definitive post - we can do a manual test by using two devices, one device creates a post and the other clicks the home button to see if the contents are updated
		
*Display email name:*
	
* On the right side of the home, a button will have text that says ‘welcome, [insert email here]!

	* Test: what the user used for their gmail for google authentication should display their gmail after the welcome - we can do a manual test by logging in and see if the welcome text is displayed 
		
* Email will be acquired from the google authentication and shows  who the user is logged in as
	
	* Test: from the back-end, we will know if an account is made if there is an email within the database
		
	* Test: if authentication is verified, then the user will be directed to the dashboard
		
*Sign Out Button*
	
* The sign out button will be located right after the welcome message
		
	* Test: We can manually test to see if the button is correctly displayed at the right location
			
* The button must display ‘Sign Out’
		
	* Test: There will be a signout button after the welcome message
			
	* Test: The sign out button will direct the user back to the landing/sign in page
			
	* Test: If user clicks on sign-in and is authenticated, then this will be considered a pass
			
* If the user clicks on the sign out button, the user will be directed back to the landing/login page.
		
	* Test: We will manually test by logging in and click the sign out button to see if we are directed back to the landing page
			
*Search Functionality:*
	
* The search bar has to be located at the top of the website.
		
	* Test: there will be a field input that the user can use to search for things
			
	* Test: once the user clicks enter, or the search button, results should resemble that of the search
			
* On the right of the search bar, there should be a clickable search icon that submits the search query
		
	* Test: there should be a magnifying/search icon inside on the right side of the field input for users to filter out results
			
	* Test: if the results are returning string matches, then this will be considered a pass. For example, if a user types in pizza, then anything that has the word pizza in it will then be displayed. 
			
* The user has to input any characters in search.
		
	* Test: we will make sure that this is a text field
			
	* Test: If the user is able to type in any characters in this text field, then this can be verified as a pass
			
* We are sending keywords to our search algorithm that returns the relevant posts back to the user. The system has to be able to look at the keywords in titles, descriptions, tags, and locations from every posts in the database.
		
	* Test: we will make sure this works by querying words from each category(title, description, date, time,etc). If the query search by string returns the correct results(by string match), then it will constitute as a pass. 
			
* Clicking the search bar allows for plain text from the user that will filter out results to be shown on the dashboard
		
	* Test: if the results are displayed from the search result onto the dashboard based on the query string search by most familiar, then this would be a pass. 
			
* If the user presses enter, this will trigger a filtering function that will filter based on the search query.

	* Test: once the user clicks enter after inputting text into the textfield, then the user should new results showing to that of the search text. 
			
	* Test: If there are no unique results, then a message on the dashboard should say no results found for “inset user text input here”
			
* By pressing enter or clicking the search icon and if the input is invalid, the system has to display to the user an empty dashboard and that there were no search results found.
		
	* Test: See above
			
* If the input is valid, the system shows the queried results in order from newest to latest (left to right and descending)
		
* Results should be a string match, but the results displayed should be arranged where the tiles are in left to right, displaying by when the post was posted. 
		
* The user enters certain keywords term like “cookies”. The search function will query all of the JSON text to find words that match that of ‘cookies’. This means that it looks for ‘cookie’ in the title, location, date, time, description, and tags.
		
	* Test: the test for this requirement is hard to do because we can not be sure the search function would return all the correct post for the query. But, we will try a manual test where we will basically create 20 posts in the database and with two posts that have the word cookies in title and description. Then, if the search function return those two posts, then test passes.
			
**Radio Buttons (Definite/Indefinite):**

* There will be two radio buttons located after the search bar, lined up horizontally

	* Test: there will be two buttons located after the search bar when once the user is authenticated from the gmail login landing page
	
* The first button will be definite and the second will be the indefinite

	* Test: Once the user is authenticated from the landing page and transitions into the dashboard, the dashboard will display two radio buttons with the left button indicating that is a definitive and the right button indicating it is non-definitive. 
	
	* Test: if the user clicks on each, the results should be displayed with the appropriate button.
The definite button will be automatically filled as the default
	* Test: Once the user is logged in from the landing page, then the initial results that are seen will be that of the definitive post.
	* Test: We will check if it is definitive by looking to see if the results displayed matches with the definitive tag in our database
	
* When the user clicks on one of the buttons, the button will fill, and will follow the grid display (check grid display). The dashboard will display the respective type (definite/indefinite) that is selected

	* Test: Clicking on a non-filled radio button will automatically refresh the page with the corresponding button.
	
	* Test: We can check if it is the correct respective type by looking at the back-end to see if the post matches with either definite or indefinite. 
	
* Only one button can be selected. When the definite button is on, the indefinite button is off. When the indefinite button is on, the definite button is off. 

	* Test: The user cannot click on both definitive and indefinite buttons at once. Only one should be filled in and the other is not. We will create a test where if the user clicks on both and is filled, then the test will fail. 
	
	* Test: We will write a test where that if the user clicks on definite and the results are non-definite, then the test will fail
	
	* Test: We will write a test where that if the button being clicked is filtering out the respective type, then the test will pass. 

**Creating Post Button**

* On the top right side of the website, will be a right-aligned add button. This button will say Add with a ‘+’ icon next to it
	* Test: We will write a test where if the user clicks on the “add +“ icon, the user should be directed with a popup modal requesting user for information. 
	
* If the button is clicked, a pop-up screen will overlay the dashboard with the creating post form.

	* Test: We will create a test where if the popup modal is the correct modal, then the test will pass
	
	* Test: The pop-up modal should include everything that we need from the user to create a post
	
* Creating Post will have a detailed explanation below

* Post Section:

* Each post will be a tile in a grid format(check grid display)

	* Test: We will create a test in the create a post section indicating that if all the requirements are met from requesting the users information, then the test will pass. 
	
	* Test: If the user does not fill in all of the text input, then the test will fail. 
	
	* Test: The tile should be displayed on the dashboard once the user clicks submit in the create a post modal. 
	
* Each tile will have inside it: 

* Top right-hand corner vertically aligned with title, location, date

	* Test: We will confirm this by writing css code for aesthetics and looking at it physically to make sure the tile is consistent to our descriptions. 
	
* The tile should will be filled with a picture

	* Test: We will confirm this by writing CSS code for aesthetics and looking at it physically to make sure the picture is filled up within the tile
	
* The size of each tile will scale up depending on the browser size (Having it response - check responsiveness)

	* Test: We will write css code for browser size and accessing the website on different devices to make sure the website scales appropriately.
	
	* Test: If the aesthetics does not match our intended satisfaction(from our requirements above), then it will be considered a fail.
	
* Scrolling down on the page will display more post into the grid along with the original dimensions of each tile. 

	* Test: We write a test where that the dashboard should display a certain amount of tiles and if the user scrolls down, then more post should be displayed
	
* Posts are organized from left to right, descending from newest to latest

	* Test: We will write a simple test where we will make sure that the tile to the left should be a newer than compared to that of the right. If this test breaks, then the test will fail. 

**Interacting with Post:**

* Users can interact with a post by clicking on a post on their dashboard. Once they click on a post, a modal box appears describing relevant information (description, start/end time etc) about that post.

	* Manual Test: We will write a test where we can check to set if the modal that pops up for the post view is the correct data being displayed

* There are primarily two ways a user can interact with a post. 

* The first is an option to upvote or downvote a post. This is enabled by the presence of two arrow buttons (Up arrow icon for an upvote, down arrow icon for downvote). We do this to help maintain quality of posts, allow filtering search results by vote count in our dashboard, and create trends by interesting/disinteresting posts by measuring vote activity.

* The user can only vote an individual post once

	* Manual Test: We can manually test to see if the upvote/downvote works and its properties are working if we create a boolean function to see if the user either already clicked the upvote/downvote. If they did, then the boolean will switch to false, and the user cannot vote again. If this renders true and the user cannot vote, this will classify itself as a pass. 
	
* The user can only either upvote or downvote an individual post

	* Manual Test: We can test this by writing an algorithm to see if the post that is not theirs, and thus have the permission to vote. 
	
* Any post that belongs to the user will not be able to vote on their own post. 

* Users can change their vote by clicking the opposite arrow

	* Manual Test: A test can be made where that if the user clicks an upvote, then the upvote onclick will be disabled. If this hinders the user from clicking the upvote again, this will classify as a pass. 
	
* When the user upvotes or downvotes, the total displayed votes will change (i.e. the total votes increase when you upvote and decrease when you downvote). This will be located on the bottom right of each tile. If the post does not have any upvote downvote, then there will be nothing to display but the arrows itself. 

	* Manual Test: We can physically see if clicked on either upvote/downvote, the integer will change corresponding with the button pressed. If the integer is -1 or +1 of the original integer, then this will classify as a pass. 
	
* Upvote/downvote can be positive or negative integers. It will be the sum of total votes combined

	* Manual Test: We can test this by having adding the cumulative of upvotes/downvotes and if the sum is correct, the test will pass. 
	
* The second option is to exit out of the modal. A user can do this by clicking on the ‘X’ button on the modal, and then replying to the ‘Are you sure’ prompt. This will allow users to exit out of an individual post, and prevent accidental exits.

	* Manual Test: If the user is redirected to the dashboard, this will be considered a pass
	
* If the user is the creator of the post, they can edit or delete the post (check edit/delete post section)

	* Manual Test: the test involves checking if the user-email in the json object match the username stores in top-left corner.

Grid Display/Responsiveness

We will be utilizing a Grid System to display posts on our dashboard. A grid system helps create a series of containers, rows, and columns to layout and align content. This will allow our dashboard to be responsive to different screen widths. So whether a user on a mobile phone flips their screen, or if the website is used on different devices, the grid system will keep the posts well defined and resized accordingly. For this project, we intend to use Bootstrap, an open-source CSS framework that utilizes powerful mobile-first flexbox grid to build layouts of all shapes and sizes. We will leverage Bootstrap’s 12 column layout system to switch between the number of columns displayed based on the screen width. This grid system will ensure a bug free-scrolling/post-viewing experience for users with almost any device. 
Uses flexbox to build the layout
Uses Bootstrap’s 12 column layout system to switch a number of columns displayed based on the screen width (i.e a phone screen will display fewer items compared to a wider computer monitor)
Test: This is a very easily verified by just adding some posts like 10 or 20 and see if all the grid display are working as we describe them.

Create Post

Users are able to create posts to share any resources by clicking the “Add Post” button on the top right corner of the page from anywhere in the website (except the landing/login page).
Test: test manually by seeing if the add post button is included.

When creating a post, a modal pops up and the user provides information for the post. The rendering of the module looks like the picture below. The “CREATE POST” appear in the center of the modal.
Test: see if the modal appear manually.

The modal will prompt the user to add their title, description, location, date (optional), time (optional), tags and picture (optional)
Prompt user to add a title, a description, a location. These fields will require text input from the users. The information will be stored as a “string” in the database. These are required fields.
Test: test to see if all the fields are present to be fill.
One section with radio buttons that will make the user choose two options: definite and indefinite. Users will only pick one options.
The definite will be picked at default and the user will need to enter the required fields of date and time (start and end) as text.
If the user uses indefinite, they don’t have to enter date and time.
All the text fields will be stored in Firebase as String.
Test: the manual test to see if all information is entered when we click on either definite or indefinite.
There will also be one image that is uploaded by the user. The picture will require a file selector to allow users to select an image from the end of the device. If the user does not provide the picture, a default picture will be assigned to the user. Below is the default picture.
Test: test to see if the default picture shows up by creating a post with no picture and see if the picture show.

 (Source: https://twitter.com/uw) (default picture)

Also, the picture that upload need to behave the size 300pix x 300pix (this is an optional feature that can be changed based on the engineering choice and user feedback later).
Test: test to see if the picture have size 300pix by 300pix. Passing bigger picture or smaller picture to test.
The user may also add one optional tag (such as “food”, “free”, “drinks”) to their posts. Adding tag will help organize search results based on tag categories. The tag will be stored as a tag in Firebase.
Test: test if the tag work.
Among all of these fields, title, description, and location are required to be entered. Date, time, a tag and a picture are optional to enter by the users.
Test: test if the tag work or show up.
If any required fields appear to be blank, an error message will be shown prompting the user to re-enter the missing fields.
Test: test if the error message would show up if required fields are missing.

They’re also a submit button at the bottom of the modal. Clicking submits without any information in the required fields will prompt the user to fill in the missing fields.

After successfully submitting:
The modal will disappear and the original screen(dashboard) behind will be shown.
The dashboard will be updated with the new post.
The database in Firebase will also need to be updated with the new post
The new post will be located on the top-left of the Middle Post Section.
If the user is on the “Contact” or “About Us” page before clicking on the “Add +” button (creating the post):
she/he will be transferred to the dashboard with definite selected if the new post is definite.
she/he will be transferred to the dashboard with indefinite selected if the new post is indefinite.
Test: to check if the whole post appear by adding post and verify if all the information is correct.

If the user clicks “cancel” button (at the bottom-right of the modal next to the submit button) or the ‘X’ located on the top right of the modal:
Users are prompted to confirm if they want to close by a pop-up indicating “yes” or “no”.
If they click “yes”, the modal disappears and the original screen(dashboard) behind will be shown.
The dashboard will show all the origin post without any new post. However, if other users have created new posts or deleting posts or editing posts, the dashboard will update accordingly.
If a new post is added, the edited post will move one position to the right or down on the dashboard.
 If a new post is deleted, the edited post will move one position to the left or up on the dashboard.
If they click “no”, the yes/no prompt will disappear and the pop-up modal will be shown back again.
Test: manually test all the cancel function by checking if each of the above functionality work.

The database in Firebase will store all the fields as String and images in png or jpg. After the creation of a new post, the database will be updated accordingly.





**Editing Post**

After the user clicking on a post, the module that shows all the information about the post will be popup in front of the user.
- Test: We will use manual test for this by making sure that there is a pop up for every click; But we will only test for the first 10 and the last 10 button in the list.

The post will contain the information: title, location, definite or indefinite, description and an optional image. If the post has definite property, it also has two more required fields: date and time (start and end). If it is indefinite, it will just show the indefinite property.
- Test: We will write unit testing for this by entering one definite post and one indefinite post and making sure that they are correct in the database and in the showing view to the viewers as passing the test.

Also, the post will have a field where the user email will show up at the bottom left corner of the module.
- The user email can be used to check if the user is the one who creates the post by storing String and compare them with the user email String in the top-left corner of the web page.
- If the post is created by the user, the button “Edit” will show to the user on the right bottom corner of the module like in the picture. It is located next to the “Delete” button.
- Test: we will create some unit tests to make sure the String store in the bottom left corner of the module match the String in the top-left corner of the webpage. If they are matched and the “edit” button show up, we consider that a passing test.

After the user clicks on the “Edit” button, the module will change into the modal that can let the user change the text on all the fields that were entered by the user earlier.
- test: we propose a manual test for this requirement. When we click on the “edit” button, we will check if the modal that can be edit information show up. If it does, then the test is a success.

There are two cases to consider:

- Case 1: 
	- If the post was created by “definite” type which means it records the date and time of the event, the user can edit these fields: title, location, date, time (start and end), description. 
		- test: We propose a manual test for this. When the popup window show up, we will make sure that the users can only enter these fields: title, location, date, time (start and end) and description. If only these fields show up, the test is a success.
	- The user can also delete one image from the image that is stored in the post if the user uploads it during the creation of the post. 
		- Test: manual test, we will delete the image. And if we click the submit button, it disappears and our default image replace it, then the test pass.
	- The user can also upload an image from her/his local device. 
		- test: manual test, we will upload a different picture. After clicking the submit button, if the new image show up in the picture slot, then the test passes.
	- If no image is uploaded the default picture will be shown in the box space. 
		- Test: this test is similar to the above test where we delete a picture and the default image shows up.
- Case 2:
	- If the post was created by “indefinite” in the radio button, then the user can edit these fields: title, location, description as text. 
		- test: We propose a manual test for this. When the popup window show up, we will make sure that the users can only enter these fields: title, location, date  and description. If only these fields show up, the test is a success.
	- The user can also delete one image from the image that is stored in the post if the user uploads it during the creation of the post. 
		- test: manual test, we will upload a different picture. After clicking the submit button, if the new image show up in the picture slot, then the test passes
	- The user can also upload an image from her/his local device. 
		- test: manual test, we will upload a different picture. After clicking the submit button, if the new image show up in the picture slot, then the test passes.
	- If no image is uploaded the default picture will be shown in the box space.  
		- Test: this test is similar to the above test where we delete a picture and the default image shows up.

After the user has finished editing the post, the user can click on the submit button at the bottom of the module:
- If any of the required fields are missing, an error message will show up to prompt the user enters these fields. 
	- test: manual test. We will create one test that purposely missing one or more entering fields and check if the popup error message show up. If it did then the test pass, if not then the test fail. We will also write one test to see if all the required fields are entered and the error popup show up after clicking the submit button. If it shows up, the test fail; if it does not show up, the test passes.
- After successfully submitting, the modal will disappear and the original screen(dashboard) behind will be shown. 
	- test: manual test. We will create one test to see if the modal would disappear after clicking submit button. If it disappears and the dashboard show up again, then the test passes.
- The dashboard will be updated with the new post. 
	- test: manual test. The test will make sure that all the fields are correct with the new information. If it is, then the test passes.
- The database in Firebase will also need to be updated with the new post. 
	- test: automatic test. We will write a unit test to see if the database will be updated with new information. We will create an edited post. And the unit test will go to the database and see if those information are correctly enter to replace the old information. If yes, the test passes.
- The edit post is located in the same position as the Middle Post Section. 
	- test: manual test. We will see if the edited post would show up at the same location as the old one. If it is, then the test passes.
- If there are any changes to the database like some users add new posts or delete posts, the position of the edited post will change accordingly:
	- If a new post is added, the edited post will move one position to the right or down on the dashboard.
	- If a new post is deleted, the edited post will move one position to the left or up on the dashboard.
	- test: this will be a combination of manual test and automatic test. We will manual checking for all the position of posts that are presented at the middle section. Then the unit test will check for what is the list in the database match what the middle section shows at that moment. If they match, the test passes.

If the user clicks “cancel” button (at the bottom-right of the modal next to the submit button) or the ‘X’ located on the top right of the modal:
- Users are prompted to confirm if they want to close by a pop-up indicating “yes” or “no”.
	- test: manual test. The test will check if a popup shows up when the cancel button is clicked. If it does, then the test passes.
- If they click “yes”, the modal disappears and the original screen(dashboard) behind will be shown. 
	- test: manual test. The test will check to see if we click “yes”, would the the modal disappears. If it does, then the test passes.
- The dashboard will show all the origin post without any new post. However, if other users have created new posts or deleting posts or editing posts, the dashboard will update accordingly.
	- If a new post is added, the edited post will move one position to the right or down on the dashboard.
	- If a new post is deleted, the edited post will move one position to the left or up on the dashboard.
	- test: one manual test and one automatic test. The manual test is to check if new posts appear or old posts disappear. Then, the unit test will return what is stored in the database to make sure they are a match. If they match, then the test passes.
- If they click “no”, the yes/no prompt will disappear and the pop-up modal will be shown back again. 
	- test: manual test. When clicking “no”, the test will make sure the modal show up again. If it does, then the test passes.

The database in Firebase will store all the fields as String and images in png or jpg. After the creation of a new post, the database will be updated accordingly. 
- test: automatic test. We will write one unit test that to make all the post in the database match what we have show up that current middle section. In particular, the test will test for number of posts, name of the user match on the post. If they are, the test passes.








**Delete Post**

After the user clicking on a post, the module that shows all the information about the post will be popup in front of the user. 
- Test: We will use manual test for this by making sure that there is a pop up for every click; But we will only test for the first 10 and the last 10 button in the list.

The post will contain the information: title, location, definite or indefinite, description and an optional image. If the post has definite property, it also has two more required fields: date and time (start and end). If it is indefinite, it will just show the indefinite property. 
- test: We will write unit testing for this by entering one definite post and one indefinite post and making sure that they are correct in the database and in the showing view to the viewers as passing the test.

Also, the post will have a field where the user email will show up at the bottom left corner of the module.
- The user email can be used to check if the user is the one who creates the post by storing String and compare them with the user email String in the top-left corner of the web page.
- If the post is created by the user, the button “Delete” will show to the user on the right bottom corner of the module like in the picture. It is located next to the “Edit” button.
- test: automatic tests. We will create some unit tests to make sure the String store in the bottom left corner of the module match the String in the top-left corner of the webpage. If they are matched and the “Delete” button show up, we consider that a passing test.

After the user clicks on the “Delete” button, users are prompted to confirm if they want to delete by a pop-up indicating “yes” or “no”:

- If yes, the modal disappears and the original screen(dashboard) behind will be shown with the update without the deleted post.  
	- test: manual test. The test will check if a popup shows up when the Delete button is clicked. If it does, then the test passes.
- The dashboard will be updated with the new post. 
	- test: manual test. The test will make sure that the post is deleted. If it is, then the test passes.
- The database in Firebase will also need to be updated with the deleted post. 
	- test: automatic test. We will write a unit test to see if the database will be updated with new information. We will delete a post. And the unit test will go to the database and see if that post is removed from the list. If yes, the test passes.
- If no, the yes/no prompt will disappear and the pop-up modal will be shown back again. 
	- test: manual test. When clicking “no”, the test will make sure the modal show up again. If it does, then the test passes.

The database in Firebase will store all the fields as String and images in png or jpg. After the deletion of a post, the database will be updated accordingly. 
- test: automatic test. We will write one unit test that to make all the post in the database match what we have show up that current middle section. In particular, the test will test for number of posts, name of the user match on the post. If they are, the test passes

**Footer**
- Located at the bottom of the page
	- Test: We will manually test to see if the footer is at the bottom of the page
- The footer includes copyright, which includes a year, project name, and copyright symbol
	- Test: We will manually test to see if the items are there in the footer
- There should be a link for the “About Us” page
	- Test: We will manually test to see if the link is there in the footer
- The footer includes contact information (email)
	- Test: We will manually test to see if the items are there in the footer

**About Us**
- Contains information about the creators and project
	- Test: We will manually test to see if the items are shown as intended

**Database**
- The database will be a non-relational database due to the inherent structure of our data.
	- Test: We can test by calling a request to retrieve the JSON file and check if it exists and matches the intended structure
- Particularly, we will use Firebase Realtime Database. The data is structured in the form of a JSON tree.
	- Test: automatic test. We will write two unit tests to check if the database hold json object. The test will create a dummy post with some fields that are one for definite and one for indefinite. The unit test needs to make sure that those information exist in the database as JSON objects. If they exist, the tests pass.
- The main branches of the tree would include users and posts.
	- Test: automatic test. One unit test to check for information if the json object would start with the keyword as the user-email. If it is, then the test passes.
- The users branch would include information about each user that has signed up for our service. The posts branch would include data points related to each individual post. (see below for details)
	- Test: automatic test. Ten unit tests to check for each of the information entered in the post would match. We will use “assert” to check for each fields. For example, if we enter Title=”free cookies”, then in our unit test when we call assert, it should return true if the json object hold string value “free cookies” in the title.
	
**User**

Data points obtained from Google Sign-in Authorization web client

**Post**
- Title
- isDefinite
- Start time
- End time
- Location
- Description
- Picture
- Tag
- Upvotes
- Downvotes
