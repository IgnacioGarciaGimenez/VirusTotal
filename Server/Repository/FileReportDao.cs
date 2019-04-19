using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class FileReportDao
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        
        [BsonElement("Scans")]
        public Dictionary<string, ScanEngineDao> Scans { get; set; }
        
        [BsonElement("SHA256")]
        public string SHA256 { get; set; }
        
        
    }
}
