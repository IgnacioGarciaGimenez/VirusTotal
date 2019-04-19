using BusinessLogic.Repository;
using BusinessLogic.VirusTotal;
using Entities;
using System;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class VirusTotalInteractor : IVirusTotalInteractor
    {
        private readonly IRepository _repository;
        private readonly IVirusTotal _virusTotal;

        public VirusTotalInteractor(IRepository repo, IVirusTotal virus)
        {
            _repository = repo;
            _virusTotal = virus;
        }

        public async Task<Output> GetFileReport(string sha256)
        {
            FileReport report = _repository.GetFileReport(sha256);
            if (report == null)
            {
                FileReport vtReport = await _virusTotal.GetFileReportAsync(sha256);
                if (vtReport == null)
                {
                    return new Output
                    {
                        Hash = sha256,
                        RequestResult = 0,
                        Scans = null
                    };
                }
                else
                {
                    _repository.SaveFileReport(vtReport);
                    return new Output
                    {
                        Hash = sha256,
                        RequestResult = 1,
                        Scans = vtReport.Scans
                    };
                }
            }
            else
            {
                return new Output
                {
                    Hash = sha256,
                    RequestResult = 1,
                    Scans = report.Scans
                };
            }
        }

        public void ScanFile(byte[] file, string filename)
        {
            throw new NotImplementedException();
        }
    }
}

        
    

