(function () {
    "use strict";

    angular.module('PhoenixKata').controller('BookingsController', BookingsController);

    BookingsController.$inject = ['$location', 'bookingsService'];

    function BookingsController($location, bookingsService) {
        var vm = this;

        vm.bookingClick = bookingClick;

        function bookingClick(bookingId) {
            $location.path('edit/' + bookingId);
        }

        function init() {
            bookingsService.getBookings().then(function (response) {
                vm.bookings = response.data;
            }, function (response) {
                console.error('Error getting tables: ' + response.data);
            });
        }

        init();
    }
})();