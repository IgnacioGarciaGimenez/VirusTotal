using BusinessLogic.Repository;
using BusinessLogic.VirusTotal;
using Entities;
using System;
using System.IO;
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
                    ScanResult scanResult = _repository.GetScanResult(sha256);
                    if (scanResult == null)
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
                        return new Output
                        {
                            Hash = sha256,
                            RequestResult = 2,
                            Scans = null
                        };
                    }
                   
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

        
        public async Task<bool> ScanFile(Stream file, string filename, string hash)
        {
            FileReport fr = _repository.GetFileReport(hash);
            if (fr == null)
            {
                ScanResult srdb = _repository.GetScanResult(hash);
                if (srdb == null)
                {
                    var sr = await _virusTotal.ScanFileAsync(file, filename);
                    _repository.SaveScanResult(sr);
                    return true;
                }
            }
            return false;
            
        }
    }
}

        
    

