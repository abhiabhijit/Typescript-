
class FacebookUserDetails{
    
     
    name : string
    birthday : string
    gender : string
    interestedIn : string
    languages : string []
    relationship :string
    about : string
    quote : string
    address : string
    contact : number
    facebookId : string
    education : {studied_Institution:string,Education:string} []//array of objects
    
    


    constructor(name : string,birthday : string,gender : string,interestedIn : string,languages : string [],
       relationship :string,
        about : string,quote : string,address : string,contact : number,facebookId : string,education : {studied_Institution:string,Education:string} []
        ,public work ?: {working_Institution:string,startDate:string,endDate:string} [],public place ?: string[],public friends ?: object [], public photos ?: object [],public Videos ?:object [],
        public checkIns ?: object [], public music ?: object[],public movies ?: object[],public tvShows ?: object[],public books ?: object[],
        public likes ?: object[],public events ?: object[],public groups ?: object [])
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address
        this.contact = contact
        this.facebookId = facebookId
        this.languages=languages
        this.education=education
        this.work=work
        this.place = place
        this.friends = friends
        this.photos =photos
        this.Videos = Videos
        this.checkIns = checkIns
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.books = books
        this.likes = likes
        this.events = events
        this.groups = groups
    }
    
    getAge = () => {
          console.log("Age is Calculated ")
        }
    getWorkingExperience = () => {
            console.log("Working Experience is Calculated.  ")
          }
    getUserclickData = () => {
            console.log("Recomendations are processed ")
          }
    ShowIntrested = () => {
            console.log("Show user intrests ")
          }
    CelebrateBirthday = () => {
            console.log("Send Notifications to friends and celebrate birthday ")
          }
    MakeEventRelatedVideo = () => {
            console.log("Make Video based on friend's anniverseries,Birthdays, and display to user ")
          }
          
    
               
}//end of class
//objects creation
//object one
let userOne = new FacebookUserDetails("Abhijit","29/07/1998","Male","Female",["Telugu","English","Hindi"],
"Single",
"Formal education will make you a living,self education will make you a fortune",
 "I am self motivated person pursuing undergraduate Education in Amrita college, bangalore",
 "Bangalore,Karnataka",7259444638,"838200096267013", [{studied_Institution:"Amrita College",Education:"Btech"},{studied_Institution:"Bhashyam IIT Foundation",Education:"Secondary Education"}]);

console.log("FacebookUserDetails")
console.log(userOne)
userOne.CelebrateBirthday();
userOne.getUserclickData();
userOne.getAge();
userOne.ShowIntrested();
userOne.getWorkingExperience();
userOne.MakeEventRelatedVideo();




