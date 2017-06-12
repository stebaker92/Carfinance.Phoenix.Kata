(function () {
    "use strict";

    angular.module('PhoenixKata').controller('BookingDetailController', BookingDetailController);

    BookingDetailController.$inject = ['$routeParams', 'bookingsService'];

    function BookingDetailController($routeParams, bookingsService) {
        var vm = this;
        var isEdit;
        vm.title;
        vm.booking = {};

        vm.save = save;

        function save() {
            if (isEdit) {
                bookingsService.updateBooking(vm.booking).then(function () {
                    bookingsService.navigateToBookings();
                });
            } else {
                bookingsService.createBooking(vm.booking).then(function () {
                    bookingsService.navigateToBookings();
                })
            }
        }

        function init() {
            isEdit = $routeParams.bookingId;
           
            if (isEdit) {
                vm.title = "Edit Booking";
                bookingsService.getBooking($routeParams.bookingId).then(function (response) {
                    vm.booking = response.data;
                    vm.booking.bookingTime = new Date(vm.booking.bookingTime);
                }, function () {
                    console.error('Failed to get booking Id');
                })
            } else {
                vm.title = "Create Booking";
                vm.booking.BookingTime = new Date();
            }            
        }

        init();
    }
})();