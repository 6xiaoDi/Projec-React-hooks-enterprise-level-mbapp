import getUser from "./login"
import works from "./works";
import lecturers from "./lecturers";
import work from "./work";
import good from "./good";
import messageList from "./messageList";

function index (state={},action) {
    return state;
}

export default {
    index,
    getUser,
    works,
    lecturers,
    work,
    good,
    messageList
}