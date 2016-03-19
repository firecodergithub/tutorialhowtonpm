var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function (er,db) {
		if (er) console.log('Eroare:'+er);
		var col=db.collection('docs');
		var rec={'firstName':process.argv[2],'lastName':process.argv[3]};
		//console.log(rec);
		col.insert(rec,function(err,data)
			{
				if (err)
			console.log('Eroare'+err);
				else
			console.log(JSON.stringify(rec));
			db.close();
			});
		});
