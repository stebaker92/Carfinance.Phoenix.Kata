using Carfinance.Phoenix.Kata.Angular.Services.Interfaces;
using System.Collections.Generic;
using System.Web;
using Carfinance.Phoenix.Kata.Angular.Models;
using Newtonsoft.Json;
using System.IO;

namespace Carfinance.Phoenix.Kata.Angular.Services
{

    /// <summary>
    /// 
    /// 
    /// 
    /// 
    /// 
    /// 
    /// 
    /// 
    /// Not here.
    /// 
    /// 
    /// 
    /// </summary>
    /// <seealso cref="Carfinance.Phoenix.Kata.Angular.Services.Interfaces.IDataService" />
    public class DataService : IDataService
    {
        public List<Booking> Initialize()
        {
            var  bookings = new List<Booking>();
            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/json/bookings.json")))
            {
                string json = r.ReadToEnd();
                bookings = JsonConvert.DeserializeObject<List<Booking>>(json);
            }

            return bookings;
        }
    }
}