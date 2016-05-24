
module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
 
    var mongoose = require('mongoose');

  
    var Schema = mongoose.Schema;
    //var relationship = require("mongoose-relationship");

    var bookSchema = new Schema({
        bookname: String,
        title: String,
        isbn: String,
        author: String,
        publisher:String,
        number_of_pages:String,
        authorid:{ type:Schema.ObjectId, ref:"authordb" }
    });

    var bookdb = mongoose.model('bookdb', bookSchema);
    return bookdb;
};