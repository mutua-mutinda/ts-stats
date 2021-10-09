import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { HtmlReport } from "./htmlReport/HtmlReport";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = new CsvFileReader("football.csv");
const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

const matchReader = new MatchReader(reader);
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
