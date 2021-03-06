import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import messages from './messages.saga';
import survey from './survey.saga';
import companies from './companies.saga';
import rule from './rule.saga';
import companyDetails from './companyDetails.saga';
import userData from './userData.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    messages(), // contains user name and message
    survey(), // contains preferences ratings and user.id
    companies(), // for interacting with wikirate API
    companyDetails(), // for interacting with wikirate API
    rule(),
    userData()

  ]);
}
