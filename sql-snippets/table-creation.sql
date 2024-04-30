create extension if not exists "uuid-ossp";

-- drop table "Definition";
-- drop table "Vocabulary";

create table if not exists "Vocabulary"
(
    "id"   uuid              not null default uuid_generate_v4()
        constraint "PK_Vocabulary_id" primary key,
    "word" character varying not null
        constraint "UQ_Vocabulary_word" unique
);

create table if not exists "Definition"
(
    "id"           uuid              not null default uuid_generate_v4()
        constraint "PK_Definition_id"
            primary key,
    "meaning"      character varying not null,
    "examples"     jsonb                      default '[]',
    "vocabularyId" uuid              not null
        constraint "FK_Definition_vocabularyId_Vocabulary_id" references "Vocabulary" ("id") on delete cascade on update no action
);
