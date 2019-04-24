import {Injectable, Inject} from '@angular/core';

const hash = [
  {
    'hash': '6922ea4d8e0da9085fe19012cc0264544863d60f0d169903a35e8c9b51b77ada', 'requestResult': 1, 'scans': {
      'Bkav': {'detected': false, 'version': '1.3.0.9899', 'malware': null},
      'MicroWorld-eScan': {'detected': false, 'version': '14.0.297.0', 'malware': null},
      'CMC': {'detected': false, 'version': '1.1.0.977', 'malware': null},
      'CAT-QuickHeal': {'detected': false, 'version': '14.00', 'malware': null},
      'McAfee': {'detected': false, 'version': '6.0.6.653', 'malware': null},
      'Cylance': {'detected': false, 'version': '2.3.1.101', 'malware': null},
      'SUPERAntiSpyware': {'detected': false, 'version': '5.6.0.1032', 'malware': null},
      'TheHacker': {'detected': false, 'version': '6.8.0.5.4029', 'malware': null},
      'K7GW': {'detected': false, 'version': '11.30.30089', 'malware': null},
      'K7AntiVirus': {'detected': false, 'version': '11.30.30090', 'malware': null},
      'Arcabit': {'detected': false, 'version': '1.0.0.837', 'malware': null},
      'Baidu': {'detected': false, 'version': '1.0.0.2', 'malware': null},
      'NANO-Antivirus': {'detected': false, 'version': '1.0.134.24576', 'malware': null},
      'F-Prot': {'detected': false, 'version': '4.7.1.166', 'malware': null},
      'Symantec': {'detected': false, 'version': '1.8.0.0', 'malware': null},
      'ESET-NOD32': {'detected': false, 'version': '18929', 'malware': null},
      'TrendMicro-HouseCall': {'detected': false, 'version': '10.0.0.1040', 'malware': null},
      'Avast': {'detected': false, 'version': '18.4.3895.0', 'malware': null},
      'ClamAV': {'detected': false, 'version': '0.101.1.0', 'malware': null},
      'Kaspersky': {'detected': false, 'version': '15.0.1.13', 'malware': null},
      'BitDefender': {'detected': false, 'version': '7.2', 'malware': null},
      'Babable': {'detected': false, 'version': '9107201', 'malware': null},
      'ViRobot': {'detected': false, 'version': '2014.3.20.0', 'malware': null},
      'Tencent': {'detected': false, 'version': '1.0.0.1', 'malware': null},
      'Ad-Aware': {'detected': false, 'version': '3.0.5.370', 'malware': null},
      'Sophos': {'detected': false, 'version': '4.98.0', 'malware': null},
      'Comodo': {'detected': false, 'version': '30479', 'malware': null},
      'F-Secure': {'detected': false, 'version': '12.0.86.52', 'malware': null},
      'DrWeb': {'detected': false, 'version': '7.0.34.11020', 'malware': null},
      'Zillya': {'detected': false, 'version': '2.0.0.3760', 'malware': null},
      'TrendMicro': {'detected': false, 'version': '10.0.0.1040', 'malware': null},
      'McAfee-GW-Edition': {'detected': false, 'version': 'v2017.3010', 'malware': null},
      'Emsisoft': {'detected': false, 'version': '2018.4.0.1029', 'malware': null},
      'SentinelOne': {'detected': false, 'version': '1.0.23.276', 'malware': null},
      'Cyren': {'detected': false, 'version': '6.2.0.1', 'malware': null},
      'Jiangmin': {'detected': false, 'version': '16.0.100', 'malware': null},
      'Avira': {'detected': false, 'version': '8.3.3.8', 'malware': null},
      'MAX': {'detected': false, 'version': '2018.9.12.1', 'malware': null},
      'Antiy-AVL': {'detected': false, 'version': '3.0.0.1', 'malware': null},
      'Kingsoft': {'detected': false, 'version': '2013.8.14.323', 'malware': null},
      'Microsoft': {'detected': false, 'version': '1.1.15700.8', 'malware': null},
      'AegisLab': {'detected': false, 'version': '4.2', 'malware': null},
      'ZoneAlarm': {'detected': false, 'version': '1.0', 'malware': null},
      'Avast-Mobile': {'detected': false, 'version': '190224-00', 'malware': null},
      'GData': {'detected': false, 'version': 'A:25.20826B:25.14464', 'malware': null},
      'AhnLab-V3': {'detected': false, 'version': '3.14.1.22785', 'malware': null},
      'VBA32': {'detected': false, 'version': '3.35.1', 'malware': null},
      'ALYac': {'detected': false, 'version': '1.1.1.5', 'malware': null},
      'TACHYON': {'detected': false, 'version': '2019-02-25.01', 'malware': null},
      'Malwarebytes': {'detected': false, 'version': '2.1.1.1115', 'malware': null},
      'Zoner': {'detected': false, 'version': '1.0', 'malware': null},
      'Rising': {'detected': false, 'version': '25.0.0.24', 'malware': null},
      'Yandex': {'detected': false, 'version': '5.5.1.3', 'malware': null},
      'Ikarus': {'detected': false, 'version': '0.1.5.2', 'malware': null},
      'Fortinet': {'detected': false, 'version': '5.4.247.0', 'malware': null},
      'AVG': {'detected': false, 'version': '18.4.3895.0', 'malware': null},
      'Panda': {'detected': false, 'version': '4.6.4.2', 'malware': null},
      'Qihoo-360': {'detected': false, 'version': '1.0.0.1120', 'malware': null}
    }
  }

];


@Injectable()
export class MockDataServices {
  myAppUrl = '';

  constructor() {
  }

  getFileMocked() {
    return hash;
  }
}

