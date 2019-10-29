# Architecture

The work will focus mostly on creating architecture requirements for building a website that can interact with the client and database together. 

### Overall
* The website is built primarily using HTML, CSS, and JavaScript.
* The website needs to be responsive to different devices such as computers, mobile devices or tablets.
* If the website server is down, it should display an appropriate error message.
* The website uses Firebase as the database to store login and post information.


### Components:
* #### Landing Page - Component View
	- This component is big view that hold views and controller as children.
	- The component resides in the client.
	- It will hold these view and controller:
		- #### Sign-In - CONTROLLER
			- This component will sign the user in by calling the google account from the Google side.
			- The component resides in the client side.
			- This component will interact with Stored-Username, and Google:
				- Interact with Google to get the validation for account and get back a String as username which is the user email in google account. getUser(): input (), return a String from interaction.
				- The Sign-In component will give a String value to Stored-Username. giveString(): input nothing, return a String to Stored-Username.
		- #### About Us - VIEW
			- This component will show the view of the information about the creators and project
			- The component resides in the client-side and a children of Landing Page view.
* #### Dashboard - Entire Component
	- #### Stored-Username: (Model)
		- This component will store a username of the user as a string.
		- The component resides in the client side.
		- The Stored-Username only interact with Sign-In and Show-Username:
			- Sign-In will give a string to the model Stored-Username.
			- The Show-Username can ask the Stored-Username for the String value stored in it. (no stub needed because it is a model)
	- #### GetData: (controller)
		- This component will make an HTTP request to get the JSON data back from the DataBase model.
		- The component resides on the client side.
		- This controller will interact with many components: the database and any components that will call this component:
			- GetData will send an HTTP request to the database.
			- GetData will get back a JSON object.
			- GetData will give this JSON object to whatever component calls it.
	- #### Search Function: (controller)
		- This component will search for the keywords that users enter into the search.
		- The component resides in the client.
		- The Search Function interact with GetData, Search Bar Icon:
			- It calls the GetData to get back the Json Object. getData(): input(), return Json Object
			- Use the keywords String to search through the Json Object. search(): input (keywords) return the json object that match the search.
			- The Search Bar Icon call Search Function to give the searched Json Object. getData(): input(), return the Json Object to Search bar Icon.
	- #### AddData: (Controller)
		- This component will make an HTTP request to give to add information to the database
		- The component resides in the client
		- This component will communicate with the Database, Submit Button (Add)
			- The user clicks Submit Button to add information into the Database
	- #### DeleteData: (Controller)
		- This component will make an HTTP request to delete posts from the database
		- This component will communicate with the Database, Delete Button
			- The user clicks Delete Button to delete posts from the database
	- #### EditData: (Controller)
		- This component will make an HTTP request to edit the post information in the database
		- This component will interact with the Database, Submit Button (Edit)
			- The user clicks the Submit Button to edit the information in the database
	- #### Nav Bar : View
		- This is a view component that holds other children views and controllers to the user.
		- This component resides in the client-side.
		- This component holds these views and controllers as children:
			- #### Home Button (Controller)
				- After clicking, the dashboard is refreshed for new posts by getData();
				- The components resides in the client-side
				- This component interacts with Definite Button where it will display all the definite posts. getDefinite(): input(void), return (void).
			- #### Show-Username: (View)
				- This component shows the String username of the current login user.
				- The component resides in the client-side.
				- This component interacts with NavBar and Stored-Username:
					- Navbar View shows Show-Username as its children.
					- The show-Username shows the string from the Stored-Username. 
			- #### Sign Out Button - Controller
				- Will sign the user out of the dashboard.
				- This component is a children of the Nav Bar and reside in the client.
				- This component interact with Store-Username and Landing Page:
					- This component will remove string in the Store-Username. deleteUser(): input(), return().
					- This component Interacts with Landing Page by redirecting the user to that page. signOut(): input(), return().
			- #### Search Bar - View
				- This component resides in the client.
				- Search Bar itself is a view component to display a view and a controller as children:
					- **Text: View** reside in the client side and prompt the text input from the user for the search later.
					- #### Search Bar Icon - Controller
						- Search Bar Icon is a child of the Search Bar.
						- Search Bar Icon takes/ask information from the search bar to the server-side component.
						- The Search Bar Icon will interact with the Display Section and Search Function:
							- It will call the Search Function to query the information based on the user’s input
							- After querying, the Display Section is updated to show the user’s requested information



#### Definite Button - Controller
* Definite Button will reside in the client-side
* When the User clicks on the button, the Definite Button will communicate with the server-side(database) to find information regarding definite post.
* It will interact with Post and GetData:
  * The Definite Button call the GetData to get back Json Object. getDefinite(): input(), return Json Object.
  * The Definite Button give this Json Object to Post. getJsonObject(): input(), return Json Object.
#### Indefinite Button - Controller
* Indefinite Button will reside in the client-side
* When the User clicks on the button, the Indefinite Button will communicate with the server-side(database) to find information regarding definite post.
* It will interact with Post and GetData:
  * The Indefinite Button call the GetData to get back Json Object. getDefinite(): input(), return Json Object.
  * The Indefinite Button give this Json Object to Post. getJsonObject(): input(), return Json Object.
