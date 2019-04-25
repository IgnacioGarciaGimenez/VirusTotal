using BusinessLogic.Repository;
using Entities;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace Repository
{
    public class Repository : IRepository
    {
        private readonly IMongoCollection<FileReportDao> _fileReports;
        private readonly IMongoCollection<ScanResultDao> _scanResults;

        public Repository()
        {
            var client = new MongoClient("mongodb://admin:Diamondbad123@localhost:27017");
            var db = client.GetDatabase("VirusTotal");
            _fileReports = db.GetCollection<FileReportDao>("FileReports");
            _scanResults = db.GetCollection<ScanResultDao>("ScanResults");
        }

        public FileReport GetFileReport(string sha256)
        {
            var fileReport = _fileReports.Find(report => report.SHA256 == sha256).FirstOrDefault();
            if (fileReport != null)
            {
                Dictionary<string, ScanEngine> scans = new Dictionary<string, ScanEngine>();
                foreach(KeyValuePair<string, ScanEngineDao> scan in fileReport.Scans)
                {
                    scans.Add(scan.Key,
                        new ScanEngine
                        {
                            Detected = scan.Value.Detected,
                            Version = scan.Value.Version,
                            Malware = scan.Value.Result
                        }
                    );
                }
                return new FileReport
                {
                    SHA256 = sha256,
                    Scans = scans
                };
            }
            return null;
        }

        public void SaveFileReport(FileReport fileReport)
        {
            Dictionary<string, ScanEngineDao> scans = new Dictionary<string, ScanEngineDao>();
            foreach (KeyValuePair<string, ScanEngine> scan in fileReport.Scans)
            {
                scans.Add(scan.Key,
                    new ScanEngineDao
                    {
                        Detected = scan.Value.Detected,
                        Version = scan.Value.Version,
                        Result = scan.Value.Malware
                    });
            }
            FileReportDao report = new FileReportDao
            {
                SHA256 = fileReport.SHA256,
                Scans = scans
            };
            _fileReports.InsertOne(report);
        }

        public ScanResult GetScanResult(string sha256)
        {
            ScanResultDao scanResult = _scanResults.Find<ScanResultDao>(sr => sr.SHA256 == sha256).FirstOrDefault();
            if (scanResult != null)
            {
                ScanResult output = new ScanResult
                {
                    SHA256 = scanResult.SHA256,
                    Permalink = scanResult.Permalink,
                    Analizado = scanResult.Analizado
                };
                return output;
            }
            return null;
            
        }

        public void SaveScanResult(ScanResult scanResult)
        {
            ScanResultDao toSave = new ScanResultDao
            {
                SHA256 = scanResult.SHA256,
                Permalink = scanResult.Permalink,
                Analizado = scanResult.Analizado
            };
            _scanResults.InsertOne(toSave);

        }

        
    }
}
