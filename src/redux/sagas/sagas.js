import axios from 'axios';


function* postStudent(){
    const student = yield call(axios.axios.get)
}

function* postStudentWatcher(){
    const response = yield takeLatest('POST_STUDENT', postStudent);
}