using Carfinance.Phoenix.Kata.Angular.Models;
using Carfinance.Phoenix.Kata.Angular.Services;
using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
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

        [HttpGet]
        [Route("{bookingId}")]
        public IHttpActionResult Get([FromUri] int bookingId)
        {
            Booking booking = bookingService.GetBookingById(bookingId);

            return Ok(booking);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Booking booking)
        {
            bookingService.CreateBooking(booking);

            return Ok();
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put(Booking booking)
        {
            bookingService.UpdateBooking(booking);

            return Ok();
        }
    }
}