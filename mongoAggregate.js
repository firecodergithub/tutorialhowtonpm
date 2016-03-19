var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function (er,db) {
		if (er) console.log('Eroare:'+er);
		var col=db.collection('prices');
		//console.log(process.argv[2]);
		//col.find().toArray(function (err,dat){ console.log(dat)});//display all records
		col.aggregate(
			[{$match: {size:process.argv[2]}},
			{$group : {
					  _id:'total',
					total: {$avg : '$price'}
				  }
			}]).toArray(function(err,results)
				{
					if (err) throw err;
					console.log(Number(results[0].total).toFixed(2));
					db.close();
				});
		});
