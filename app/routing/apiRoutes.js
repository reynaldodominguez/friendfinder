var friendsData = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
    var userInfo = req.body;
    var userResponses = userInfo.scores;

    var matchName = "";
    var matchImage = "";
    var totalDiff = 10000;

    for (var i = 0; i < friendsData.length; i++) {
      var diff = 0;

      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
      }

      if (diff < totalDiff) {
        totalDiff = diff;
        matchName = friendsData[i].name;
        matchImage = friendsData[i].photo;
      }

    }
    friendsData.push(userInfo);

    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
  });
};


