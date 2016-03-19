var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/'+process.argv[2],function (er,db) {
		if (er) console.log('Eroare:'+er);
		var col=db.collection('users');//database name is passed as argument
		col.update({'username':'tinatime'}
			,{$set:{'age':40}},function(err,data)
			{
				if (err)
					console.log('Eroare'+err);
				//else
					//console.log(JSON.stringify(rec));
			db.close();
			});
		});
