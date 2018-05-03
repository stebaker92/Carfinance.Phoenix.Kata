using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
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
        private int Delay = 1000;

        public BookingController() : this(new BookingService())
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
            Thread.Sleep(Delay);

            IEnumerable<Booking> bookings = bookingService.GetAllBookings();

            return Ok(bookings);
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get([FromUri]int bookingId)
        {
            Thread.Sleep(Delay /2);

            IEnumerable<Booking> bookings = bookingService.GetAllBookings();

            return Ok(bookings.First(x => x.BookingId == bookingId));
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Create([FromBody]Booking booking)
        {
            Thread.Sleep(Delay);

            if (booking.ContactName == null)
            {
                return BadRequest("Contact Name is required");
            }

            bookingService.CreateBooking(booking);

            return Ok(booking);
        }
    }
}