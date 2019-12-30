import csvService from "../services/csvService";

export default abstract class AbstractCsvModel {
  private fileName: string;

  protected setFileName(fileName: string) {
    this.fileName = fileName;
  };

  protected get() {
    return csvService.parseToObject(this.fileName);
  };
}
