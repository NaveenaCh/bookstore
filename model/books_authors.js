module.exports = function(mongoose) {
    "use strict";
   
 
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var relationship = require("mongoose-relationship");

    var ab = new Schema({
        book_id: { type:Schema.ObjectId,ref:"bookdb"},
        author_id:{ type:Schema.ObjectId,ref:"authordb"}
        
    });

    var books_authors = mongoose.model('books_authors', ab);
    return books_authors;
};