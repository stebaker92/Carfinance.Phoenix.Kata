using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System.Collections.Generic;
using System.Web.Http;

namespace Carfinance.Phoenix.Kata.Angular.Controllers
{
    /// <summary>
    /// Your Name:
    /// Date: 
    /// Random fact about you: 
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    [RoutePrefix("booking")]
    public class BookingController : ApiController
    {
        private readonly IBookingService bookingService;

        public BookingController() : this (new BookingService())
        {
        }

        public BookingController(IBookingService bookingService)
        {
            this.bookingService = bookingService;
        }

        [HttpGet]
        [Route("")]        
        public IHttpActionResult Get()
        {
            IEnumerable<Booking> bookings = bookingService.GetAllBookings();

            return Ok(bookings);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Create([FromBody]Booking booking)
        {
            if(booking.ContactName == null)
            {
                return BadRequest("Contact Name is required");
            }

            bookingService.CreateBooking(booking);

            return Ok(booking);
        }
    }
}