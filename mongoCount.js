var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function (er,db) {
		if (er) console.log('Eroare:'+er);
		var col=db.collection('parrots');
		col.count({'age': {$gt:+process.argv[2]}}
			,function(err,cnt)
			{
				if (err) console.log('Error:'+err)
				else
					console.log(cnt);
				db.close();
			});
		});
