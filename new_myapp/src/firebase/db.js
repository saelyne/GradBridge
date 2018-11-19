import { db } from './firebase';

// User API

export const doCreateEditor = (id, email, admission_year, applied_dept, under_uni, under_major, gpa) =>
  db.ref(`users/${id}`).set({
  	    email,
		admission_year,
		applied_dept,
		under_uni,
		under_major,
		gpa,
  });

export const doCreateVisitor = (id, email, admission_year, under_uni, under_major, expected_grad) =>
  db.ref(`users/${id}`).set({
		email,
		admission_year,
		under_uni,
		under_major,
		expected_grad,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


export const getIntroduction = (semester) =>
  db.ref(`pages/${semester}/Document/Introduction`);

export const getExtracurricular = (semester) =>
db.ref(`pages/${semester}/Document/Extracurricular`);

export const getProgramming = (semester) =>
db.ref(`pages/${semester}/Interview/Programming`);

export const getWaiting = (semester) =>
db.ref(`pages/${semester}/Interview/Waiting`);

export const getRoom1 = (semester) =>
db.ref(`pages/${semester}/Interview/Room1`);

export const getRoom2 = (semester) =>
db.ref(`pages/${semester}/Interview/Room2`);

export const getRoom3 = (semester) =>
db.ref(`pages/${semester}/Interview/Room3`);

export const getComments = (qid) =>
db.ref(`questions/${qid}`);

export const getUser = (uid) =>
db.ref(`users/${uid}`);

export const getQuestion = (qid_path) =>
db.ref(`pages/${qid_path}`);

export const removeQuestion = (qid_path) =>
db.ref(`pages/${qid_path}`).remove();

export const doVote = (qid_path, vote, votefor, voteagainst, text, uid, visibility) =>
  db.ref(`pages/${qid_path}`).set({
		vote, votefor, voteagainst, text, uid, visibility
	});