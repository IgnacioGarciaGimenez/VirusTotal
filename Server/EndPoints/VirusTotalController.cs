using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BusinessLogic;
using Microsoft.AspNetCore.Http;
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
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult> Post([FromForm]HashedFile file)
        {
            System.Diagnostics.Debug.WriteLine("hash: " + file.Hash);
            if (file.File == null || file.File.Length == 0) return BadRequest("asd");
            if (await _interactor.ScanFile(file.File.OpenReadStream(), "whatever", file.Hash)) return Ok();
            else return BadRequest();
           
        }

        public class HashedFile
        {
            public IFormFile File { get; set; }
            public string Hash { get; set; }
        }

    }
}
