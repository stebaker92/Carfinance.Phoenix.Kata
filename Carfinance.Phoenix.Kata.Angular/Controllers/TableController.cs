using Carfinance.Phoenix.Kata.Angular.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Http;

namespace Carfinance.Phoenix.Kata.Angular.Controllers
{
    [Route("tables")]
    public class TableController : ApiController
    {
        public IHttpActionResult Get()
        {
            List<Table> tables = new List<Table>();
            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/json/tables.json")))
            {
                string json = r.ReadToEnd();
                tables = JsonConvert.DeserializeObject<List<Table>>(json);
            }
            return Ok(tables);
        }
    }
}