## 1: Title:

>Zain's Gear Shop

https://zainsgearshop.netlify.app/

![Shop Demo]()

<br>

## MVP

- _ _ 

<br>

### Goals
- _Utilize Ruby & Ruby on Rails for Server side rendering & React for client._
- _Authorization to allow the user to Login._
- _Allow the User to track and record all of their accents._ 
- _CRUD functionality on a Users own reviews of a specific Climb._  
- _Allow the user to add more than one picture of their climb._

<br>

### Libraries and Dependencies

> 

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Use of Virtual Dom to render data._ |
|   React Router   | _Connect and keep UI in sync with URL._ |
|   Axios            | _Help us make requests to external resources_ |
|     Rails      | _Server-side framework using MVC ._ |
|   Rails Bundler  | _Allows us to install all required dependencies required of Ruby._ |
|      JWT       | _Secure method of transmitting information between parties as JSON objects._ |
|  bcrypt  | _Allows for password hashing to keep passwords secure._ |
|   CORS              | _Allows browsers access to resources from a server of a different origin._ |


<br>

### Client (Front End)

#### Wireframes

https://xd.adobe.com/view/1fc940eb-3fa7-4318-bdc0-fe425720f0bf-4a9a/ 

Desktop View
![desktop](https://i.imgur.com/v0CyqgB.png?1)
![desktop2](https://i.imgur.com/e3xWyuM.png)

Tablet View:
![tablet](https://i.imgur.com/SXKwwAL.png)

Mobile View:
![mobile](https://i.imgur.com/uC4OJ7t.png)

#### Component Tree

https://whimsical.com/TfewxkZvmBvUJt3VNuxQCu

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Extended Header.jsx
      |__ Extended Footer.jsx
      |__ Main.jsx
      |__ Main.css
      |__ Home.jsx
      |__ Login.jsx
      |__ States.jsx
      |__ Climbs.jsx
      |__ Reviews.jsx
      |__ Photos.jsx
|__ services/
      |__ api-helper.jsx
      |__ auth.js
      |__ images.js
      |__ reviews.js
|__ App.js/
|__ App.css/
|__ index.js/
|__ index.css/

```

#### Component Breakdown



|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | class |   y   |   n   |   contain link to sign-in                   |
|     Footer   |   functional    |   n   |   n   |   provide links to Github and LinkedIn |                        |
|   Main  |    class   |   y   |   y   |   Will contain the main API call and pass props down |
|   Home  | functional |   n   |   y   |   Main landing page of the Website              |
|   Login  |    functional   |   n   |   p   |  Will render the form for user to Login/Sign-up        |
|   States    | functional |   n   |   y   |   shows each state which the user can click on                   |
|    Climbs    | functional |   n   |   y   |   shows each climb as associated to that state.                                 |
|   Reviews    | functional |   n   |   y   |   render each review from a user associated to that climb                |
|    Photos    | state |   y   |   n   | will allow the user to add multiple photos       |

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Psuedocode| M | 2hrs| 1.5hrs |  
| Create Parent component| H | 2hrs  | 2hrs |
| Create Child components | H | 4.5hrs| 3hrs |  
| Pull Data from API | H | 2hrs| 1hr | 
| CSS - Basic | M | 3hrs| 3.5hrs | 
| FlexBox| H | 4hrs| 2.5hrs |  
| CSS - Advanced - Tailwind | H | 3 hrs | 4.5hrs |   
| Rail MVC setup | H | 5.5hrs|4.5hrs |  
| Proper Routing via Rails| H | 3.5hrs| 4hrs  | 
| Authentication - Rails | H | 3hrs| 3hrs | 
| Authentication - React| H | 3hrs| 2hrs |  
| --- | --- |  --- | --- | --- |
| Total |  |35.5| 31.5 |  



<br>

<br>

### Server (Back End)

#### ERD Model

https://www.draw.io/#G1LNQcKzPDWgZxlEnPlLkEK0RZG7XVZir5


<br>

***

## Post-MVP

- _Password confirmation at Sign-up_
- _Allow the user to delete their account_
- _Dropdown menu for user to choose their state_
- _Show data from website without signing up but cannot modify without creating username/password_

***

## Code Showcase

Allowing the user to add reviews and edit reviews was one of the most difficult parts of the project. Making sure the right arguments were being passed into the method to retrieve the proper information and making sure it edited the right id.  

```
 addReview = async (reviewData) => {
    const response = await postReview(this.props.match.params.id, reviewData)
    this.setState(prevState => ({
      reviews: [...prevState.reviews, response]
    }))
  }

 
  updateReview = async (id, reviewData) => {
    const response = await putReview(id, reviewData)
    this.setState(prevState => ({
      reviews: prevState.reviews.map(review => review.id === parseInt(id) ? response : review)
    }))
  }

```

## Code Issues & Resolutions

Biggest issue was understanding how routes in rails were created. I intially assumed that they must be nested which caused major headaches when I moved onto the client side of the app. 

```
Rails.application.routes.draw do
  resources :states, only: [:index, :show] do
    resources :climbs, only: [:index, :show, :create, :destroy] do
      resources :reviews, except: [:create, :update, :destroy] do
        resources :photos, only: [:index, :show, :create, :destroy]
      end
    end
  end
```

After doing some research I realized that I should not nest rails routes more than one level down and chaneged my back-end routes which caused for much easier routing on the React side of things. 

```
resources :climbs, only: [:show] do 
    resources :reviews, only: [:create]
  end

```
