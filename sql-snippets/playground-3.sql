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
