import api from './api';

export const createCandidate = () => {
  return api.post('/candidate/new');
};

export const getCandidate = () => {
  return api.get('/candidate/${candidate_id}');
};

export const getCandidateContact = () => {
  return api.get('/candidate/${candidate_id}/contact');
};

export const getPositionCandidates = () => {
  return api.get('/candidate/post/${position}');
};

export const uploadDocuments = () => {
  return api.post('/candidate/${candidate_id}/documents');
};

export const downloadDocuments = () => {
  return api.get('/candidate/${candidate_id}/documents');
};