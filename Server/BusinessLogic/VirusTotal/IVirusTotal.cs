using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.VirusTotal
{
    public interface IVirusTotal
    {
        Task<FileReport> GetFileReportAsync(string sha256);
        Task<ScanResult> ScanFileAsync(Stream stream, string filename);
    }
}
