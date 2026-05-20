rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /productos/{document=**} {
      allow read: if true;
      allow write: if false; // Solo tú editas desde el panel de Firebase
    }
  }
}
