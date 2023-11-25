export class SQLQueryBuilder {
  private query: string = '';

  public select(field: string): SQLQueryBuilder {
    this.query += `SELECT ${field} `;
    return this;
  }

  public from(field: string): SQLQueryBuilder {
    this.query += `FROM ${field} `;
    return this;
  }

  public build(): string {
    return `${this.query.trim()};`;
  }
}
