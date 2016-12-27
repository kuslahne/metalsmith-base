var HandlebarsLayouts = require('handlebars-layouts');
var moment = require('moment');

module.exports = function(Handlebars) {

  Handlebars.registerHelper(HandlebarsLayouts(Handlebars));

  Handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
  });

  Handlebars.registerHelper('removeIndex', function(url) {
    return url.replace('index.html', '');
  });

  Handlebars.registerHelper( 'readmore', function(string, path) {
    path = path.split("/")[1];
    string = string.replace(/<\/p>/g," <a href="+path+">Read more..<\/a><\/p>"); 
    return  string;
  });

  Handlebars.registerHelper('formatDate', function(context, options) {
    var format = options.hash.format || "YYYY-MM-DD";

    if (context === "now") {
      context = new Date();
    }

    return moment(context).format(format);
  });


};
