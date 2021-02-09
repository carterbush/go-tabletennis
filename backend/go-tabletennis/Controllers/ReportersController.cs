using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using go_tabletennis.Models;

namespace go_tabletennis.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportersController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Reporter> GetReporters()
        {
            return Program.Store.GetAllReporters();
        }
    }
}
