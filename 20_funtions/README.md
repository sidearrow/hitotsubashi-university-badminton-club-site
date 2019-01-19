# hit-u-bad hp backend


## test result
```
  BBS API Test
    ✓ post (1898ms)
    ✓ get posts (242ms)
    ✓ get post (880ms)
    ✓ get post (input correct password) (192ms)
    ✓ put post (915ms)
    ✓ confirm put post (214ms)
    ✓ post comment (1066ms)
    ✓ confirm post comment (767ms)
    ✓ delete comment (fail) (203ms)
    ✓ delete comment (success) (1093ms)
    ✓ confirm delete comment (747ms)
    ✓ get posts by id (1434ms)
    ✓ delet post (miss) (612ms)
    ✓ delete post (success) (1022ms)

  Mizutori API test
    ✓ get obmsg (805ms)


  15 passing (12s)

------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |     95.8 |    84.62 |    93.55 |    95.74 |                   |
 bbsModel.js      |    97.59 |    83.33 |      100 |    97.59 |            70,149 |
 controller.js    |      100 |      100 |      100 |      100 |                   |
 database.js      |      100 |      100 |      100 |      100 |                   |
 mizutoriModel.js |    85.19 |     87.5 |    71.43 |       84 |          4,5,6,32 |
------------------|----------|----------|----------|----------|-------------------|
```