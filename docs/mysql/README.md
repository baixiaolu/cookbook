# MySQL命令进阶

## 1. UNION 实现多级联查的表整成一个自关联表

需求：园区、片区、楼栋、楼层、空间五个表整合成一张自关联表

```sql
SELECT
	`ici_ai_park`.`id` AS `id`,
	`ici_ai_park`.`park_id` AS `uid`,
	`ici_ai_park`.`name` AS `label`,
	0 AS `pid`,
	'8EADB678-A646-1E51-3E87-75A547B8AF19' AS `org_id` 
FROM
	`ici_ai_park` UNION ALL
SELECT
	`ici_ai_area`.`id` AS `id`,
	`ici_ai_area`.`area_id` AS `uid`,
	`ici_ai_area`.`name` AS `label`,
	`ici_ai_area`.`park_id` AS `pid`,
	'8EADB678-A646-1E51-3E87-75A547B8AF19' AS `org_id` 
FROM
	`ici_ai_area` UNION ALL
SELECT
	`ici_ai_building`.`id` AS `id`,
	`ici_ai_building`.`building_id` AS `uid`,
	`ici_ai_building`.`name` AS `label`,
	`ici_ai_building`.`area_id` AS `pid`,
	'8EADB678-A646-1E51-3E87-75A547B8AF19' AS `org_id` 
FROM
	`ici_ai_building` UNION ALL
SELECT
	`ici_ai_floor`.`id` AS `id`,
	`ici_ai_floor`.`floor_id` AS `uid`,
	`ici_ai_floor`.`floor` AS `label`,
	`ici_ai_floor`.`building_id` AS `pid`,
	'8EADB678-A646-1E51-3E87-75A547B8AF19' AS `org_id` 
FROM
	`ici_ai_floor` UNION ALL
SELECT
	`ici_ai_space`.`id` AS `id`,
	`ici_ai_space`.`space_id` AS `uid`,
	`ici_ai_space`.`room` AS `label`,
	`ici_ai_space`.`floor_id` AS `pid`,
	'8EADB678-A646-1E51-3E87-75A547B8AF19' AS `org_id` 
FROM
	`ici_ai_space`
```

## 2. 某表中多个id对应同一个表的联查

需求：园区表中的省、市、区id均对应base_city表，要求联查出省、市、区名称

```sql
select 
park.*,
p.city_name as province_name,
c.city_name as city_name,
d.city_name as district_name

from ici_ai_park park

LEFT JOIN base_city as p on park.province_id = p.id
LEFT JOIN base_city as c on park.city_id = c.id
LEFT JOIN base_city as d on park.district_id = d.id;
```

## 开窗函数

需求：按每个空间查询最新的入住记录，关联到空间表中，并查询出该空间的楼栋信息  

```sql
SELECT
	building.*,
	space.* 
FROM
	ici_ai_space space
	LEFT JOIN ici_ai_building AS building ON space.building_id = building.id
	LEFT JOIN (
	SELECT
		* 
	FROM
		( SELECT *, row_number() over ( PARTITION BY space_id ORDER BY id DESC ) AS rownumber FROM ici_space_checkin ) checkin 
	WHERE
		checkin.rownumber = 1 
	) AS last_checkin ON last_checkin.space_id = space.id 
WHERE
	space.building_id = 1;
```

开窗函数说明：`row_number() over (PARTITION BY space_id ORDER BY id DESC) AS rownumber`，以`space_id`为分组依据，按`id`倒序排列，并返回第1个记录的行号，即最新入住记录的行号，然后再关联到空间表中，并查询出该空间的楼栋信息

参考资料：[SQL进阶-开窗函数() over(partition by)](https://zhuanlan.zhihu.com/p/484290987)