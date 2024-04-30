-- 1
select "Vocabulary".id as "vocabularyId",
       "Vocabulary".word,
       "Definition".id as "definitionId",
       "Definition".meaning,
       "Definition".examples
from "Vocabulary"
         left join "Definition" on "Vocabulary".id = "Definition"."vocabularyId"
order by "Vocabulary".word;

-- then run js-snippets/json-builder.js with the query response

-- 2.1
select "Vocabulary".id,
       "Vocabulary".word,
       json_agg(json_build_object(
               'id', "Definition".id,
               'meaning', "Definition".meaning,
               'examples', "Definition".examples)) as definitions
from "Vocabulary"
         left join "Definition" on "Vocabulary".id = "Definition"."vocabularyId"
group by "Vocabulary".id, "Vocabulary".word
order by "Vocabulary".word;

-- 2.2
select "Vocabulary".id,
       "Vocabulary".word,
       coalesce(json_agg(json_build_object(
               'id', "Definition".id,
               'meaning', "Definition".meaning,
               'examples', "Definition".examples)) filter (where "Definition".id is not null), '[]') as definitions
from "Vocabulary"
         left join "Definition" on "Vocabulary".id = "Definition"."vocabularyId"
group by "Vocabulary".id, "Vocabulary".word
order by "Vocabulary".word;
