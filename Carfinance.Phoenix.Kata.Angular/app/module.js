(function () {
    'use strict';

    angular.module('PhoenixKata', ['ngRoute'])
        .config([
            '$routeProvider', function ($routeProvider) {

                $routeProvider
                    .when('/', {
                        templateUrl: '/app/bookings/bookings.html',
                        controller: 'BookingsController',
                        controllerAs: 'vm'
                    })

                    .when('/booking/:bookingId?', {
                        templateUrl: '/app/bookings/booking-detail/booking-detail.html',
                        controller: 'BookingDetailController',
                        controllerAs: 'vm'
                    })
        }
    ]);

})();
