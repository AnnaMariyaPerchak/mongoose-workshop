### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  
* postman - [Download page](https://www.getpostman.com/downloads/)
* mongoose - [Api](https://mongoosejs.com/docs/api.html)
* MongoDB - [CRUD API](https://docs.mongodb.com/manual/crud/index.html)

### Installation 
``` 
git clone https://github.com/IhorShmidt/mongoose-workshop
cd mongoose-workshop
npm install
npm start
```

### Workshop plan
## Anonymous book and reviews
Lets try to implement possibility to create books, for that we need to implement CRUD operations and book schema

#### 1. User will call POST /books - to create new book
  * Create Schema and Model for Book
  * Add schema validation
  * Before creating new Book need to check if item already exists

##### Books schema
```
{
  title: String,
  description: String,
  year: Number,
  author: ObjectId | String,
  reviews: Ref'Review'[]
  createdAt: Date,
  updatedAt: Date
}
```
#### 2. User will call PUT /books/:bookId - to update existing book
  - Check if book exist
  - Update book document
#### 3. User will call GET /books - to get all books
  - User will have possibility to get all books
#### 3. User will call GET /books/:bookId - to get all book with reviews
  - User will have possibility to get book with reviews
#### 4. User will call DELETE /books/:booksId - to delete existing book
  - Check if books exist
  - Delete books
  

#### 1. User will call POST /reviews - to create new review
  * Create Schema and Model for review
  * Add schema validation
  * Before creating new review need to check if book exists

##### Review schema
```
{
    book: ref to books,
    text: String
    nickname: String
    createdAt: Date,
    updatedAt: Date
}
```
#### 2. User will call PUT /reviews/:reviewId - to update existing review
  - Check if book exist
  - Update review document
#### 4. User will call DELETE /review/:reviewId - to delete existing review
  - Check if books exist
  - Check if review exist
  - Delete review


#### Postman
- We will use postman as a request emulator, back-end url http://localhost:port/api/






