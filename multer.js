

var multer=require('multer');
router.use(multer({dest:__dirname+'/public/'}).any());