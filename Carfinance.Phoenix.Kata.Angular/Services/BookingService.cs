using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Carfinance.Phoenix.Kata.Angular.Services
{
    public class BookingService : IBookingService
    {
        private static List<Booking> bookings;

        public BookingService()
        {
            IDataService dataService = new DataService();
            bookings = dataService.Initialize();
        }

        public BookingService(IDataService dataService)
        {
            bookings = dataService.Initialize();
        }

        public IEnumerable<Booking> GetAllBookings()
        {
            return bookings;
        }

        public Booking GetBookingById(int bookingId)
        {
            Booking booking = bookings.FirstOrDefault(x => x.BookingId == bookingId);
            return booking;
        }

        public void CreateBooking(Booking booking)
        {
            //if (booking == null) 

            int highestBookingId = bookings.Max(b => b.BookingId);
            booking.BookingId = highestBookingId + 1;
            bookings.Add(booking);
        }

        public void UpdateBooking(Booking booking)
        {
            Booking existingBooking = bookings.FirstOrDefault(b => b.BookingId == booking.BookingId);     
            existingBooking.ContactName = booking.ContactName;
            existingBooking.ContactNumber = booking.ContactNumber;
            existingBooking.NumberOfPeople = booking.NumberOfPeople;
            existingBooking.TableNumber = booking.TableNumber;
            existingBooking.BookingTime = booking.BookingTime;
        }


    }
}