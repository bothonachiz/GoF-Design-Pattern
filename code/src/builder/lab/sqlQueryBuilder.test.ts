import { SQLQueryBuilder } from './sqlQueryBuilder';

describe('[Builder - lab] SQL builder', () => {
  it('should build simple sql query', () => {
    const sqlBuilder = new SQLQueryBuilder();

    const sql = sqlBuilder.select('*').from('Users').build();

    expect(sql).toEqual('SELECT * FROM Users;');
  });
});
