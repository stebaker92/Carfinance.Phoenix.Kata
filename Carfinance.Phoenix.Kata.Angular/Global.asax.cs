﻿using System.Web.Http;
using System.Web.Mvc;

namespace Carfinance.Phoenix.Kata.Angular
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
