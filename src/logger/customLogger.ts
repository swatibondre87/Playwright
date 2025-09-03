
 export class customLogger {


 private timestamp(): string {
   return new Date().toISOString();
 }


 info(message: string, ...args: any[]) {
   console.log('\u001b[32mOr',`[${this.timestamp()}] INFO: ${message}`, ...args);
 }


 error(message: string, ...args: any[]) {
   console.error('\x1b[31m',`[${this.timestamp()}] ERROR: ${message}`, ...args);
 }


 warn(message: string, ...args: any[]) {
   console.warn('\u001b[33mOr',`[${this.timestamp()}] WARN: ${message}`, ...args);
 }
}
