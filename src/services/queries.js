import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export async function getBlog(db) {
  const dbCollection = collection(db, 'blog');
  const dbOrder = query(dbCollection, orderBy('createAt', 'desc'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getCategories(db) {
  const dbCollection = collection(db, 'categories');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getBoxes(db) {
  const dbCollection = collection(db, 'boxes');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getEducation(db) {
  const dbCollection = collection(db, 'education');
  const dbOrder = query(dbCollection, orderBy('id', 'desc'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getExperience(db) {
  const dbCollection = collection(db, 'experience');
  const dbOrder = query(dbCollection, orderBy('id', 'desc'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getPortfolio(db) {
  const dbCollection = collection(db, 'portfolio');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getProjects(db) {
  const dbCollection = collection(db, 'projects');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getServices(db) {
  const dbCollection = collection(db, 'services');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getSidebar(db) {
  const dbCollection = collection(db, 'sidebar');
  const dbOrder = query(dbCollection, orderBy('id'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getSkills(db) {
  const dbCollection = collection(db, 'skills');
  const dbOrder = query(dbCollection, orderBy('slug'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getSocial(db) {
  const dbCollection = collection(db, 'social');
  const dbOrder = query(dbCollection, orderBy('title'));
  const dbSnapshot = await getDocs(dbOrder);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}

export async function getTestimonials(db) {
  const dbCollection = collection(db, 'testimonials');
  const dbSnapshot = await getDocs(dbCollection);
  const dbList = dbSnapshot.docs.map((doc) => doc.data());
  return dbList;
}
