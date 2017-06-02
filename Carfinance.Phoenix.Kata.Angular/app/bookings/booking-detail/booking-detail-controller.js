(function () {
    "use strict";

    angular.module('PhoenixKata').controller('BookingDetailController', BookingDetailController);

    BookingDetailController.$inject = ['$routeParams', 'bookingsService'];

    function BookingDetailController($routeParams, bookingsService) {
        var vm = this;

        function init() {
            alert($routeParams.bookingId);
        }

        init();
    }
})();