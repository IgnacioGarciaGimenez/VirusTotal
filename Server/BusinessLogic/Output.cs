using Entities;
using System;
using System.Collections.Generic;

namespace BusinessLogic
{
    public class Output
    {
        public string Hash { get; set; }
        public int RequestResult { get; set; }
        public Dictionary<string, ScanEngine> Scans { get; set; }
    }
}
