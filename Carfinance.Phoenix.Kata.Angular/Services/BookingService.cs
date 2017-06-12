using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Carfinance.Phoenix.Kata.Angular.Services
{
    public class BookingService : IBookingService
    {
        private static IList<Booking> bookings;

        public BookingService() : this(new DataService())
        {
        }

        public BookingService(IDataService dataService)
        {
            bookings = dataService.Initialize();
        }

        public IList<Booking> GetAllBookings()
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
            if (booking == null) throw new ArgumentNullException("Booking is null");
            if (booking.TableNumber < 1 || booking.TableNumber > 4) throw new ArgumentOutOfRangeException("TableNumber", $"Table number {booking.TableNumber} does not exist");
            booking.BookingId = bookings.Max(b => b.BookingId) + 1;
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