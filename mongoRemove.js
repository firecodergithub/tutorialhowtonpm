var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/'+process.argv[2],function (er,db) {
		if (er) console.log('Eroare:'+er);
		var col=db.collection(process.argv[3]);//collection name is passed as argument
		col.remove({_id:process.argv[4]},
			function(err,data)
			{
				if (err)
					console.log('Eroare'+err);
			db.close();
			});
		});
