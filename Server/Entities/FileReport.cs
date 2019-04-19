using System;
using System.Collections.Generic;

namespace Entities
{
    public class FileReport
    {
        public string SHA256 { get; set; }
        public Dictionary<string, ScanEngine> Scans { get; set; }
    }
}
