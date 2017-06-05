using Carfinance.Phoenix.Kata.Angular.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Carfinance.Phoenix.Kata.Angular.Controllers
{
    [RoutePrefix("booking")]
    public class BookingController : ApiController
    {
        private static List<Booking> bookings;

        public BookingController()
        {
            if (bookings == null)
            {
                bookings = new List<Booking>();
                using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/json/bookings.json")))
                {
                    string json = r.ReadToEnd();
                    bookings = JsonConvert.DeserializeObject<List<Booking>>(json);
                }
            }            
        }

        [HttpGet]
        [Route("")]        
        public IHttpActionResult Get()
        {
            return Ok(bookings);
        }

        [HttpGet]
        [Route("{bookingId}")]
        public IHttpActionResult Get([FromUri] int bookingId)
        {
            Booking booking = bookings.FirstOrDefault(x => x.BookingId == bookingId);

            if (booking == null) return NotFound();

            return Ok(booking);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Booking booking)
        {
            if (booking == null) return BadRequest();
            int highestBookingId = bookings.Max(b => b.BookingId);

            booking.BookingId = highestBookingId + 1;
            bookings.Add(booking);

            return Ok();
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put(Booking booking)
        {
            if (booking == null) return BadRequest();

            Booking existingBooking = bookings.FirstOrDefault(b => b.BookingId == booking.BookingId);

            if (existingBooking == null) return NotFound();

            existingBooking.ContactName = booking.ContactName;
            existingBooking.ContactNumber = booking.ContactNumber;
            existingBooking.NumberOfPeople = booking.NumberOfPeople;
            existingBooking.TableNumber = booking.TableNumber;
            existingBooking.BookingTime = booking.BookingTime;

            return Ok();
        }
    }
}