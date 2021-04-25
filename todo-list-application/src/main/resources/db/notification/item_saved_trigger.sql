CREATE FUNCTION notify_item_saved()
    RETURNS TRIGGER
AS
   $$
DECLARE
   item JSON;
BEGIN
   item = row_to_json(NEW);
   PERFORM pg_notify('item_saved', item);
   RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER item_saved_trigger
   AFTER INSERT OR UPDATE
   ON item
   FOR EACH ROW
    EXECUTE PROCEDURE notify_item_saved();
