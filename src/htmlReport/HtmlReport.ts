import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    `
        <div>
        ${report}
        </div>
        `;

    fs.writeFileSync("report.html", report);
  }
}
