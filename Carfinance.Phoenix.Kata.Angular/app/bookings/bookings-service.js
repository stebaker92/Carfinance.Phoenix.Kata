(function () {
    'use strict';

    angular
        .module('PhoenixKata')
        .service('bookingsService', bookingsService);

    bookingsService.$inject = ['$http'];

    function bookingsService($http) {

        var service = {
            getBookings: getBookings,
            getBooking: getBooking
        };

        function getBookings() {
            return $http.get('booking');
        }

        function getBooking(bookingId) {
            return $http.get('booking/' + bookingId);
        }

        return service;
    }
})();