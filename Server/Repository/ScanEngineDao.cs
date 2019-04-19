using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class ScanEngineDao
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Detected")]
        public bool Detected { get; set; }

        /// <summary>
        /// Version of the engine.
        /// </summary>
        [BsonElement("Version")]
        public string Version { get; set; }

        /// <summary>
        /// Contains the name of the malware, if any.
        /// </summary>
        [BsonElement("Result")]
        public string Result { get; set; }
        
    }
}
