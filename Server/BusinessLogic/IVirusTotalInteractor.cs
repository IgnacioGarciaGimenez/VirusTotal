using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public interface IVirusTotalInteractor
    {
        Task<Output> GetFileReport(string sha256);
        void ScanFile(byte[] file, string filename);
    }
}
