UPDATE bins
SET product_name = $3, price = $4
WHERE bin = $2 AND shelfid = $1