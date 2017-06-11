
using Carfinance.Phoenix.Kata.Angular.Models;
using System.Collections.Generic;

namespace Carfinance.Phoenix.Kata.Angular.Services.Interfaces
{
    public interface IBookingService
    {
        IEnumerable<Booking> GetAllBookings();

        Booking GetBookingById(int bookingId);

        void CreateBooking(Booking booking);

        void UpdateBooking(Booking booking);
    }
}