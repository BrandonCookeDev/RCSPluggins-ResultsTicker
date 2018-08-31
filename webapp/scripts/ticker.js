'use strict';

let freshSets,staleSets,incompleteSets,setData,groomer;

function loadResults(options){
	let type = options.ticker_type || "";
	let aggregator = new ggResults.SetAggregator(
		type.toLowerCase(),
		options.ticker_tournamentId,
		options.ticker_eventId,
		options.ticker_phaseId,
		options.ticker_groupId,
		options.ticket_resetTF
	);
	aggregator.getSets(cb).catch(console.error);

	groomer = ggResults.Groomer.getInstance();
	groomer.set(30000); // groom every 30 seconds
	
	setInterval(function(){
		try{
			fresh = ggResults.getFreshBucket().toArray();
			stale = ggResults.getStaleBucket().toArray();
			incomplete = ggResults.getIncompleteBucket().toArray();
		} catch(e){
			console.error('gather sets interval');
		}
	}, options.ticker_interval || 5000)
}

function cb(err, set){
	if(err){
		return console.error(err)
	}

	//implement your custom logic to process sets at update-time
}
