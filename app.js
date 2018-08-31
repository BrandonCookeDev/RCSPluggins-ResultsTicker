angular.module('tickerApp', [])
	.controller('tickerCtrl', [$scope, function($scope){
		$scope.fresh = {};
		$scope.stale = {};
		$scope.incomplete = {};

		setInterval(function(){
			$scope.$apply(function(){
				$scope.fresh = ggResults.getFreshBucket().toArray();
				$scope.stale = ggResults.getStaleBucket().toArray();
				$scope.incomplete = ggResults.getIncompleteBucket().toArray();
			})
		}, 5000);
	}])
	.controller('formCtrl', [$scope, function($scope){
		
		$scope.ticker = {};
		$scope.groomer = {};
		$scope.getResults = function(){
			let setAggregator = new ggResults.SetAggregator(
				$scope.ticker.type,
				$scope.ticker.tournamentId,
				$scope.ticker.eventId,
				$scope.ticker.phaseId,
				$scope.ticker.phaseGroupId
			);
			setAggregator.getSets();

			$scope.groomer = ggResults.Groomer.getInstance();
			$scope.groomer.set($ticker.refreshRate || 30000);
		}
	}])