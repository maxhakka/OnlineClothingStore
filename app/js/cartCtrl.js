onlineClothingStoreApp.controller('CartCtrl', function ($scope, Service) {
	var items = [{'name':'Skinny jeans', 'price': 500, 'amount': 1}];
	$scope.cart = {'orderNr': '466567574', 'date': '01-05-2016T09:00:04.00', 'shipped': '02-05-2016', 'items': items};
	$scope.saveOrders = function() {
		Service.saveOrders($scope.cart);
	}
});