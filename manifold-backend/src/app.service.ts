import { Injectable } from '@nestjs/common';
import * as os from 'node:os';

@Injectable()
export class AppService {
  healthCheck() {
    return {
      message: '[PONGG]: I am alive',
      information: {
        hostname: os.hostname(),
        totalCpu: os.cpus().length,
        architecture: os.arch(),
        freeMemory: os.freemem(),
        avgLoad: os.loadavg(),
        machine: os.machine(),
        platform: os.platform(),
        networkInfo: os.networkInterfaces(),
        uptime: os.uptime(),
        release: os.release(),
      },
    };
  }
}
