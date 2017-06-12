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
        private static IList<Booking> bookings;

        public IList<Booking> Initialize()
        {
            if (bookings == null)
            {
                using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/json/bookings.json")))
                {
                    string json = r.ReadToEnd();
                    bookings = JsonConvert.DeserializeObject<List<Booking>>(json);
                }
            }
          
            return bookings;
        }
    }
}