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
        [Route("")]
        public IHttpActionResult Get()
        {
            List<Booking> bookings = GetBookings();
            return Ok(bookings);
        }

        [Route("{bookingId}")]
        public IHttpActionResult Get([FromUri] int bookingId)
        {
            return Ok(GetBookings().Where(x => x.BookingId == bookingId));
        }

        private List<Booking> GetBookings()
        {
            List<Booking> bookings = new List<Booking>();
            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/json/bookings.json")))
            {
                string json = r.ReadToEnd();
                bookings = JsonConvert.DeserializeObject<List<Booking>>(json);
            }

            return bookings;
        }
    }
}