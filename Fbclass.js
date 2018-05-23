var FacebookUserDetails = /** @class */ (function () {
    function FacebookUserDetails(name, birthday, gender, interestedIn, languages, relationship, about, quote, address, contact, facebookId, education, work, place, friends, photos, Videos, checkIns, music, movies, tvShows, books, likes, events, groups) {
        this.work = work;
        this.place = place;
        this.friends = friends;
        this.photos = photos;
        this.Videos = Videos;
        this.checkIns = checkIns;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.books = books;
        this.likes = likes;
        this.events = events;
        this.groups = groups;
        this.getAge = function () {
            console.log("Age is Calculated ");
        };
        this.getWorkingExperience = function () {
            console.log("Working Experience is Calculated.  ");
        };
        this.getUserclickData = function () {
            console.log("Recomendations are processed ");
        };
        this.ShowIntrested = function () {
            console.log("Show user intrests ");
        };
        this.CelebrateBirthday = function () {
            console.log("Send Notifications to friends and celebrate birthday ");
        };
        this.MakeEventRelatedVideo = function () {
            console.log("Make Video based on friend's anniverseries,Birthdays, and display to user ");
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.contact = contact;
        this.facebookId = facebookId;
        this.languages = languages;
        this.education = education;
        this.work = work;
        this.place = place;
        this.friends = friends;
        this.photos = photos;
        this.Videos = Videos;
        this.checkIns = checkIns;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.books = books;
        this.likes = likes;
        this.events = events;
        this.groups = groups;
    }
    return FacebookUserDetails;
}()); //end of class
//objects creation
//object one
var userOne = new FacebookUserDetails("Abhijit", "29/07/1998", "Male", "Female", ["Telugu", "English", "Hindi"], "Single", "I am self motivated person pursuing undergraduate Education in Amrita college, bangalore", "Formal education will make you a living,self education will make you a fortune", "Bangalore,Karnataka", 7259444638, "838200096267013", [{ studied_Institution: "Amrita College", Education: "Btech" }, { studied_Institution: "Bhashyam IIT Foundation", Education: "Secondary Education" }]);
console.log("FacebookUserDetails");
console.log(userOne);
userOne.CelebrateBirthday();
userOne.getUserclickData();
userOne.getAge();
userOne.ShowIntrested();
userOne.getWorkingExperience();
userOne.MakeEventRelatedVideo();