#### Add Button - Controller
* Add Button will reside in the client-side
* Add Button interact with the Create Post Page. createPost(): input(), return a new element in Json Object.
* #### Create Post Page - View
  * Text (View) that includes TITLE, DATE, TIME, DESCRIPTION, INDEFINITE, DEFINITE, TAG as String stored in the database. Image also stored in the database
* #### Submit Button - Controller
  * Submit Button will interact with the database to input information into it from the text (view).
  * The Submit Button reside in the client.
  * The Summit Button interact with AddData and Definite Button:
    * The Summit Button calls the AddData to add a post to the database. addData(): input(Json Object), return (void).
    * The Summit button call the Definite Button to generate the new Display Section. (Note: we will show the user the Definite page wherever the user is, even if the user is in indefinite page originally). definite(): input(void), return (void).
* #### Cancel Button - Controller 
  * This will reside in the client-side
  * Cancel Button will not store anything in the database but will communicate with the database to fetch information from other posts.
  * Cancel Button will interact with the Display section: the cancel Button will call the Definite Button and display the view of all posts. definite(): input(void), return(void).

#### Display Section - Component View
* The display section is a View component that will stay in the client-side.
* This component will interact with GetData(), and Search Function():
  * The component will use GetData() to retrieve information from the database and display the information
  * Search Function will be used to query information based on the user’s request from the database
* Its job is to hold many components that name “PostButton” (controller) and display them in the grid form of 4 columns.
* #### PostButton: (controller)
  * This component is a controller that will interact with the view Post when the user clicks on the button on the display section.
  * This is a controller that will reside in the client-side.
    * When the user clicks on the button, a view display name “Post” will be called that show all the details of the post.
* #### Post (View)
  * This is a view component that shows other children views and controllers to the user.
  * This component resides in the client-side.
  * This component holds these views and controlling buttons as children:
  * “X” Close Post Button: controller
    * This will reside in the client-side
    * This component will close the post when the user click on it.
    * Close Button will interact with the Display section: the Close Button will call the Definite Button and display the view of all posts. definite(): input(void), return (void).
* #### Post-Information: View
  * This component is a view where the user can see detail about the post.
  * This view resides in the client and it is a child in Post component.
  * It will hold these values:
    * Title (String)
    * Date (String)
    * Time: Start and end (String)
    * Location (String)
    * Image (file image)
    * Tags (List of String)
* #### Upvote Button - Controller
  * Upvote Button will reside in the client-side
  * If clicked, the Upvote button will communicate with the server-side and increment by 1 vote in the JSON object(describe this more specifically later)
  * Upvote button when clicked will interact with the upvote/downvote display(check upvote/downvote display)
* #### Downvote Button - Controller
  * Downvote Button will reside in the client-side
  * If clicked, the Downvote button will communicate with the server-side and decrement by 1 vote in the JSON object(describe this more specifically later)
  * Upvote button when clicked will interact with the upvote/downvote display(check upvote/downvote display)
* #### Upvote/Downvote Display: View
  * This component will show the view of the number of votes currently in the database for the clicked post.
  * This component resides in the client-side and a child of Post
  * This component will interact with Upvote Button and Downvote Button by increment or decrement by 1 vote each click per user.
* #### Edit: Controller
  * Edit Button will reside in the client-side
  * Edit Button will connect with the edit post page
  * Edit Post Page: View
    * Text that includes TITLE, DATE, TIME, DESCRIPTION, INDEFINITE or DEFINITE, TAG will be a view
    * Submit Button - Controller
      * This component resides in the client.
      * Submit Button will interact with the EditData to input information into it from the text.
      * The component will also ask GetData to provide back the update posts and feeds it to the Display Section view.
    * Cancel Button - Controller 
      * This will reside in the client-side
      * Cancel Button will not store anything in the database but will communicate with the database to fetch information from other post getData()
      * Cancel Button will interact with the Display section: the Cancel Button will call the Definite Button and display the view of all posts. definite(): input(void), return (void).
    * “X” Close Post Button: controller
      * This will reside in the client-side
      * This component will close the post when the user click on it.
      * Close Button will interact with the Display section: the Close Button will call the Definite Button and display the view of all posts. definite(): input(void), return (void).
    * Delete: Controller
      * The component resides in the client.
      * This component will delete the post if it gets clicked.
      * Delete component Button if clicked, will communicate with another pop-up (view) that will ask the user if they want to delete. Has two controllers
        * Yes - Will communicate with the database using DeleteData to erase the information regarding a specific post under the user. Then it will communicate with the Display Section by using Definite Button, displaying all the post to the display view. definite(): input(void), return(void).
        * No - Will communicate with the Post view by redirecting the user to it.

### *Footer - Component*

####  *About Us - VIEW*
  - This component will show the view of the information about the creators and project
  
  - This component resides in the client-side.
  
####  *Contact Us - VIEW*

  - This component will show the view of the information that users can use to contact us.
  
  - This component resides in the client-side.
  
###  *Database - MODEL*

  - This is a component that stores all the posts under a userEmail.
  
  - The component resides in the server-side.
  
  - This component is responsible for saving the most recent state of our application. 
  
  - The database model talks only to other controllers which either send in or ask for stored information in the database. 
  
  - The Database component interact with GetData, AddData, DeleteData and EditData:
  
    - *GetData can ask for the data from the Database model.*
     
    - *AddData is used when the user wants to add a post.*
     
    - *DeleteData is used when the user wants to delete a post.*
     
    - *EditData is used when the user wants to edit a post.*
