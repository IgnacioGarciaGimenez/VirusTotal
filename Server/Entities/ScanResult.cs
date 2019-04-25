using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class ScanResult
    {
        public ScanResult() { }
        public string SHA256 { get; set; }
        public string Permalink { get; set; }
        public bool Analizado { get; set; }
    }
}
