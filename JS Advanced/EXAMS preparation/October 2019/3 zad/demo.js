class Forum {
  constructor() {
    this._users = [];
    this._questions = [];
    this._id = 1;
  }

  isUserRegistered(array, username) {
    let user = array.find((x) => x.username === username);
    return user;
  }

  isEmailRegistered(array, email) {
    let usersEmail = array.find((x) => x.email === email);
    return usersEmail;
  }

  

  register(username, password, repeatPassword, email) {
    if (
      username === "" ||
      password === "" ||
      repeatPassword === "" ||
      email === ""
    ) {
      throw new Error(`Input can not be empty`);
    }

    if (password !== repeatPassword) {
      throw new Error(`Passwords do not match`);
    }

    let user = this.isUserRegistered(this._users, username);
    let usersEmail = this.isEmailRegistered(this._users, email);

    if (user || usersEmail) {
      throw new Error(`This user already exists!`);
    }

    this._users.push({ username, password, repeatPassword, email });

    return `${username} with ${email} was registered successfully!`;
  }

  login(username, password) {
      let user = this.isUserRegistered(this._users, username)

      if(!user) {
          throw new Error(`There is no such user`)
      }

      if(user.password === password){
        return `Hello! You have logged in successfully`
      }

  }

  logout(username, password) {
      let user = this.isUserRegistered(this._users, username)

      if(!user){
          throw new Error(`There is no such user`)
      }

      if(user.password === password){
          return `You have logged out successfully`
      }
  }

  postQuestion(username, question) {
    let user = this.isUserRegistered(this._users, username)

    if(!user || !this.login(user.username, user.password)){
        throw new Error(`You should be logged in to post questions`)
    }

    if(question === ''){
        throw new Error(`Invalid question`)
    }

    let currentQuestion = {
        question : question,
        id: this._id,
        users : user.username,
        answers: []
    }

    this._questions.push(currentQuestion)
    this._id++;
    return `Your question has been posted successfully`

  }

  postAnswer(username, questionId, answer) {
      let user = this.isUserRegistered(this._users, username)

      if(!user || !this.login(user.username, user.password)){
          return `You should be logged in to post answers`
      }

      if(answer === '') {
          return `Invalid answer`
      }

      let findQuestion = this._questions.find(x => x.id === questionId)

      if(!findQuestion){
          return `There is no such question`
      }

      let resultAnswer = {
          users : user.username,
          answer : answer        
      }

      findQuestion['answers'].push(resultAnswer)

      return `Your answer has been posted successfully`

  }

  showQuestions() {
    let result = [];

    for(let elements of this._questions){
        result.push(`Question ${elements.id} by ${elements.users}: ${elements.question}`)
        for(let els of elements.answers){
            result.push(`---${els.users}: ${els.answer}`)
        }
    }
    
    return result.join('\n')
    
  }
}

let forum = new Forum();

forum.register("Michael", "123", "123", "michael@abv.bg");
forum.register("Stoyan", "123ab7", "123ab7", "some@gmail@.com");
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());


// class Forum {
//     constructor() {
//       this._users = [];
//       this._questions = [];
//       this._id = 1;
//       this._loggedUsers = [];
//     }
  
//     register(username, password, repeatPassword, email) {
//       if (
//         username === "" ||
//         password === "" ||
//         repeatPassword === "" ||
//         email === ""
//       ) {
//         throw new Error("Input can not be empty");
//       }
//       if (password !== repeatPassword) {
//         throw new Error("Passwords do not match");
//       }
//       let user = this._users.find(
//         (u) => u.username === username || u.email === email
//       );
//       if (!user) {
//         this._users.push({
//           username: username,
//           password: password,
//           email: email,
//         });
//       } else {
//         throw new Error("This user already exists!");
//       }
//       return `${username} with ${email} was registered successfully!`;
//     }
  
//     login(username, password) {
//       let user = this._users.find((u) => u.username === username);
//       if (!user) {
//         throw new Error("There is no such user");
//       }
//       if (user.password === password) {
//         this._loggedUsers.push(user);
//         return "Hello! You have logged in successfully";
//       }
//     }
  
//     logout(username, password) {
//       let user = this._users.find((u) => u.username === username);
//       if (!user) {
//         throw new Error("There is no such user");
//       }
  
//       if (user.password === password) {
//         let index = this._users.indexOf(user);
//         this._loggedUsers.splice(index, 1);
//         return "You have logged out successfully";
//       }
//     }
  
//     postQuestion(username, question) {
//       let user = this._users.find((u) => u.username === username);
//       let loggedIn = this._loggedUsers.includes(user);
//       if (!user || !loggedIn) {
//         throw new Error("You should be logged in to post questions");
//       }
//       if (question === "") {
//         throw new Error("Invalid question");
//       }
//       let currQuestion = {
//         id: this._id,
//         question: question,
//         username: user.username,
//         answers: [],
//       };
//       this._id++;
//       this._questions.push(currQuestion);
//       return `Your question has been posted successfully`;
//     }
  
//     postAnswer(username, questionId, answer) {
//       let user = this._users.find((u) => u.username === username);
//       let loggedIn = this._loggedUsers.includes(user);
//       if (!user || !loggedIn) {
//         throw new Error("You should be logged in to post answers");
//       }
//       if (answer === "") {
//         throw new Error("Invalid answer");
//       }
//       let question = this._questions.find((q) => q.id === questionId);
//       if (!question) {
//         throw new Error("There is no such question");
//       }
//       let resultAnswer = {
//         username: user.username,
//         answer: answer,
//       };
//       question["answers"].push(resultAnswer);
//       return "Your answer has been posted successfully";
//     }
  
//     showQuestions() {
//       let result = "";
//       this._questions.forEach((x) => {
//         result += `Question ${x.id} by ${x.username}: ${x.question}\n`;
//         for (const line in x.answers) {
//           let currAnswer = x.answers[line];
//           result += `---${currAnswer.username}: ${currAnswer.answer}\n`;
//         }
//       });
//       result = result.trim();
//       return result;
//     }
//   }