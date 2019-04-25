using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public interface IVirusTotalInteractor
    {
        Task<Output> GetFileReport(string sha256);
        Task<bool> ScanFile(Stream file, string filename, string hash);
    }
}
