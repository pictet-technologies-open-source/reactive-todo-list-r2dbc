CREATE FUNCTION notify_item_deleted()
    RETURNS TRIGGER
AS
   $$
BEGIN
   PERFORM pg_notify('ITEM_DELETED', row_to_json(OLD)::text);
   RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER item_deleted_trigger
   AFTER DELETE
   ON item
   FOR EACH ROW
    EXECUTE PROCEDURE notify_item_deleted();
