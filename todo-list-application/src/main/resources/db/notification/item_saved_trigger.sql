CREATE FUNCTION notify_item_saved()
    RETURNS TRIGGER
AS
   $$
BEGIN
   PERFORM pg_notify('ITEM_SAVED',  row_to_json(NEW)::text);
   RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER item_saved_trigger
   AFTER INSERT OR UPDATE
   ON item
   FOR EACH ROW
    EXECUTE PROCEDURE notify_item_saved();
