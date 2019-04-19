using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Repository
{
    public interface IRepository
    {
        FileReport GetFileReport(string sha256);
        void SaveFileReport(FileReport fileReport);
        
    }
}
