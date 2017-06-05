(function () {
    'use strict';

    angular
        .module('PhoenixKata')
        .service('bookingsService', bookingsService);

    bookingsService.$inject = ['$http', '$location'];

    function bookingsService($http, $location) {

        var bookingApiUrl = 'booking/';

        var service = {            
            navigateToBookings: navigateToBookings,
            navigateToCreateBooking: navigateToCreateBooking,
            navigateToEditBooking: navigateToEditBooking,
            getBookings: getBookings,
            getBooking: getBooking,
            updateBooking: updateBooking,
            createBooking: createBooking
        };

        function navigateToBookings() {
            return $location.path('');
        }

        function navigateToCreateBooking() {
            return $location.path('booking/');
        }

        function navigateToEditBooking(bookingId) {
            return $location.path('booking/' + bookingId);
        }

        function getBookings() {
            return $http.get(bookingApiUrl);
        }

        function getBooking(bookingId) {
            return $http.get(bookingApiUrl + bookingId);
        }

        function updateBooking(booking) {
            return $http.put(bookingApiUrl, booking);
        }

        function createBooking(booking) {
            return $http.post(bookingApiUrl, booking);
        }

        return service;
    }
})();