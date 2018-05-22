var Video = /** @class */ (function () {
    //constructor for initilized the properties
    function Video(_videoId, _videoLink, _videoTitle, _videoUploadDate, _videoLength, _views, _likes, _disLikes, _comments, _uploadedBy) {
        var _this = this;
        this.getComments = function () {
            return _this.comments;
        };
        this.getUploader = function () {
            return _this.uploadedBy;
        };
        this.getVideoID = function () {
            return _this.videoId;
        };
        this.getVideoLinkD = function () {
            return _this.videoLink;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getvideoUploadDate = function () {
            return _this.videoUploadDate;
        };
        this.getvideoLength = function () {
            return _this.videoLength;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.FindTrending = function () {
            console.log("Calculate Trending based on Views to upload date ratio");
        };
        this.DisableComments = function () {
            console.log("Disable comments for any particular reason");
        };
        this.isReported = function () {
            console.log("Scrutinize video content on more reports from users");
        };
        this.ContainsAdultContent = function () {
            console.log("Show Adult content videos only to above 18 years");
        };
        this.AddsBetweenVideo = function () {
            console.log("If video length is more, video is embedded with adds");
        };
        this.Advertisements = function () {
            console.log("Show  Video Related Advertisements before loading");
        };
        this.videoId = _videoId;
        this.videoLink = _videoLink;
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength;
        this.views = _views;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.comments = _comments;
        this.uploadedBy = _uploadedBy;
    }
    return Video;
}());
var Channel = /** @class */ (function () {
    //contructor to initilize properties
    function Channel(_channelID, _channelName, _channelDescription, _channelCategory, _subscribers) {
        var _this = this;
        this.getChannelId = function () {
            return _this.channelID;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getDescription = function () {
            return _this.channelDescription;
        };
        this.getchannelCategory = function () {
            return _this.channelCategory;
        };
        this.setDescription = function (channelDescription) {
            _this.channelDescription = channelDescription;
        };
        this.setchannelCategory = function (channelCategory) {
            _this.channelCategory = channelCategory;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.CalculateChannelPayment = function () {
            console.log("Calculate Payment to channel based on Subscribers and Views");
        };
        this.RecommendChannels = function () {
            console.log("Group channels by category and suggest to users");
        };
        this.channelID = _channelID;
        this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory;
        this.subscribers = _subscribers;
    }
    return Channel;
}());
var main = /** @class */ (function () {
    function main(_video) {
        var _this = this;
        this.getAllVideos = function () {
            return _this.video;
        };
        this.video = _video;
    }
    return main;
}());
var channel1 = new Channel(1, "TechTuts1", "web developement videos", "Education", 240000);
var channel2 = new Channel(2, "TechTuts2", "Programming languages are thought on daily basis", "Education", 80000);
var video1 = new Video(1, "Introduction to Typescript", "https://www.youtube.com/watch?v=5UPMqtrbw7E", "22/01/2018", 20.30, 123, 1000, 10, ["Good Video", "Awesome"], channel1);
var video2 = new Video(2, "Introduction to Angular", "https://www.youtube.com/watch?v=5UPMqtrbw7E", "22/01/2018", 20.30, 123, 1000, 10, ["Good Video", "Awesome"], channel1);
var videos = [video1, video2];
var youtube = new main(videos);
console.log("#####################################");
console.log("Video Object");
console.log(video1);
console.log("#####################################");
console.log("Channel Object");
console.log(channel1);
console.log("#####################################");
console.log("Channel Description Update ");
channel1.setDescription("Updated Description");
console.log("Description updated to :" + channel1.getDescription());
console.log("#####################################");
console.log("Channel Specific Methods");
channel2.CalculateChannelPayment();
channel2.RecommendChannels();
console.log("#####################################");
console.log("Video Specific Methods");
video1.AddsBetweenVideo();
video1.Advertisements();
video1.DisableComments();
video1.isReported();
video1.FindTrending();
video1.ContainsAdultContent();
