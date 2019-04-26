using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class ScanResultDao
    {
        public ScanResultDao() { }
        [BsonId]
        public string SHA256 { get; set; }
        [BsonElement("perma_link")]
        public string Permalink { get; set; }
        [BsonElement("analizado")]
        public bool Analizado { get; set; }
    }
}
