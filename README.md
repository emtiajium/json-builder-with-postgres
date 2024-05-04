# What is this repository for?

[Exploring Advanced SQL Techniques: Aggregation Methods for Structured Data Retrieval](https://dev.to/emtiajium/exploring-advanced-sql-techniques-aggregation-methods-for-structured-data-retrieval-4600)

# How to Run

###### Prerequisites

➜ Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

###### Clone the repo and install all dependencies

➜ `git clone git@github.com:emtiajium/json-builder-with-postgres.git`

➜ `cd json-builder-with-postgres`

###### Run backing services

➜ `docker-compose up -d`

###### Create tables

➜ `sql-snippets/table-creation.sql`

###### Insert data

➜ `sql-snippets/data-insertion.sql`

###### Playground

➜ `sql-snippets/playground-1.sql`

➜ `sql-snippets/playground-2.sql`

➜ `sql-snippets/playground-3.sql`

## Remove backing services

➜ `docker kill json-builder-postgres && docker stop json-builder-postgres && docker rm json-builder-postgres && docker volume rm json-builder-postgres-data`

## Change Logs

- `0.0.1`: --- ---
