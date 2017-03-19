module.exports = function(app){
  app.get('/', function (req, res) {
    //npm install emailjs

    var email   = require("emailjs");
    var server  = email.server.connect({
        user:    "user", 
        password:"pass", 
        host:    "smtp-mail.outlook.com", 
        //port : foo,
        tls: {ciphers: "SSLv3"}
    });

    var message = {
    from:    "fabio.marcell@outlook.com", 
    to:      "fabio.marcell@outlook.com",
    subject: "testing emailjs",
     
    attachment: [
      {
            //send html message content
            data:"<b>i <i>hope</i> this works!</b>", 
            alternative:true
        }
    ]
    /*,
    attachment: 
        [
            {data: "<b>!!!!!!!</b>"},
            {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"},
            {path:"path/to/image.jpg", type:"image/jpg", headers:{"Content-ID":"<my-image>"}}
        ]
        */
    }

    // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function(err, message) { 
        res.send(err || message); 
    });

  });
};