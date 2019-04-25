using BusinessLogic.VirusTotal;
using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using VirusTotalNET;


namespace VirusTotalAdapter
{
    public class VirusTotalAdapter : IVirusTotal
    {
        private readonly VirusTotal virusTotal = new VirusTotal("7ce37b2441cf5a9e9e389c1a26dd2ae42838ecf4766d48ce4b73867efeb5712a");

        public async Task<FileReport> GetFileReportAsync(string sha256)
        {
            VirusTotalNET.Results.FileReport fr = await virusTotal.GetFileReportAsync(sha256);
            if (fr.ResponseCode == VirusTotalNET.ResponseCodes.FileReportResponseCode.Present)
            {
                Dictionary<string, ScanEngine> scans = new Dictionary<string, ScanEngine>();
                foreach (KeyValuePair<string, VirusTotalNET.Objects.ScanEngine> scan in fr.Scans)
                {
                    scans.Add(scan.Key,
                        new ScanEngine
                        {
                            Detected = scan.Value.Detected,
                            Version = scan.Value.Version,
                            Malware = scan.Value.Result
                        });
                }
                return new FileReport
                {
                    SHA256 = sha256,
                    Scans = scans
                };
            }
            return null;
        }

        public async Task<ScanResult> ScanFileAsync(Stream stream, string filename)
        {
            var sr = await virusTotal.ScanFileAsync(stream, filename);
            return new ScanResult
            {
                SHA256 = sr.SHA256,
                Permalink = sr.Permalink,
                Analizado = false
            };
        }

        
    }
}
