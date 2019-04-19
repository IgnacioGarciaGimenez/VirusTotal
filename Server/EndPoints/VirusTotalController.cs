using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic;
using Microsoft.AspNetCore.Mvc;

namespace VirusTotal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VirusTotalController : ControllerBase
    {

        private readonly IVirusTotalInteractor _interactor;

        public VirusTotalController(IVirusTotalInteractor interactor)
        {
            _interactor = interactor;
        }
        
        [HttpGet("{hash}")]
        public async Task<ActionResult<Output>> Get(string hash)
        {
            return Ok(await _interactor.GetFileReport(hash));
        }
        

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

    }
}
