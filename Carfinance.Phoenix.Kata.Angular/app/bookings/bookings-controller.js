(function () {
    "use strict";

    angular.module('PhoenixKata').controller('BookingsController', BookingsController);

    BookingsController.$inject = ['bookingsService'];

    function BookingsController(bookingsService) {
        var vm = this;        

        vm.createBooking = bookingsService.navigateToCreateBooking;
        vm.editBooking = bookingsService.navigateToEditBooking;

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