using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using Carfinance.Phoenix.Kata.Angular.Services;
using System.Collections.Generic;

namespace Carfinance.Phoenix.Kata.Angular.Tests
{
    [TestClass]
    public class BookingServiceTests
    {
        private IBookingService bookingService;
        private Mock<IDataService> dataServiceMock;
        private IList<Bookings> bookings;


        [TestInitialize]
        public BookingServiceTests()
        {
            dataServiceMock = new Mock<IDataService>();
            dataServiceMock.Setup(d => d.Initialize).Returns(bookings);

            bookingService = new BookingService(dataServiceMock.Object);
        }


        [TestMethod]
        public void CreateBooking_X_Y()
        {

        }



        [TestMethod]
        public void CreateBooking_X_Y()
        {

        }


        [TestMethod]
        public void CreateBooking_X_Y()
        {

        }


        [TestMethod]
        public void CreateBooking_X_Y()
        {

        }

        [TestMethod]
        public void CreateBooking_X_Y()
        {

        }

    }
}
