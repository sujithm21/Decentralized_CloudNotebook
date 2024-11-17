import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {

  public type Note = {
    title : Text;
    content : Text;
  };

  var notes : List.List<Note> = List.nil<Note>();

  public func createNotes(title : Text, content : Text) {
    let newNote : Note = {
      title = title;
      content = content;
    };
    notes := List.push(newNote, notes);
    Debug.print(debug_show (notes));
  };

  public query func readNotes() : async [Note] {
    return List.toArray(notes);
  };

  public func removeNote(id : Nat) {
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id +1);
    notes := List.append(listFront, listBack);
  };
};
