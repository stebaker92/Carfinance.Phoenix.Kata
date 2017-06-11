using Carfinance.Phoenix.Kata.Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Carfinance.Phoenix.Kata.Angular.Services.Interfaces
{
    public interface IDataService
    {
        List<Booking> Initialize();
    }
}