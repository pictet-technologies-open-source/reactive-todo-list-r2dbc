CREATE FUNCTION notify_item_deleted()
    RETURNS TRIGGER
AS
   $$
DECLARE
   item JSON;
BEGIN
   item = row_to_json(OLD);
   PERFORM pg_notify('item_deleted', item);
   RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER item_deleted_trigger
   AFTER DELETE
   ON item
   FOR EACH ROW
    EXECUTE PROCEDURE notify_item_deleted();
