
class Video  {
    private videoId : number
    private videoLink : string
    private videoTitle: string;
    private videoUploadDate: string
    private videoLength :number
    private views : number;
    private likes : number
    private disLikes : number
    private comments : string []
    private uploadedBy : Channel
  

    //constructor for initilized the properties
    constructor(_videoId : number,_videoLink :string, _videoTitle : string, _videoUploadDate : string, _videoLength : number,_views : number,_likes : number,_disLikes : number,_comments : string [],_uploadedBy : Channel)
    {
	    this.videoId = _videoId;
        this.videoLink = _videoLink
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength
        this.views = _views
        this.likes = _likes
        this.disLikes = _disLikes
        this.comments = _comments
        this.uploadedBy = _uploadedBy
       
    }    

    getComments = () => {
	    return this.comments 
    }
    getUploader = () => {
	    return this.uploadedBy
    }
   
    getVideoID = () => {
	    return this.videoId 
    }
    getVideoLinkD = () => {
	    return this.videoLink 
    }
    getVideoTitle = () => {
	    return this.videoTitle 
    }
    getvideoUploadDate = () => {
	    return this.videoUploadDate 
    }
    getvideoLength = () => {
	    return this.videoLength 
    }
    getViews = () => {
	    return this.views 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }

    FindTrending = () => {
	    console.log("Calculate Trending based on Views to upload date ratio")
    }
    DisableComments = () => {
	    console.log("Disable comments for any particular reason")
    }
    isReported = () => {
	    console.log("Scrutinize video content on more reports from users")
    }
    ContainsAdultContent = () => {
	    console.log("Show Adult content videos only to above 18 years")
    }
    AddsBetweenVideo = () => {
	    console.log("If video length is more, video is embedded with adds")
    }
    Advertisements = () => {
	    console.log("Show  Video Related Advertisements before loading")
    }

}

class Channel{
    private channelID : number
    private channelName : string
    private channelDescription : string
    private channelCategory : string
	private subscribers : number

    //contructor to initilize properties
    constructor(_channelID : number, _channelName : string, _channelDescription : string, _channelCategory : string,_subscribers : number)
    {
	    this.channelID = _channelID;
	    this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory
      
        this.subscribers = _subscribers
    }

    getChannelId = () => {
	    return this.channelID
    }
    getChannelName = () => {
	    return this.channelName 
    }
    getDescription = () => {
	    return this.channelDescription 
    }
    getchannelCategory  = () => {
	    return this.channelCategory 
    }

    setDescription = (channelDescription:string) => {
	    this.channelDescription= channelDescription
    }
    setchannelCategory  = (channelCategory:string) => {
	     this.channelCategory =channelCategory
    }
   
    getSubscribers = () => {
	    return this.subscribers 
    }


    CalculateChannelPayment = () => {
	    console.log("Calculate Payment to channel based on Subscribers and Views")
    }
    RecommendChannels = () => {
	    console.log("Group channels by category and suggest to users")
    }


}


class main{

     video : Video [] 
    
    constructor(_video : Video [])
    {
	    this.video = _video;
    }

    getAllVideos = () => {
	    return this.video
    }

} 

let channel1 = new Channel(1,"TechTuts1","web developement videos","Education",240000)
let channel2 = new Channel(2,"TechTuts2","Programming languages are thought on daily basis","Education",80000)

let video1 = new Video(1,"Introduction to Typescript","https://www.youtube.com/watch?v=5UPMqtrbw7E","22/01/2018",20.30,123,1000,10,["Good Video","Awesome"],channel1);

let video2 = new Video(2,"Introduction to Angular","https://www.youtube.com/watch?v=5UPMqtrbw7E","22/01/2018",20.30,123,1000,10,["Good Video","Awesome"],channel1);


let videos = [video1,video2]

let youtube = new main(videos)
console.log("#####################################")

console.log("Video Object")
console.log(video1)
console.log("#####################################")

console.log("Channel Object")
console.log(channel1)

console.log("#####################################")
console.log("Channel Description Update ")
channel1.setDescription("Updated Description")
console.log("Description updated to :"+channel1.getDescription())
console.log("#####################################")
console.log("Channel Specific Methods")

channel2.CalculateChannelPayment();
channel2.RecommendChannels();

console.log("#####################################")
console.log("Video Specific Methods")

video1.AddsBetweenVideo();
video1.Advertisements();
video1.DisableComments();
video1.isReported();
video1.FindTrending();
video1.ContainsAdultContent();
