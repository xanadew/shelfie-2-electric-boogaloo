UPDATE bins
SET product_name = $3, price = $4
WHERE shelfId = $1 AND bin = $2;